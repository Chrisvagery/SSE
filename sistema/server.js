const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

let visitorCount = 0;

// Rota para iniciar a transmissão de eventos SSE
app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // Incrementar a contagem de visitantes
  visitorCount++;

  const intervalId = setInterval(() => {
    res.write(`data: ${visitorCount}\n\n`);
  }, 1000);

  req.on("close", () => {
    clearInterval(intervalId);
  });
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor SSE rodando na porta 3000");
});
