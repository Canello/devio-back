const request = require("supertest");
const { app } = require("../../../app");
const { correctOrder } = require("./utils/correct-order");
const { ActiveOrder, FinishedOrder } = require("../../../models/order.model");

// it("responds with 200 if id provided is valid", async () => {
//     const order = structuredClone(correctOrder);

//     const response = await request(app).post("/orders").send(order).expect(201);
//     const createdOrder = response.body.data.order;
//     const createdId = createdOrder._id.toString();

//     return request(app)
//         .delete("/orders/" + createdId)
//         .expect(200);
// });

// it("throws an error if id provided is invalid", async () => {
//     const invalidId = "23oe";

//     return request(app)
//         .delete("/order/" + invalidId)
//         .expect(500);
// });

// it("deletes order from active orders collection", async () => {
//     const order = structuredClone(correctOrder);

//     const response = await request(app).post("/orders").send(order).expect(201);
//     const createdOrder = response.body.data.order;
//     const createdId = createdOrder._id.toString();

//     await request(app)
//         .delete("/orders/" + createdId)
//         .expect(200);

//     const deletedOrder = await ActiveOrder.findById(createdId);

//     expect(deletedOrder).toBeNull();
// });

it('saves order on finished orders with flag "deleted"', async () => {
    const order = structuredClone(correctOrder);

    const response1 = await request(app)
        .post("/orders")
        .send(order)
        .expect(201);
    const createdOrder = response1.body.data.order;
    const createdId = createdOrder._id.toString();

    await request(app)
        .delete("/orders/" + createdId)
        .expect(200);

    const deletedOrderOnFinishedDb = await FinishedOrder.findOne({
        code: order.code,
    });

    expect(deletedOrderOnFinishedDb).toBeDefined();
    expect(deletedOrderOnFinishedDb.status).toEqual("deleted");
});
