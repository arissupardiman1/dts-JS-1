const fs = require('fs')

fs.appendFile('myText.txt', 'Hello World', function() {
    console.log('File Berhasi Ditulis')
})