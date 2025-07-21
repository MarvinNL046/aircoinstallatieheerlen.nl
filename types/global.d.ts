declare global {
  var rateLimitMap: Map<string, number[]>
  
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
    fbq?: (command: string, ...args: any[]) => void;
  }
}

export {}