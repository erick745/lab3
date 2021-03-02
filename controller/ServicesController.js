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

  divisa(req, res) {
    var data = req.body;
    var monedaOriginal = data.original;
    var cant = data.cantidad;
    var monedaCambio = data.tipoCambio;

    var divs = [
      "CAD",
      "HKD",
      "ISK",
      "PHP",
      "DKK",
      "HUF",
      "CZK",
      "GBP",
      "RON",
      "SEK",
      "IDR",
      "INR",
      "BRL",
      "RUB",
      "HRK",
      "JPY",
      "THB",
      "CHF",
      "EUR",
      "MYR",
      "BGN",
      "TRY",
      "CNY",
      "NOK",
      "NZD",
      "ZAR",
      "USD",
      "MXN",
      "SGD",
      "AUD",
      "ILS",
      "KRW",
      "PLN",
      "BO",
    ];

    var values = [
      1.3256384622,
      7.8401345088,
      124.6932654731,
      52.1294192493,
      6.7855130419,
      304.6169226575,
      23.5135872035,
      0.8011724075,
      4.3155503045,
      9.7030809779,
      14112.4965918386,
      70.9474688721,
      4.1587748796,
      63.6425520313,
      6.7290738889,
      107.6524584204,
      30.5643915296,
      0.988639462,
      0.9088430428,
      4.1814959556,
      1.7775152231,
      5.6850858857,
      7.1070617104,
      9.0179950922,
      1.583931655,
      14.868581296,
      1.0,
      19.4398800327,
      1.3764427883,
      1.471326002,
      3.5040443515,
      1193.9107516132,
      3.9819140234,
      6.96,
    ];
    var result =
      (cant / values[divs.findIndex((div) => div === monedaOriginal)]) *
      values[divs.findIndex((div) => div === monedaCambio)];
    data["Convertido"] = result;
    res.status(200).json(data);
  }

  interes(req, res) {
    var data = req.body;
    var montoSol = data.montoSolicitado;
    var interesAnu = data.interesAnual;
    var interesCalc = interesAnu / 100 + 1;
    var tiempoPa = req.tiempoPago;
    var result = montoSol * Math.pow(interesCalc, tiempoPa).toFixed(2);

    data["CantidadParaPagar"] = result;
    res.status(200).json(data);
    console.log(result);
  }
}
export default ServicesController;
