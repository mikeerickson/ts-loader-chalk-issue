const notifier = require('node-notifier')
const path = require('path')

notifier.notify({
  title: 'Compilation Failed',
  message: 'An error occurred compiling scripts',
  icon: path.join(__dirname, 'images', 'error.png'),
  contentImage: path.join(__dirname, 'images', 'typescript.2.9.1.png')
}, (err, response) => {
  // we should never get here, see fail message
})

