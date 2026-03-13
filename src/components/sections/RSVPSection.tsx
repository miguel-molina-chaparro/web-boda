export function RSVPSection() {
  return (
    <section id="rsvp" className="section-padding">
      <div className="centered-container">
        <p className="section-kicker">Confirma tu asistencia</p>
        <h2 className="section-title-script font-script">
          RSVP
        </h2>
        <div className="mt-10 card-elegant p-6 md:p-8 max-w-md mx-auto text-left">
          <p className="text-sm text-[var(--text-muted)] mb-4">
            Formulario — placeholder (nombre, acompañantes, mensaje)
          </p>
          <div className="space-y-3">
            <div className="h-10 rounded border border-[var(--border-soft)] bg-[var(--background-card)]" />
            <div className="h-10 rounded border border-[var(--border-soft)] bg-[var(--background-card)]" />
            <div className="h-24 rounded border border-[var(--border-soft)] bg-[var(--background-card)]" />
            <div className="h-10 rounded border border-[var(--border-soft)] bg-[var(--accent-rose)]/20 w-32" />
          </div>
        </div>
      </div>
    </section>
  );
}
