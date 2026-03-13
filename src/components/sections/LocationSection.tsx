export function LocationSection() {
  return (
    <section id="location" className="section-padding">
      <div className="centered-container">
        <p className="section-kicker">El lugar</p>
        <h2 className="section-title-script font-script">
          Location
        </h2>
        <div className="mt-10 card-elegant p-6 md:p-8 text-left max-w-lg mx-auto">
          <p className="font-serif text-lg text-[var(--text-primary)]">
            Nombre del lugar — placeholder
          </p>
          <p className="mt-2 text-[var(--text-muted)] text-sm">
            Dirección y enlace al mapa — placeholder
          </p>
        </div>
      </div>
    </section>
  );
}
