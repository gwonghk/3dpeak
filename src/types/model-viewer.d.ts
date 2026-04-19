// Type declarations for @google/model-viewer custom element
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        poster?: string;
        "auto-rotate"?: string;
        "camera-controls"?: string;
        "shadow-intensity"?: string;
        ar?: string;
        "ar-modes"?: string;
      };
    }
  }
}

export {};
