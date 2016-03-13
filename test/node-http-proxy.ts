import * as http from "http";
import * as HttpProxy from "http-proxy";

const proxy = new HttpProxy({
    changeOrigin: true
});

proxy.on("error", err => {
   console.error("An error occured:", err); 
});

http.createServer((req, res) => {
    proxy.web(req, res);
});
