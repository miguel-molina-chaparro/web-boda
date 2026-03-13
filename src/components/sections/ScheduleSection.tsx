export function ScheduleSection() {
  return (
    <section id="schedule" className="section-padding">
      <div className="centered-container">
        <p className="section-kicker">Programa del día</p>
        <h2 className="section-title-script font-script">
          Schedule
        </h2>
        <div className="mt-10 space-y-4 max-w-md mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card-elegant p-4 flex items-center gap-4">
              <span className="font-serif text-[var(--accent-rose)] shrink-0">—</span>
              <div className="text-left">
                <p className="font-serif text-[var(--text-primary)]">Hora — placeholder</p>
                <p className="text-sm text-[var(--text-muted)]">Descripción — placeholder</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
