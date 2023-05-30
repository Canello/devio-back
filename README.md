# Desafio Devio Back-End

[Link para o Web App](https://main.d1y9bsk5okvonn.amplifyapp.com/)

## Índice

1. Como rodar o código?
2. Endpoints da API

## 1. Como rodar o código?

Passos para reproduzir o código na sua máquina:

1. Clonar o repositório
2. `npm install` para instalar as dependências
3. Criar uma pasta .env na pasta raíz com os seguintes campos:

```
PORT=<Porta>
MONGO_CONNECTION_STRING=<String de conexão com o MongoDB>
```

No aplicativo real foi usado um cluster no MongoDB Atlas. Para rodar os testes, é usado uma versão na memória (mongodb-memory-server), que é instalada junto com as dependências.

4. `npm start` ou `npm run dev` e o aplicativo deve estar funcionando.

_Versão do Node.js utilizada: 18.12.1._

## 2. Enpoints da API

## Orders

Responsável pelos pedidos dos clientes.

```
// Definição de um pedido
order = {
    _id: string,
    code: string,
    customerName: string,
    notes: string,
    status: "deleted" || "preparing" || "ready" || "picked_up",
    paymentType: "credit" || "debit" || "cash",
    received: string,
    change: string,
    content: [
        {
            product: product,
            quantity: number
        },
        ...
    ],
}

```

### - GET /orders

Devolve uma lista com todos os pedidos ativos, isto é, que estão sendo preparados ou que estão prontos para retirada.

```
// Formato de resposta
{
    status: 'ok',
    data: {
        orders: order[]
    }
}
```

### - POST /orders

Cria um novo pedido.

```
// Formato da requisição
{
    code: string,
    customerName: string,
    notes: string, // Observações
    paymentType: "credit" || "debit" || "cash",
    received: string, // Dinheiro fornecido pelo cliente formatado como "00,00"
    change: string, // Troco formatado como "00,00"
    content: [
        {
            product: product,
            quantity: number
        },
        ...
    ],
}

// Formato da resposta
{
    status: 'ok',
    data: {
        orders: order[]
    }
}
```

### - PATCH /orders/:id

Atualiza o status do pedido de "preparando" para "pronto" (status="ready") ou de "pronto" para "entregue" (status="picked_up"). Retorna a ordem atualizada.

```
// Formato da requisição
{
    status: "ready" || "picked_up"
}

// Formato da resposta
{
    status: 'ok',
    data: {
        order: order
    }
}
```

### - DELETE /orders/:id

Cancela um pedido. Efetivamente atualiza seu status de "preparando" para "cancelado".

```
// Formato da resposta
{
    status: 'ok'
}
```

## Products

Responsável pelos produtos disponíveis para compra. Foi utilizada uma lista fixa de produtos fictícios.

```
// Definição de um produto
product = {
    _id: string,
    name: string,
    category: "combos" || "drinks" || "side_dishes" || "desserts"
    description: string,
    imageUrl: string,
    price: number
}
```

### - GET /products

Devolve uma lista com todos os produtos disponíveis.

```
// Formato da resposta
{
    status: 'ok',
    data: {
        products: product[]
    }
}
```
