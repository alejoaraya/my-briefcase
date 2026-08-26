import "@testing-library/jest-dom";

// jsdom no implementa IntersectionObserver, pero framer-motion lo necesita
// para whileInView (usado en ProjectItem, HeroSection, etc.). Sin este
// polyfill, cualquier test que monte un componente con whileInView explota
// con "IntersectionObserver is not defined" antes de poder testear nada.
class IntersectionObserverMock implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];

  observe = () => undefined;
  unobserve = () => undefined;
  disconnect = () => undefined;
  takeRecords = (): IntersectionObserverEntry[] => [];
}

if (typeof globalThis.IntersectionObserver === "undefined") {
  globalThis.IntersectionObserver = IntersectionObserverMock as unknown as typeof IntersectionObserver;
}

// Mismo caso que arriba: algunas librerías de UI (daisyUI/Tailwind-adjacent
// tooling, componentes con medidas) esperan ResizeObserver, que jsdom
// tampoco implementa.
class ResizeObserverMock implements ResizeObserver {
  observe = () => undefined;
  unobserve = () => undefined;
  disconnect = () => undefined;
}

if (typeof globalThis.ResizeObserver === "undefined") {
  globalThis.ResizeObserver = ResizeObserverMock as unknown as typeof ResizeObserver;
}
