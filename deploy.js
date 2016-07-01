const gh = require('gh-pages')
const path = require('path')
const chalk = require('chalk')

const error = chalk.bold.red
const success = chalk.bold.blue

gh.publish(path.join(__dirname, '_site'), (err) => {
  if (err) {
    console.log(error('\nError!'), err)
  } else {
    console.log(success('\nMission accomplished.'))
  }
})
