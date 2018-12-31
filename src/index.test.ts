import { logger } from 'hypernova/server';
import plugin from '.';

describe('plugin.onError(_context: any, err: Error)', () => {
  const dummyContext = {};
  const logSpy = jest.fn();

  beforeAll(() => {
    logger.init(undefined, { log: logSpy });
  });

  it('should log a stack trace of the error', () => {
    plugin.onError(dummyContext, new Error());
    expect(logSpy).toBeCalledTimes(1);
  });

  afterEach(() => {
    logSpy.mockClear();
  });
});
