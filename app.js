import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter"
import videRouter from "./routers/videoRouter"
import globalRouter from "./routers/globalRouter"
import routes from "./routes";
import { localMiddleware } from "./middleware";

//const express = require('express'); --> old JS ver. import로 대체 가능함

const app = express();


const PORT = 4000;

app.set('view engine', "pug");

//Using middleware
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));

//local varaible -> global varaible
app.use(localMiddleware);


//Routers what i use
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videRouter);

export default app;
