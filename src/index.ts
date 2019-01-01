import { logger } from 'hypernova/server';

class ServerStackTracePlugin {
  constructor(options?: any) {
    // Do nothing for now
  }

  public onError(context: any, err: Error) {
    if (err.stack !== undefined) {
      logger.error(err.stack);
    }
  }
}

export = ServerStackTracePlugin;
