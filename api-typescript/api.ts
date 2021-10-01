import express from 'express';
const api = express();

api.get('/', (req: any, res: any) => {
    res.status(200).send('OK');
})

api.listen(5000, () => {
    console.log('Api is running at http://localhost:5000');
});

// class API {
//     private Server: any;

//     public createServer() {
//         this.Server = express();
//     }

//     public createEndpoint(): void {
//         this.Server.get('/', (req: Request, res: Response) => {
//             // res.status(200).send('Hello World');
//         })
//     }

//     public initializeApi(): void{
//         this.Server.listen(500, () => {
//             console.log('Api is running at http://localhost:5000');
//         });
//     }
// }

// const api = new API(); 
// api.createServer();
// api.createEndpoint();
// api.initializeApi();