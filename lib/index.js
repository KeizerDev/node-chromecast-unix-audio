var chromecasts = require('chromecasts')()
var audiostream = require('./audiostream.js')

audiostream.start()

chromecasts.on('update', function (player) {
    player.play(audiostream.returnIp(), {title: 'Linux Audio Cast', type: 'audio/mpeg3', images: 'https://lh6.ggpht.com/o5BSjt4xYPQXWMyfZgfhE3eA179gZLw56cBSQfupjtuM2WaZTp6z9Qqr2ar_Sz6eSmKL=w300' })
})
