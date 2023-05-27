const request = require("supertest");
const { app } = require("../../../app");
const { correctOrder } = require("./utils/correct-order");

it('throws an error if status to update is not "ready" or "picked_ud"', async () => {
    const order = structuredClone(correctOrder);
    const body = { status: "something_very_weird" };

    const response = await request(app).post("/orders").send(order).expect(201);
    const createdOrder = response.body.data.order;
    const createdId = createdOrder._id.toString();

    return request(app)
        .patch("/orders/" + createdId)
        .send(body)
        .expect(500);
});

it('if status="ready", it updates status of order from "preparing" to "ready" in active orders collection', async () => {
    const order = structuredClone(correctOrder);
    const body = { status: "ready" };

    const response1 = await request(app)
        .post("/orders")
        .send(order)
        .expect(201);
    const createdOrder = response1.body.data.order;
    const createdId = createdOrder._id.toString();

    const response2 = await request(app)
        .patch("/orders/" + createdId)
        .send(body)
        .expect(200);
    const updatedOrder = response2.body.data.order;

    expect(updatedOrder.status).toEqual("ready");
});

it('if status="picked_up", it deletes order from active orders collection and create a new order with status "picked_up" in finished orders collection', async () => {
    const order = structuredClone(correctOrder);
    const body1 = { status: "ready" };
    const body2 = { status: "picked_up" };

    const response1 = await request(app)
        .post("/orders")
        .send(order)
        .expect(201);
    const createdOrder = response1.body.data.order;
    const createdId = createdOrder._id.toString();

    await request(app)
        .patch("/orders/" + createdId)
        .send(body1)
        .expect(200);

    const response2 = await request(app)
        .patch("/orders/" + createdId)
        .send(body2)
        .expect(200);
    const updatedOrder = response2.body.data.order;

    expect(updatedOrder.status).toEqual("picked_up");
});

it("throws an error if id provided is invalid", async () => {
    const order = structuredClone(correctOrder);
    const invalidId = "1e8da";

    return request(app)
        .patch("/orders/" + invalidId)
        .send(order)
        .expect(500);
});

it("responds with 200 when it succeeds", async () => {
    const order = structuredClone(correctOrder);
    const body = { status: "ready" };

    const response = await request(app).post("/orders").send(order).expect(201);
    const createdOrder = response.body.data.order;
    const createdId = createdOrder._id.toString();

    return request(app)
        .patch("/orders/" + createdId)
        .send(body)
        .expect(200);
});
