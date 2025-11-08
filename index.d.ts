declare module '@apiverve/exchangerate' {
  export interface exchangerateOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface exchangerateResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class exchangerateWrapper {
    constructor(options: exchangerateOptions);

    execute(callback: (error: any, data: exchangerateResponse | null) => void): Promise<exchangerateResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: exchangerateResponse | null) => void): Promise<exchangerateResponse>;
    execute(query?: Record<string, any>): Promise<exchangerateResponse>;
  }
}
