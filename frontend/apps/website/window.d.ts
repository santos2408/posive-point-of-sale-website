export {};

declare global {
  interface Window {
    SVGInject: (elements: Element | Element[]) => void;
  }
}
