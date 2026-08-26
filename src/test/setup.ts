import "@testing-library/jest-dom";

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

class ResizeObserverMock implements ResizeObserver {
  observe = () => undefined;
  unobserve = () => undefined;
  disconnect = () => undefined;
}

if (typeof globalThis.ResizeObserver === "undefined") {
  globalThis.ResizeObserver = ResizeObserverMock as unknown as typeof ResizeObserver;
}
