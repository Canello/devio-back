const request = require("supertest");
const { app } = require("../../../app");
const { correctOrder } = require("./utils/correct-order");

it("returns an array with all active orders", async () => {
    const order = structuredClone(correctOrder);

    await request(app).post("/orders").send(order).expect(201);
    await request(app).post("/orders").send(order).expect(201);

    const response = await request(app).get("/orders").expect(200);
    const orders = response.body.data.orders;

    expect(orders.length).toEqual(2);
});
