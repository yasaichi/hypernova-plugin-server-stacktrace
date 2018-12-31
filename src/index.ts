import { logger } from 'hypernova/server';

export default {
  onError(_context: any, err: Error) {
    if (err.stack !== undefined) {
      logger.error(err.stack);
    }
  }
};
