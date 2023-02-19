let events = require("events");
let eventEmitter = new events.EventEmitter();
let eventFunction = ()=> {
    console.log("this is fored from an event")
}
eventEmitter.on("naming", eventFunction);
eventEmitter.emit("naming");

//url 

let url = require("url");
let newUrl = "https://localhost:4500/?search=hoseieoie&ueueh=eerere"
let parsedUrl = urlParse(newUrl, true);
console.log(parsedUrl.host);
console.log(pardesUrl.protocol);
console.log(parsedUrl.pathname);
console.log(parsedUrl.SEARCH);
console.log(parsedUrl.query)
