import express from 'express';
import cors from 'cors';

export class Application {
    private constructor(readonly app: express.Application) {}

    public static build(): Application {
        const app = express();
        app.use(cors());
        app.use(express.json());

        return new Application(app);
    }

    public get server(): express.Application {
        return this.app
    }
}