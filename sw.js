var version = "v2.0.4";
var swPath;
var urlObject = new URL(location);
var host;

console.log("1 "+swPath);
console.log("2" + urlObject);

console.log("3 " + host);

if (urlObject.searchParams.get("swPath")) {
    swPath = urlObject.searchParams.get("swPath");
}
else {
    if (urlObject.searchParams.get("version")) {
        version = urlObject.searchParams.get("version");
    }
    if (urlObject.searchParams.get("swJSHost")) {
        host = "https://" + urlObject.searchParams.get("swJSHost");
    }




    else {
        host = "https://sdki.truepush.com/sdk/";
    }
    swPath = host + version + "/sw.js";
}

console.log("4" +swPath);
console.log("5 " + urlObject);

console.log("6 " + host);

importScripts(swPath);
console.log("7 " + swPath);

