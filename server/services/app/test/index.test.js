const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;

const data = require("../data/course.json");
data.forEach((el) => {
  delete el.id;
  el.createdAt = new Date();
  el.updatedAt = new Date();
});

beforeAll(() => {
  queryInterface.bulkInsert("Courses", data, {
    restartIdentity: true,
    truncate: true,
    cascade: true,
  });
});

let access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGE3NTNkZmFhYjYxMDI2YjVjOTUwOSIsImlhdCI6MTY3NTQ5MzIyNX0.PyXElaTWTx1CTYWik1XlFLVFyBe_zGlbqCk9xl2AHq8";

let invalid_access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGE3NTNkZmFhYjYxMDI2YjVjOTUwOSIsImlhdCI6MTY3NTUwNjQ0M30.ITVo0GB5iVJaIH4n9SDcskEaaLE5ZWeUYe4Wc82mO84";
afterAll(() => {
  queryInterface.bulkDelete("Courses", null, {
    restartIdentity: true,
    truncate: true,
    cascade: true,
  });
});

describe("END POINT GET COURSE", () => {
  test("SUCESS GET ALL COURSE - 200", (done) => {
    request(app)
      .get(`/courses`)
      .expect(200)
      .end((err, res) => {
        expect(res.body[0]).toHaveProperty("name");
        expect(res.body[0]).toHaveProperty("detail");
        expect(res.body[0]).toHaveProperty("level");
        expect(res.body[0]).toHaveProperty("price");
        expect(res.body[0]).toHaveProperty("img");
        expect(res.body[0]).toHaveProperty("CategoryId");
        expect(res.body[0]).toHaveProperty("InstructorId");
        expect(res.body[0]).toHaveProperty("createdAt");
        expect(res.body[0]).toHaveProperty("updatedAt");
        expect(res.body[0]).toHaveProperty("Category");
        expect(Array.isArray(res.body)).toStrictEqual(true);
        done();
      });
  });

  test("SUCCESS GET ALL COURSE WITH SEARCH", (done)=> {
    request(app)
    .get("/courses?search=abc")
  })
});

describe("END POINT GET ONE COURSE", () => {
  test("SUCESS GET ONE COURSE - 200", (done) => {
    request(app)
      .get(`/courses/1`)
      .expect(200)
      .end((err, res) => {
        expect(res.body).toHaveProperty("name");
        expect(res.body).toHaveProperty("detail");
        expect(res.body).toHaveProperty("level");
        expect(res.body).toHaveProperty("price");
        expect(res.body).toHaveProperty("img");
        expect(res.body).toHaveProperty("CategoryId");
        expect(res.body).toHaveProperty("InstructorId");
        expect(res.body).toHaveProperty("createdAt");
        expect(res.body).toHaveProperty("updatedAt");
        expect(res.body).toHaveProperty("Category");
        done();
      });
  });

  test("FAILED  GET ONE COURSE - 404", (done) => {
    request(app)
      .get(`/courses/100`)
      .expect(404)
      .end((err, res) => {
        expect(res.body).toHaveProperty("message", "Not found");
        done();
      });
  });
});

describe("END POINT DELETE ONE COURSE", () => {
  test("SUCCESS DELETE COURSE - 200", (done) => {
    request(app)
      .delete(`/courses/1`)
      .set("access_token", access_token)
      .expect(200)
      .end((err, res) => {
        expect(res.body).toHaveProperty("message", "Successfully delete data");
        done();
      });
  });

  test("FAILED DELETE COURSE - 404", (done) => {
    request(app)
      .delete(`/courses/1`)
      .set("access_token", access_token)
      .expect(404)
      .end((err, res) => {
        expect(res.body).toHaveProperty("message", "Not found");
        done();
      });
  });
});

//
describe("END POINT POST COURSE", () => {
  test("SUCCESS POST COURSE - 201", (done) => {
    request(app)
      .post(`/courses`)
      .set({ access_token: access_token })
      .send({ name: "Data Testing", detail: "Ini detail course" })
      .expect(201)
      .end((err, res) => {
        console.log(res.body);
        done();
      });
  });

  test("POST COURSE WITH INVALID TOKEN - 401", (done) => {
    request(app)
      .post(`/courses`)
      .set("access_token", access_token)
      .expect(201)
      .end((err, res) => {
        console.log(res.body);
        done();
      });
  });
});


