var ngrok = require('ngrok')
var browserSync = require('browser-sync')
var clipboardy = require('clipboardy')
var chalk = require('chalk')

browserSync({
  server: "./",
  files: "./",
  ui: false,
  notify: false
}, function (err, bs) {
  
  ngrok.connect({
      addr: bs.options.get('port'),
      region: 'eu'
    }, function (err, url) {
      clipboardy.writeSync(url)
      
      console.log(`
 ---------------------------------------
 Remote url ${chalk.blue(url)}
 has been copied to your clipboard.
 ---------------------------------------
      `)
  })

})