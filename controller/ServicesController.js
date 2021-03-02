class ServicesController {
  constructor() {}
  index(req, res) {
    res.status(200).json({ serverResponse: "HOLA MUNDO" });
  }

  test(req, res) {
    req.body["msn"] = "Pon el servidor";
    const data = req.body;
    res.status(200).json(data);
  }
}
export default ServicesController;
