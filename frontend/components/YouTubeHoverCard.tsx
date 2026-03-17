"use client";

import { useEffect, useRef, useId } from "react";

type Props = {
  videoId: string;
  className?: string;
};

export default function YouTubeHoverCard({ videoId, className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);
  // useId gives a stable id across server and client for hydration
  const reactId = useId();
  const uid = `yt-player-${String(reactId).replace(/[:]/g, "-")}`;

  useEffect(() => {
    // load YT iframe API if not present
    if (typeof window === "undefined") return;

    function onYouTubeIframeAPIReady() {
      if (!containerRef.current) return;
      playerRef.current = new (window as any).YT.Player(uid, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          loop: 1,
          playlist: videoId,
          playsinline: 1,
        },
        events: {
          onReady: (e: any) => {
            // ensure muted autoplay
            try {
              e.target.mute();
              e.target.playVideo();
            } catch (err) {
              // ignore
            }

            // Make the iframe fill its absolutely-positioned container
            const fitIframe = () => {
              try {
                const iframe = e.target.getIframe();
                if (!iframe) return;
                iframe.style.position = 'absolute';
                iframe.style.top = '0';
                iframe.style.left = '0';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
              } catch (err) {}
            };

            fitIframe();
          },
          onStateChange: (_: any) => {},
        },
      });
    }

    if ((window as any).YT && (window as any).YT.Player) {
      onYouTubeIframeAPIReady();
    } else {
      // attach global callback and inject script once
      (window as any).onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      if (!document.querySelector("script[data-yt]")) {
        const s = document.createElement("script");
        s.src = "https://www.youtube.com/iframe_api";
        s.setAttribute("data-yt", "1");
        document.body.appendChild(s);
      }
    }

    return () => {
      try {
        if (playerRef.current && playerRef.current.destroy) playerRef.current.destroy();
      } catch (e) {}
    };
  }, [videoId]);

  const playWithSoundFromStart = () => {
    const p = playerRef.current;
    if (!p) return;
    try {
      p.seekTo(0);
      p.unMute();
      p.playVideo();
    } catch (err) {}
  };

  const revertToMuted = () => {
    const p = playerRef.current;
    if (!p) return;
    try {
      p.mute();
      // continue playing muted (optional)
      p.playVideo();
    } catch (err) {}
  };

  return (
    <div
      ref={containerRef}
      className={`youtube-hover-card relative ${className}`}
      onMouseEnter={() => playWithSoundFromStart()}
      onMouseLeave={() => revertToMuted()}
      onClick={() => playWithSoundFromStart()}
      role="button"
      aria-label="Play video with sound"
    >
      <div id={uid} className="absolute inset-0" />
      {/* a simple poster overlay so it looks nice before iframe loads */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
    </div>
  );
}
