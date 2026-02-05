import { Application } from "./app";
import { Server } from "./server";

const application = Application.build();
const server = new Server(application);

server.start();
