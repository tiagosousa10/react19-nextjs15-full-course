self.onmessage = function (event) {
  console.log("worker recebeu", event.data);

  switch (event.data) {
    case "FAVOR": {
      self.postMessage("Sim,posso fazer.");
      break;
    }
    case "FALA_OI": {
      self.postMessage("OK: OI!");
      break;
    }
    case "FECHAR": {
      self.postMessage("FECHAR");
      self.close();
      break;
    }
    default:
      self.postMessage("Nao entendi.");
  }
};
