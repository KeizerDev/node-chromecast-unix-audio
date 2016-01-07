#Chromecast Unix Audio
Uses `cvlc` to create an http stream of your local audio and sends it to the chromecast.

##Installation
```
$ (sudo) npm install -g node-chromecast-linux-audio
```

Make sure you have the `cvlc` library installed on your preffered os, some examples:   
**Fedora**
```
$ dnf install cvlc
```

**Ubuntu**
```
$ apt-get install cvlc
```

##Cons
There is a delay of about 10 seconds.
