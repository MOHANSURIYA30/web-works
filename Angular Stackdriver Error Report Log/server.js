const app = require ('./backend/app');
const http = require('http');
const port = process.env.port || 3001;


app.set('port',port);
const server = http.createServer(app);
server.listen(app.get('port'),()=>{
    console.log('Node server is listening at port 3001');
});