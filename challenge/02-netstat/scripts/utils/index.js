import http from 'http'
import router from '../router/index.js'

export const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const isPortInUse = (port, callback) => {
    const tester = http.createServer()
        .once('error', err => (err.code === 'EADDRINUSE' ? callback(true) : callback(false)))
        .once('listening', () => tester.once('close', () => callback(false)).close())
        .listen(port);
}

const server = http.createServer((req,res)=>{
  if (req.url==='/flag') {
    return router.flagRoute(res);
  };
  return router.defaultRoute(res);
});

export const findFreePortAndStart = (startPort) => {
    isPortInUse(startPort, inUse => {
        if (inUse) {
            findFreePortAndStart(randomInt(startPort, 2048));
        } else {
            server.listen(
                startPort, 
                '127.0.0.1', 
                () => 
                    console.log(`Web server listening on random port - Your challenge is to find me!`)
            );
        }
    });
}