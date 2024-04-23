# SSE

# Sistema SSE (Server-Sent Events) para Atualização em Tempo Real

Este projeto demonstra um exemplo simples de uso de SSE (Server-Sent Events) para transmitir dados do servidor para um cliente em tempo real. A aplicação consiste em um servidor Express que emite eventos SSE e um cliente HTML/JavaScript que recebe e exibe a contagem de visitantes. Este relatório fornece detalhes sobre o projeto, incluindo instruções de configuração e execução.

## Tecnologias Utilizadas
- **Node.js**: Plataforma para executar código JavaScript no lado do servidor.
- **Express**: Framework para criar servidores web com Node.js.
- **CORS**: Middleware para permitir solicitações entre domínios.
- **Server-Sent Events (SSE)**: Técnica para transmissão de dados unidirecional do servidor para o cliente.

## Arquitetura do Projeto
O projeto é composto por duas partes principais:

1. **Servidor**: Um aplicativo Express que emite eventos SSE para um endpoint específico. Ele também serve um arquivo HTML para iniciar a interação do cliente.
2. **Cliente**: Um arquivo HTML com JavaScript que se conecta ao endpoint SSE para receber eventos em tempo real.

### Servidor (server.js)
O servidor é implementado com Node.js e Express. Ele possui uma rota para emitir eventos SSE e outra rota para servir o arquivo HTML ao cliente. O servidor também usa CORS para permitir solicitações entre domínios.

- **Configuração do SSE**: O endpoint `/stream` é configurado para emitir eventos a cada segundo, incrementando a contagem de visitantes.
- **CORS**: O middleware `cors()` é usado para permitir solicitações de diferentes origens.

### Cliente (index.html)
O cliente é um arquivo HTML com um script JavaScript que se conecta ao endpoint SSE para receber eventos. Ele atualiza a contagem de visitantes conforme os eventos são recebidos do servidor.

- **Conexão SSE**: O cliente usa `EventSource` para conectar ao endpoint `/stream`.
- **Tratamento de Eventos**: O cliente atualiza a contagem de visitantes com base nos eventos recebidos.
- **Aumento de dados** Se você abrir várias guias ou navegadores, verá a contagem de visitantes aumentar, refletindo a comunicação em tempo real entre o servidor e o cliente via SSE.
- **Tratamento de Erros**: O cliente lida com erros de conexão para garantir uma experiência robusta.

## Execução do Projeto
Para executar o projeto, siga estas etapas:

1. **Instale as dependências**:
   ```bash
   npm install express cors
