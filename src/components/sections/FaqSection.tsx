"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Car, Bus, Undo2, Footprints } from "lucide-react";

const FAQ_ITEMS = [
  {
    icon: Car,
    question: "¿Habrá aparcamiento cerca de la iglesia?",
    answer:
      "¡Sí! Podréis aparcar en el aparcamiento público de la plaza de la Iglesia, con entrada por la calle Juan Torrico Lomeña. También hay plazas disponibles en las calles cercanas, así que no tendréis problema para llegar tranquilamente.",
  },
  {
    icon: Bus,
    question: "¿Cómo llegar desde la iglesia al banquete?",
    answer:
      "Hemos preparado un autobús privado para llevaros hasta el lugar del banquete. Saldrá a las 13:15 desde la Avenida de Cervantes, 16 —apenas dos minutos a pie desde la iglesia—. Solo tenéis que seguir a la gente guapa.",
  },
  {
    icon: Undo2,
    question: "¿Y de vuelta? ¿Hay autobús?",
    answer:
      "Por supuesto. Habrá autobús de regreso a las 20:00 para quienes lo necesiten, y otro más al final de la fiesta, para los que quieran exprimir cada momento hasta el último baile.",
  },
  {
    icon: Footprints,
    question: "¿Algún consejo para la pista de baile?",
    answer:
      "Si pensáis darlo todo en la pista —y esperamos que así sea— os recomendamos traer un calzado más cómodo para la noche. Los tacones y los zapatos de vestir son perfectos para la ceremonia y la cena, pero cuando llegue el momento de bailar, los pies os lo agradecerán.",
  },
] as const;

export function FaqSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px -60px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section id="faq" className="section-padding pt-2 sm:pt-4">
      <div ref={ref} className="section-content">
        <p className="section-title-script" style={{ fontFamily: "var(--font-script)" }}>
          Antes del gran día
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
          Queremos que ese día lo único en lo que tengáis que pensar sea en disfrutar. Por eso, hemos
          reunido aquí las respuestas a las dudas más habituales para que todo fluya sin preocupaciones.
        </p>

        <motion.div
          className="mx-auto mt-10 sm:mt-12 max-w-4xl space-y-5 sm:space-y-6 text-left"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {FAQ_ITEMS.map((item) => (
            <motion.div
              key={item.question}
              variants={itemVariants}
              className="rounded-lg border border-[var(--border-soft)]/70 bg-[var(--background-card)] px-4 py-4 sm:p-5 md:p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: "rgba(205, 191, 230, 0.4)",
                    color: "var(--text-primary)",
                  }}
                  aria-hidden
                >
                  <item.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div className="w-full min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)]">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-[15px] sm:text-base leading-relaxed text-[var(--text-muted)]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
