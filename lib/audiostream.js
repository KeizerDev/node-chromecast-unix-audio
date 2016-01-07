var sys = require('sys')
var shell = require('shelljs');
var ip = require('ip');

var streamsettings = {
    adapter: "",
    port: "8123",
    mp3Path: "pc.mp3"
}

var audiostream = {
    start: function(){
        this.getAudioAdapter()
        this.startStream()
    },
    getAudioAdapter: function() {
        streamsettings.adapter = ((shell.exec("pactl list | grep \"Monitor Source\"", {silent:true}).output).replace("Monitor Source:", "")).replace(/\s/g, "") // Removes all spaces and only keeps the name
    },
    startStream: function() {
        shell.exec("cvlc -vvv pulse://" + streamsettings.adapter + " --sout '#transcode{acodec=mp3,ab=128,channels=2}:standard{access=http,dst=0.0.0.0:" + streamsettings.port + "/" + streamsettings.mp3Path + "}'", {silent: true, async: true}).output
        console.log("Stream started at: " + this.returnIp())
    },
    returnIp: function() {
        return "http://" + ip.address() + ":" + streamsettings.port + "/" + streamsettings.mp3Path
    }
}

module.exports = audiostream;
