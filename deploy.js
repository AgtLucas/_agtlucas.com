var path = require('path')
var ghp = require('gh-pages')

ghp.publish(path.join(__dirname, 'dist'), err => {
  if (err) {
    console.log(err)
  } else {
    console.log('Done!')
  }
})
