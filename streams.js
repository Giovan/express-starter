var fs = require('fs')

var inputFile = './users.json'
var outputFile = './out.json'

var readeable = fs.createReadStream(inputFile)
var writable = fs.createWriteStream(outputFile)

readeable.pipe(writable)