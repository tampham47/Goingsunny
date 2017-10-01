if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

require('babel-core/register')({
  presets: ['es2015', 'react']
});
require.extensions['.scss'] = () => { return; };
require.extensions['.css'] = () => { return; };
require.extensions['.svg'] = () => { return; };
require.extensions['.png'] = () => { return; };

require('./server.js')
