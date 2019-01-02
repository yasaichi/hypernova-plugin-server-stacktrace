import express from 'express';
import { renderReact } from 'hypernova-react';
import hypernova from 'hypernova/server';
import React from 'react';
import request from 'supertest';
import ServerStacktracePlugin from '.';

describe('ServerStacktracePlugin', () => {
  const app = express();
  const logSpy = jest.fn();
  const hypernovaKey = 'Component.js';
  const component = renderReact(hypernovaKey, ({ name }: { name: string }) =>
    React.createElement('div', null, `Hello, ${name.toUpperCase()}!`)
  );

  beforeAll(done => {
    // Prevent the app from listening a port
    app.listen = (..._args: any[]) => {
      done();
      return {} as any;
    };

    hypernova({
      createApplication: () => app,
      devMode: true,
      getComponent: (key: string) => (key === hypernovaKey ? component : null),
      loggerInstance: { log: logSpy },
      plugins: [new ServerStacktracePlugin()]
    });
  });

  it('should log a stack trace of the error', () => {
    return request(app)
      .post('/batch')
      .send({
        [hypernovaKey]: {
          data: {}, // `name` is required but don't pass it to raise an error
          name: hypernovaKey
        }
      })
      .then(() => {
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy.mock.calls[0][1]).toMatch(
          /^TypeError: Cannot read property 'toUpperCase' of undefined/
        );
      });
  });

  afterEach(() => {
    logSpy.mockClear();
  });
});
