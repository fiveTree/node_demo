var http = require('http')
var jade = require('jade')


http.createServer((req,res)=>{
    res.writeHead(200,{
        // 'Content-type': 'text/plain'
        'Content-type': 'text/html'
    })
    // 1.compile
    // var fn = jade.compile('div #{course}')
    // var html = fn({course:'jade'})

    // 2. jade.render
    // var html = jade.render('div #{course}', { course: 'jade render' })

    // 3.renderFile
    var html = jade.renderFile('index.jade', { course: 'jade renderFile', pretty: true })

    res.end(html)
}).listen(1337,'127.0.0.1')

console.log('listen 1337')