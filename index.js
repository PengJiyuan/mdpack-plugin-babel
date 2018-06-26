const { transform } = require('@babel/core');

class mdpackPluginBabel {
  constructor(opts = {}) {
    const defaultOptions = {};
    this.opts = Object.assign({}, defaultOptions, opts);
  }

  code(source, language) {
    let transformed;
    if (language === 'javascript') {
      transformed = transform(source, this.opts).code;
    }
    return transformed ? transformed : source;
  }
}

module.exports = mdpackPluginBabel;
