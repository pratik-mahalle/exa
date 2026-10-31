"use client";

import { useRef, useState } from "react";

export function DemoVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState(false);

  async function play() {
    if (!video.current) return;
    setError(false);
    try {
      await video.current.play();
      setStarted(true);
      video.current.focus();
    } catch {
      setError(true);
    }
  }

  return (
    <div className="cw-demo-player">
      <video
        ref={video}
        controls={started}
        playsInline
        preload="none"
        poster="/cloudwake/clip-poster.jpg"
        width="1920"
        height="1080"
        aria-label="Cloudwake in 15 seconds"
        tabIndex={started ? 0 : -1}
        onPlay={() => setStarted(true)}
        onError={() => setError(true)}
      >
        <source src="/cloudwake/clip.mp4" type="video/mp4" />
        <track kind="captions" src="/cloudwake/clip.vtt" srcLang="en" label="English" />
        <a href="/cloudwake/clip.mp4">Watch Cloudwake in 15 seconds</a>
      </video>
      {!started && (
        <button className="cw-demo-play" type="button" onClick={play} aria-label="Play Cloudwake video, 15 seconds">
          <span className="cw-demo-play-icon" aria-hidden="true">▶</span>
          <span>Play the film</span>
        </button>
      )}
      {error && <p className="cw-demo-error" role="alert">The video couldn&apos;t play. <a href="/cloudwake/clip.mp4">Open the video directly</a>.</p>}
    </div>
  );
}
