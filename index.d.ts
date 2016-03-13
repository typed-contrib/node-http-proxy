// Type definitions for node-http-proxy v1.12.0
// Project: https://github.com/nodejitsu/node-http-proxy
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/node-http-proxy

import * as http from "http";
import * as https from "https";

declare class Server implements NodeJS.EventEmitter {
    /**
     * Creates the proxy server with specified options.
     */
    constructor();
    /**
     * Creates the proxy server with specified options.
     * @param options - Config object passed to the proxy
     */
    constructor(options: Server.ServerOptions);

    /**
     * Used for proxying regular HTTP(S) requests
     * @param req - Client request.
     * @param res - Client response.
     */
    public web(req: http.IncomingMessage, res: http.ServerResponse);
    /**
     * Used for proxying regular HTTP(S) requests
     * @param req - Client request.
     * @param res - Client response.
     * @param options - Additionnal options.
     */
    public web(req: http.IncomingMessage, res: http.ServerResponse, options: Server.ServerOptions);

    /**
     * Used for proxying regular HTTP(S) requests
     * @param req - Client request.
     * @param socket - Client socket.
     * @param head - Client head.
     */
    public ws(req: http.IncomingMessage, socket: any, head: any);
    /**
     * Used for proxying regular HTTP(S) requests
     * @param req - Client request.
     * @param socket - Client socket.
     * @param head - Client head.
     * @param options - Additionnal options.
     */
    public ws(req: http.IncomingMessage, socket: any, head: any, options: Server.ServerOptions);

    /**
     * A function that wraps the object in a webserver, for your convenience
     * @param port - Port to listen on
     */
    public listen(port: number);

    /**
     * A function that closes the inner webserver and stops listening on given port
     */
    public close();
    /**
     * A function that closes the inner webserver and stops listening on given port
     */
    public close(callback: Function);

    /**
     * Creates the proxy server.
     * @returns Proxy object with handlers for `ws` and `web` requests
     */
    static createProxyServer(): Server;
    /**
     * Creates the proxy server with specified options.
     * @param options Config object passed to the proxy
     * @returns Proxy object with handlers for `ws` and `web` requests
     */
    static createProxyServer(options: Server.ServerOptions): Server;

    /**
     * Creates the proxy server.
     * @returns Proxy object with handlers for `ws` and `web` requests
     */
    static createServer(): Server;
    /**
     * Creates the proxy server with specified options.
     * @param options Config object passed to the proxy
     * @returns Proxy object with handlers for `ws` and `web` requests
     */
    static createServer(options: Server.ServerOptions): Server;

    /**
     * Creates the proxy server.
     * @returns Proxy object with handlers for `ws` and `web` requests
     */
    static createProxy(): Server;
    /**
     * Creates the proxy server with specified options.
     * @param options Config object passed to the proxy
     * @returns Proxy object with handlers for `ws` and `web` requests
     */
    static createProxy(options: Server.ServerOptions): Server;

    addListener(event: string, listener: Function): this;
    on(event: string, listener: Function): this;
    once(event: string, listener: Function): this;
    removeListener(event: string, listener: Function): this;
    removeAllListeners(event?: string): this;
    getMaxListeners(): number;
    setMaxListeners(n: number): this;
    listeners(event: string): Function[];
    emit(event: string, ...args: any[]): boolean;
    listenerCount(type: string): number;
}

declare namespace Server {
    export interface ServerOptions {
        /** URL string to be parsed with the url module. */
        target?: string;
        /** URL string to be parsed with the url module. */
        forward?: string;
        /** Object to be passed to http(s).request. */
        agent?: any;
        /** Object to be passed to https.createServer(). */
        ssl?: any;
        /** If you want to proxy websockets. */
        ws?: boolean;
        /** Adds x- forward headers. */
        xfwd?: boolean;
        /** Verify SSL certificate. */
        secure?: boolean;
        /** Explicitly specify if we are proxying to another proxy. */
        toProxy?: boolean;
        /** Specify whether you want to prepend the target's path to the proxy path. */
        prependPath?: boolean;
        /** Specify whether you want to ignore the proxy path of the incoming request. */
        ignorePath?: boolean;
        /** Local interface string to bind for outgoing connections. */
        localAddress?: boolean;
        /** Changes the origin of the host header to the target URL. */
        changeOrigin?: boolean;
        /** Basic authentication i.e. 'user:password' to compute an Authorization header. */
        auth?: string;
        /** Rewrites the location hostname on (301 / 302 / 307 / 308) redirects, Default: null. */
        hostRewrite?: string;
        /** Rewrites the location host/ port on (301 / 302 / 307 / 308) redirects based on requested host/ port.Default: false. */
        autoRewrite?: boolean;
        /** Rewrites the location protocol on (301 / 302 / 307 / 308) redirects to 'http' or 'https'.Default: null. */
        protocolRewrite?: string;
    }
}

export = Server;
