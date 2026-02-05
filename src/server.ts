import { Application } from "./app";
import { IApiEncurtador } from "./interfaces/api.encurtador.interfaces";

export class Server implements IApiEncurtador {
    constructor(private readonly app: Application) {}
    
    start(port?: number): void {
        const aPort = port ?? 3000;
        this.app.server.listen(aPort, () => {
            console.log(`Server is running on port ${aPort}`);
        });
    } 
}