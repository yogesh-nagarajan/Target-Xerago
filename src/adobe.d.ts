export interface AdobeTargetOffer {
  [key: string]: any;
}

export interface AdobeTargetOptions {
  mbox: string;
  params?: Record<string, string>;
  success?: (offer: AdobeTargetOffer[]) => void;
  error?: (status: any, error: any) => void;
  offer?: AdobeTargetOffer[];
}

interface AdobeTarget {
  getOffer: (options: AdobeTargetOptions) => void;
  applyOffer: (options: AdobeTargetOptions) => void;
}

interface Adobe {
  target: AdobeTarget;
}

declare global {
  interface Window {
    adobe: Adobe;
  }
  const adobe: Adobe;
}

export { };
