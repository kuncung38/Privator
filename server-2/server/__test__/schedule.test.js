const app = require("../app");
const request = require("supertest");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;
let instructor = require("../data/instructor.json");
let student = require("../data/student.json");
let schedule = require("../data/schedule.json");
let access_token;
let invalid_access_token = `12345678eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjc1Njg5Mzc5fQ.l2lGkMX6xuQGhg9K4qx4B3Us0fWump64k7whVSnyEBM`;
const { Student, Instructor, Schedule } = require("../models");
const bcrypt = require("bcrypt");

const user1 = {
  email: "testing@gmail.com",
  password: "12345",
  fullName: "Instructor 01",
  birthDate: "2023-02-04",
  location: "Jl. Sultan Iskandar Muda, Jakarta, 12240, Indonesia",
};

beforeAll(async () => {
  instructor.forEach((el) => {
    el.password = bcrypt.hashSync(el.password, 10);
    el.createdAt = new Date();
    el.updatedAt = new Date();
    el.geometry = JSON.stringify(el.geometry);
  });

  await queryInterface.bulkInsert("Instructors", instructor, {});

  student.forEach((el) => {
    el.password = bcrypt.hashSync(el.password, 10);
    el.createdAt = new Date();
    el.updatedAt = new Date();
    el.geometry = JSON.stringify(el.geometry);
  });

  await queryInterface.bulkInsert("Students", student, {});

  schedule.forEach((el) => {
    el.createdAt = new Date();
    el.updatedAt = new Date();
  });

  console.log(schedule, "<=======");

  await queryInterface.bulkInsert("Schedules", schedule, {});
});

afterAll(async () => {
  await Instructor.destroy({
    cascade: true,
    truncate: true,
    restartIdentity: true,
  });

  await Student.destroy({
    cascade: true,
    truncate: true,
    restartIdentity: true,
  });

  await Schedule.destroy({
    cascade: true,
    truncate: true,
    restartIdentity: true,
  });
});

describe("GET ALL SCHEDULE BY INSTRUCTOR", (done) => {
  test("LOGIN - 200", (done) => {
    request(app)
      .post("/instructor/login")
      .send({ email: "jenny@mail.com", password: "12345" })
      .expect(200)
      .end((err, res) => {
        access_token = res.body.access_token;
        return done();
      });
  });

  test("GET ALL SCHEDULE - 200", (done) => {
    request(app)
      .get("/schedule")
      .set("access_token", access_token)
      .expect(200)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(Array.isArray(body)).toBeTruthy();
        return done();
      });
  });

  test("FAILED GET ALL SCHEDULE CAUSE INVALID ACCESS TOKEN - 401", (done) => {
    request(app)
      .get("/schedule")
      .set("access_token", invalid_access_token)
      .expect(401)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "JsonWebTokenError");
        return done();
      });
  });

  test("FAILED GET ALL SCHEDULE CAUSE NULL ACCESS TOKEN - 401", (done) => {
    request(app)
      .get("/schedule")
      .expect(401)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "Invalid token");
        return done();
      });
  });
});

describe("DELETE SCHEDULE BY INSTRUCTOR", (done) => {
  test("LOGIN - 200", (done) => {
    request(app)
      .post("/instructor/login")
      .send({ email: "jenny@mail.com", password: "12345" })
      .expect(200)
      .end((err, res) => {
        access_token = res.body.access_token;
        return done();
      });
  });

  test("SUCCESS DELETE SCHEDULE INSTRUCTOR - 200", (done) => {
    request(app)
      .delete("/schedule/completeSchedule/1")
      .set("access_token", access_token)
      .expect(200)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toHaveProperty("id");
        expect(body).toHaveProperty("InstructorId");
        expect(body).toHaveProperty("StudentId");
        expect(body).toHaveProperty("time");
        return done();
      });
  });

  test("FAILED DELETE SCHEDULE CAUSE INVALID ACCESS TOKEN - 401", (done) => {
    request(app)
      .delete("/schedule/completeSchedule/2")
      .set("access_token", invalid_access_token)
      .expect(401)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "JsonWebTokenError");
        return done();
      });
  });

  test("FAILED DELETE SCHEDULE CAUSE NULL ACCESS TOKEN - 401", (done) => {
    request(app)
      .delete("/schedule/completeSchedule/2")
      .expect(401)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "Invalid token");
        return done();
      });
  });

  test("FAILED DELETE SCHEDULE INSTRUCTOR CAUSE SCHEDULE NOT FOUND - 404", (done) => {
    request(app)
      .delete("/schedule/completeSchedule/100")
      .set("access_token", access_token)
      .expect(404)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(404);
        console.log(body, "<=========");
        return done();
      });
  });
});
