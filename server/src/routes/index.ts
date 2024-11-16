import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req: any, res: any) {
  console.log({ req });
  res.status(200).send("hello");
});

export default router;
