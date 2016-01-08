#Chromecast Unix Audio
Uses `cvlc` to create an http stream of your local audio and sends it to the chromecast.

##Installation
```bash
$ (sudo) npm install -g chromecast-unix-audio
```

Make sure you have the `cvlc` library installed on your preffered os, some examples:   
**Fedora**
```bash
$ dnf install cvlc
```

**Ubuntu**
```bash
$ apt-get install cvlc
```

##Usage
When installed globally just do:
```
$ chromecast-unix-audio # Stream started at: http://0.0.0.0:xxxx/pc.mp3 
```
And it will automagically send it to a founded chromecast.  

##Cons
There is a delay of about 10 seconds.
