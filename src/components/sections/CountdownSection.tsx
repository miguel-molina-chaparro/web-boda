export function CountdownSection() {
  return (
    <section id="countdown" className="section-padding">
      <div className="centered-container">
        <p className="section-kicker">Para el gran día</p>
        <h2 className="section-title-script font-script">
          Countdown
        </h2>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {["Días", "Horas", "Min", "Seg"].map((label) => (
            <div
              key={label}
              className="card-elegant min-w-[4rem] px-4 py-3"
            >
              <span className="block font-serif text-2xl text-[var(--text-primary)]">—</span>
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
