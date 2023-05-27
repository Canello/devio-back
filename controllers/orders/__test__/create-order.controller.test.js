const request = require("supertest");
const { app } = require("../../../app");
const { correctOrder } = require("./utils/correct-order");

it("returns a 201 when order creation succeeds", async () => {
    const order = structuredClone(correctOrder);

    return request(app).post("/orders").send(order).expect(201);
});

it('creates an order with status of "preparing"', async () => {
    const order = structuredClone(correctOrder);

    const response = await request(app).post("/orders").send(order).expect(201);
    const createdOrder = response.body.data.order;

    expect(createdOrder.status).toEqual("preparing");
});

it("throws an error if the request is missing mandatory values", async () => {
    const order = structuredClone(correctOrder);

    delete order.code;
    await request(app).post("/orders").send(order).expect(500);

    order.code = 20;
    await request(app).post("/orders").send(order).expect(201);

    delete order.content[0].quantity;
    await request(app).post("/orders").send(order).expect(500);

    order.content[0].quantity = 1;
    await request(app).post("/orders").send(order).expect(201);

    delete order.content[0].product.name;
    await request(app).post("/orders").send(order).expect(500);
});

it("ignores properties that are not in the schema", async () => {
    const order = structuredClone(correctOrder);

    const response = await request(app).post("/orders").send(order).expect(201);
    const createdOrder = response.body.data.order;

    expect(createdOrder.someRandomPropertyyy).toBeUndefined();
    expect(createdOrder.content[0].anotherRandomPropertyyy).toBeUndefined();
    expect(
        createdOrder.content[0].product.oneMoreRandomPropertyyy
    ).toBeUndefined();
});
