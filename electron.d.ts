declare global {
  interface Window {
    electron: {
      print: (content: string) => Promise<void>;
    };
  }
}

export {};
