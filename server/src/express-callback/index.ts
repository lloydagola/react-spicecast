export default function makeExpressCallback(controller: any) {
  return (req: any, res: any) => {
    try {
      (async function () {
        const data = await controller(req);

        res.type("json");
        res.status(200).send({ data });
      })();
    } catch (error: any) {
      res.status(500).send({ message: "An error occurred.", error });
    }
  };
}
