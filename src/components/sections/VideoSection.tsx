"use client";

export function VideoSection() {
  return (
    <section id="video" className="section-padding">
      <div className="section-content">
        <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-lg border border-[var(--border-soft)] bg-[var(--background-card)] shadow-[var(--shadow-soft)]">
          <video
            className="block h-auto w-full"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Video destacado de la boda"
          >
            <source src="/videos/reel-hero.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de vídeo.
          </video>
        </div>
      </div>
    </section>
  );
}
