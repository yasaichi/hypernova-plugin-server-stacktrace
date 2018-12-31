declare module "hypernova/server" {
  interface LoggerInstance {
    log(level: string, message: string, meta: any): void;
  }

  export let logger: {
    init(config?: any, loggerInstance?: LoggerInstance): void;
    error(message: string, meta?: any): void;
  };
}
