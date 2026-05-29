"use client";

import { motion, useReducedMotion } from "framer-motion";
import localFont from "next/font/local";
import { couple, hero, flags } from "@/config/wedding";

const fontParisienne = localFont({
  src: "../../fonts/Parisienne-Regular.ttf",
  display: "swap",
});

const fontGreatVibes = localFont({
  src: "../../fonts/GreatVibes-Regular.ttf",
  display: "swap",
});

const fontSacramento = localFont({
  src: "../../fonts/Sacramento-Regular.ttf",
  display: "swap",
});

const fontMigraMedium = localFont({
  src: "../../fonts/Migra-Medium.ttf",
  display: "swap",
});

const easeElegant = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.22,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.88,
      ease: easeElegant,
    },
  },
};

const itemVariantsReduced = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
};

function toCapitalizedEs(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return trimmed;
  const lower = trimmed.toLocaleLowerCase("es-ES");
  return lower.charAt(0).toLocaleUpperCase("es-ES") + lower.slice(1);
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const noAnimation = !flags.enableAnimations || reduceMotion;
  const variants = noAnimation ? itemVariantsReduced : itemVariants;

  const scrollToVideo = () => {
    document.getElementById("video")?.scrollIntoView({ behavior: "smooth" });
  };

  /* Contenedor único: flex column, centrado estricto. Sin max-width ni padding que rompan el eje. */
  const heroBlockClass =
    "flex flex-col items-center justify-center text-center w-max";

  /* Eje central de la página pasa entre el 2 y el 0: "JUNIO | " + "20" + " | SÁBADO" */
  const dateLineParts = hero.dateLine.split(" | ");
  const dateMonth = toCapitalizedEs(dateLineParts[0] ?? "Junio");
  const dateCenter = dateLineParts[1] ?? "20";
  const dateWeekday = toCapitalizedEs(dateLineParts[2] ?? "Sábado");

  const dateLineClass =
    "font-serif text-lg sm:text-xl md:text-2xl tracking-[0.2em] sm:tracking-[0.25em] text-[var(--text-primary)]";

  if (noAnimation) {
    return (
      <section
        id="hero"
        className="hero-paper-texture relative min-h-[100dvh] flex flex-col items-center justify-center px-4 pt-20 pb-28 sm:pt-24 sm:pb-32 md:pt-28 md:pb-36"
      >
        <div className={heroBlockClass}>
          <p
            className={`${fontParisienne.className} block w-max mx-auto text-[var(--text-primary)] text-2xl sm:text-3xl md:text-4xl mb-1`}
          >
            {hero.saveTheDate}
          </p>
          <h1
            className={`${fontGreatVibes.className} flex flex-col items-center gap-5 sm:gap-6 text-[var(--text-primary)] mt-4 sm:mt-5 md:mt-6 leading-[1.12] md:leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-max mx-auto`}
            aria-label={`${couple.name1} y ${couple.name2}`}
          >
            <span className="block w-max mx-auto">{couple.name1}</span>
            <span className="block w-max mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none">
              y
            </span>
            <span className="block w-max mx-auto">{couple.name2}</span>
          </h1>
          <p
            className={`${fontParisienne.className} block w-max mx-auto text-[var(--text-primary)] text-2xl sm:text-3xl md:text-4xl mt-5 sm:mt-6 md:mt-8`}
          >
            {hero.weAreGettingMarried}
          </p>
          <div className="flex flex-col items-center w-full mt-10 sm:mt-12 md:mt-14">
            <div className="flex flex-col items-center text-center sm:hidden">
              <p className="font-serif text-lg tracking-[0.2em] text-[var(--text-primary)]">
                <span className={fontSacramento.className}>{dateMonth}</span>
              </p>
              <p className="font-serif text-lg uppercase tracking-[0.2em] text-[var(--text-primary)] leading-tight">
                | <span className={fontMigraMedium.className}>{dateCenter}</span> |
              </p>
              <p className="font-serif text-lg tracking-[0.2em] text-[var(--text-primary)]">
                <span className={fontSacramento.className}>{dateWeekday}</span>
              </p>
            </div>
            <div
              className={`hidden sm:grid grid-cols-[1fr_auto_1fr] w-full items-center gap-0 ${dateLineClass}`}
              style={{ fontFamily: "var(--font-serif)" }}
            >
              <span className="text-right pr-0.5">
                <span className={fontSacramento.className}>{dateMonth}</span> |{" "}
              </span>
              <span className={`text-center tabular-nums ${fontMigraMedium.className}`}>
                {dateCenter}
              </span>
              <span className="text-left pl-0.5">
                {" | "}
                <span className={fontSacramento.className}>{dateWeekday}</span>
              </span>
            </div>
            <p
              className={`${fontMigraMedium.className} block w-max mx-auto font-serif text-base sm:text-lg md:text-xl uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[var(--text-primary)] mt-1.5`}
            >
              {hero.year}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={scrollToVideo}
          className="focus-ring absolute bottom-[max(2rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-0.5 rounded text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          aria-label={hero.ctaAriaLabel}
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-sans font-light">
            {hero.ctaLabel}
          </span>
          <span className="text-[var(--text-muted)] animate-bounce-subtle" aria-hidden>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </section>
    );
  }

  return (
    <section
      id="hero"
      className="hero-paper-texture relative min-h-[100dvh] flex flex-col items-center justify-center px-4 pt-20 pb-28 sm:pt-24 sm:pb-32 md:pt-28 md:pb-36"
    >
      <motion.div
        className={heroBlockClass}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={variants}
          className={`${fontParisienne.className} block w-max mx-auto text-[var(--text-primary)] text-2xl sm:text-3xl md:text-4xl mb-1`}
        >
          {hero.saveTheDate}
        </motion.p>

        <motion.p
          variants={variants}
          className={`${fontGreatVibes.className} block w-max mx-auto text-[var(--text-primary)] mt-4 sm:mt-5 md:mt-6 leading-[1.12] md:leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
        >
          {couple.name1}
        </motion.p>
        <motion.p
          variants={variants}
          className={`${fontGreatVibes.className} block w-max mx-auto my-3 sm:my-4 text-[var(--text-primary)] leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
          aria-hidden
        >
          y
        </motion.p>
        <motion.h1
          variants={variants}
          className={`${fontGreatVibes.className} block w-max mx-auto text-[var(--text-primary)] mt-1 sm:mt-2 leading-[1.1] md:leading-[1.03] text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}
          aria-label={`${couple.name1} y ${couple.name2}`}
        >
          {couple.name2}
        </motion.h1>

        <motion.p
          variants={variants}
          className={`${fontParisienne.className} block w-max mx-auto text-[var(--text-primary)] text-2xl sm:text-3xl md:text-4xl mt-5 sm:mt-6 md:mt-8`}
        >
          {hero.weAreGettingMarried}
        </motion.p>

        <motion.div variants={variants} className="flex flex-col items-center w-full mt-10 sm:mt-12 md:mt-14">
          <div className="flex flex-col items-center text-center sm:hidden">
            <p className="font-serif text-lg tracking-[0.2em] text-[var(--text-primary)]">
              <span className={fontSacramento.className}>{dateMonth}</span>
            </p>
            <p className="font-serif text-lg uppercase tracking-[0.2em] text-[var(--text-primary)] leading-tight">
              | <span className={fontMigraMedium.className}>{dateCenter}</span> |
            </p>
            <p className="font-serif text-lg tracking-[0.2em] text-[var(--text-primary)]">
              <span className={fontSacramento.className}>{dateWeekday}</span>
            </p>
          </div>
          <div
            className={`hidden sm:grid grid-cols-[1fr_auto_1fr] w-full items-center gap-0 ${dateLineClass}`}
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <span className="text-right pr-0.5">
              <span className={fontSacramento.className}>{dateMonth}</span> |{" "}
            </span>
            <span className={`text-center tabular-nums ${fontMigraMedium.className}`}>
              {dateCenter}
            </span>
            <span className="text-left pl-0.5">
              {" | "}
              <span className={fontSacramento.className}>{dateWeekday}</span>
            </span>
          </div>
        </motion.div>
        <motion.p
          variants={variants}
          className={`${fontMigraMedium.className} block w-max mx-auto font-serif text-base sm:text-lg md:text-xl uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[var(--text-primary)] mt-1.5`}
        >
          {hero.year}
        </motion.p>
      </motion.div>

      <button
        type="button"
        onClick={scrollToVideo}
        className="focus-ring absolute bottom-[max(2rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-0.5 rounded text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
        aria-label={hero.ctaAriaLabel}
      >
        <motion.span
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.25, duration: 0.75, ease: easeElegant }}
          className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-sans font-light"
        >
          {hero.ctaLabel}
        </motion.span>
        <span className="text-[var(--text-muted)] animate-bounce-subtle" aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </span>
      </button>
    </section>
  );
}
