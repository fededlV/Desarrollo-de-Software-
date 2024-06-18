import app from "../src/app";
import request from "supertest";

describe("GET /tasks", () => {
  test("Should respond with a 200 status code", async () => {
    const response = await request(app).get("/tasks").send();
    expect(response.statusCode).toBe(200);
  });
  test("Should respond with an array", async () => {
    const response = await request(app).get("/tasks").send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("POST /tasks", () => {
  describe("given a title and description", () => {
    //should respond with a 200 status code
    test("Should respond with a 200 status code", async () => {
      const response = await request(app).post("/tasks").send();
      expect(response.statusCode).toBe(200);
    });
    //should respond with a content-type of application/json
    test("Should respond with a content-type: application/json in header", async () => {
      const response = await request(app).post("/tasks").send();
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
    //should respond with a json object containin the new task
    test("Should respond with an task ID", async () => {
      const response = await request(app).post("/tasks").send({
        title: "Test task",
        description: "Test description",
      });
      expect(response.body.id).toBeDefined();
    });
  });
  describe("without a title and description", () => {
    const fields = [
      {},
      { title: "Test task" },
      { descripction: "Test description" },
    ];
    for (const body of fields){
        //should respond with a 400 status code
        test("Should respond with a 400 status code", async () => {
          const response = await request(app).post("/tasks").send(body);
          expect(response.statusCode).toBe(400);
        })
    }
  });
});
