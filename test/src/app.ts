import express, { Router, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import config from "config";
import responseTime from "response-time";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes/index";
import deserializeUser from "./middleware/deserializeUser";
import { restResponseTimeHistogram, startMetricsServer } from "./utils/metrics";
import swaggerDocs from "./utils/swagger";
import productRoutes from "./routes/product.routes";
import sessionRoutes from "./routes/session.routes";
import userRoutes from "./routes/user.routes";

const port = config.get<number>("port");

const app = express();
const router = express.Router();

function healthRoutes(app: Router): any {
  //res.send("Strong and healthy");

  app.get("/api/healthcheck", (req: Request, res: Response) =>
    res.sendStatus(200)
  );
  app.post("/api/healthcheck", (req: Request, res: Response) =>
    res.sendStatus(200)
  );
  app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the E-commerce API");
  });

  /**
   * @openapi
   * /healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  // app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
}

app.use(express.json());

app.use(deserializeUser);

app.use(
  responseTime((req: Request, res: Response, time: number) => {
    if (req?.route?.path) {
      restResponseTimeHistogram.observe(
        {
          method: req.method,
          route: req.route.path,
          status_code: res.statusCode,
        },
        time * 1000
      );
    }
  })
);

app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);

  await connect();

  healthRoutes(router);
  productRoutes(router);
  sessionRoutes(router);
  userRoutes(router);

  startMetricsServer();

  swaggerDocs(app, port);
});
