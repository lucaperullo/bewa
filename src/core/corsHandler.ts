import cors from "cors";
import { Request, Response, NextFunction } from "express";

export const corsHandler = (
  req?: Request,
  res?: Response,
  next?: NextFunction
) => {
  const whiteListedDomains = [
    "http://localhost:3000",
    "https://whatzapp.vercel.app",
    "http://localhost:8100/",
  ];

  const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (whiteListedDomains.indexOf(req.header("Origin")) !== -1) {
      corsOptions = { origin: true, optionsSuccessStatus: 200 }; // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
  };

  return cors(corsOptionsDelegate);
};
