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
  test("SUCESS DELETE COURSE - 200", (done) => {
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

describe("END POINT POST COURSE", () => {
  test("SUCESS  COURSE - 200", (done) => {
    request(app)
      .post(`/courses`)
      .set("access_token", access_token)
      .send({})
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
      .expect(200)
      .end((err, res) => {
        expect(res.body).toHaveProperty("message", "Not found");
        done();
      });
  });
});
