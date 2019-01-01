# CHANGELOG

## [0.2.0](https://github.com/yasaichi/hypernova-plugin-server-stacktrace/releases/tag/v0.2.0) (January 1, 2019)

- **[Breaking change]** Drop support of Node 5.x or former
- [Run tests on Travis CI](https://github.com/yasaichi/hypernova-plugin-server-stacktrace/pull/1)
- **[Breaking change]** [Reimplement the plugin as a class](https://github.com/yasaichi/hypernova-plugin-server-stacktrace/pull/2)
  - The exported module is changed from an object to a class
  - The way to export the module is changed from `exports.default` to `module.exports` (CommonJS)

## [0.1.0](https://github.com/yasaichi/hypernova-plugin-server-stacktrace/releases/tag/v0.1.0) (December 31, 2018)

The initial release
