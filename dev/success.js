const notifier = require('node-notifier')
const path = require('path')

notifier.notify({
  title: 'Compilation Successful',
  message: 'All scripts have compiled successfully',
  icon: path.join(__dirname, 'images', 'success.png'),
  contentImage: path.join(__dirname, 'images', 'typescript.2.9.1.png')
}, (err, response) => {
  // we should never get here, see fail message
})

