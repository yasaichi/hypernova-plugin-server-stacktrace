# hypernova-plugin-server-stacktrace

[![npm version](https://badge.fury.io/js/hypernova-plugin-server-stacktrace.svg)](https://badge.fury.io/js/hypernova-plugin-server-stacktrace)
[![Build Status](https://travis-ci.org/yasaichi/hypernova-plugin-server-stacktrace.svg?branch=master)](https://travis-ci.org/yasaichi/hypernova-plugin-server-stacktrace)
[![Maintainability](https://api.codeclimate.com/v1/badges/0240cbf7e225c497a555/maintainability)](https://codeclimate.com/github/yasaichi/hypernova-plugin-server-stacktrace/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0240cbf7e225c497a555/test_coverage)](https://codeclimate.com/github/yasaichi/hypernova-plugin-server-stacktrace/test_coverage)

`hypernova-plugin-server-stacktrace` is a small plugin for [Hypernova](https://github.com/airbnb/hypernova) especially in production.
The plugin enables you to log a stack trace when the server fails to render components.

## Installation

For npm:

```sh
npm install hypernova-plugin-server-stacktrace --save
```

## Usage

Add the plugin object to `plugins` array of the server configuration:

```js
const hypernova = require('hypernova/server');
const ServerStacktracePlugin = require('hypernova-plugin-server-stacktrace');

hypernova({
  plugins: [new ServerStacktracePlugin()]
});
```

This will output errors to STDOUT as follows:

```
2019-01-01T08:43:00.647Z - error: TypeError: foo.bar is not a function
    at Top (/pass/to/build/pages/webpack:/src/pages/index.tsx:16:1)
    at processChild (/pass/to/node_modules/react-dom/cjs/react-dom-server.node.development.js:2458:14)
    at resolve (/pass/to/node_modules/react-dom/cjs/react-dom-server.node.development.js:2384:5)
    at ReactDOMServerRenderer.render (/pass/to/node_modules/react-dom/cjs/react-dom-server.node.development.js:2706:22)
    at ReactDOMServerRenderer.read (/pass/to/node_modules/react-dom/cjs/react-dom-server.node.development.js:2680:23)
    at Object.renderToStaticMarkup (/pass/to/node_modules/react-dom/cjs/react-dom-server.node.development.js:3082:25)
    at /pass/to/build/pages/webpack:/src/lib/hypernova-react.ts:48:1
    at /pass/to/node_modules/hypernova/lib/utils/BatchManager.js:190:18
    at tryCatcher (/pass/to/node_modules/bluebird/js/release/util.js:16:23)
    at Promise._settlePromiseFromHandler (/pass/to/node_modules/bluebird/js/release/promise.js:512:31)
```

Note that you're able to customize the log format and destination by `logger` or
`loggerInstance`. For further information, please see [the section on server configuration
options](https://github.com/airbnb/hypernova#server).

## Contributing

You should follow the steps below.

1. [Fork the repository](https://help.github.com/articles/fork-a-repo/)
2. Create a feature branch: `git checkout -b add-new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push the branch: `git push origin add-new-feature`
5. [Send us a pull request](https://help.github.com/articles/about-pull-requests/)

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
