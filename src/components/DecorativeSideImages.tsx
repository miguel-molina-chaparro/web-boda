"use client";

/**
 * Decoraciones laterales con eucalipto.
 * En móvil usamos variantes más grandes para dar más presencia.
 */

const LEFT_IMAGE = "/eucalyptus_left.png";
const RIGHT_IMAGE = "/eucalyptus_right.png";
const OPACITY = 0.6;

export function DecorativeSideImages() {
  return (
    <>
      {/* Mobile: imagen grande única por lateral (sin patrón repetido) */}
      <div
        className="fixed left-0 top-0 z-20 flex h-[100dvh] w-[92px] pointer-events-none items-start justify-start overflow-visible sm:hidden"
        aria-hidden
        style={{ opacity: OPACITY }}
      >
        <img
          src={LEFT_IMAGE}
          alt=""
          className="h-full w-auto max-w-none object-contain object-left-top select-none"
          draggable={false}
        />
      </div>
      <div
        className="fixed right-0 top-0 z-20 flex h-[100dvh] w-[92px] pointer-events-none items-start justify-end overflow-visible sm:hidden"
        aria-hidden
        style={{ opacity: OPACITY }}
      >
        <img
          src={RIGHT_IMAGE}
          alt=""
          className="h-full w-auto max-w-none object-contain object-right-top select-none"
          draggable={false}
        />
      </div>

      {/* Desktop/tablet: imagen única anclada al borde */}
      <div
        className="fixed left-0 top-0 z-20 hidden h-screen w-[180px] pointer-events-none items-start justify-start overflow-visible sm:flex md:w-[260px] lg:w-[300px]"
        aria-hidden
        style={{ opacity: OPACITY }}
      >
        <img
          src={LEFT_IMAGE}
          alt=""
          className="h-full w-auto object-contain object-left-top select-none"
          draggable={false}
        />
      </div>
      <div
        className="fixed right-0 top-0 z-20 hidden h-screen w-[180px] pointer-events-none items-start justify-end overflow-visible sm:flex md:w-[260px] lg:w-[300px]"
        aria-hidden
        style={{ opacity: OPACITY }}
      >
        <img
          src={RIGHT_IMAGE}
          alt=""
          className="h-full w-auto object-contain object-right-top select-none"
          draggable={false}
        />
      </div>
    </>
  );
}
