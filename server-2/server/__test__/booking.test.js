const app = require("../app");
const request = require("supertest");
const {
  Category,
  Course,
  Student,
  Instructor,
  sequelize,
} = require("../models");
const { queryInterface } = sequelize;
let course = require("../data/course.json");
let student = require("../data/student.json");
let instructor = require("../data/instructor.json");
let category = require("../data/category.json");
let booking = require("../data/booking.json");
const bcrypt = require("bcrypt");
let access_token;
let invalid_access_token = `12345678eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjc1Njg5Mzc5fQ.l2lGkMX6xuQGhg9K4qx4B3Us0fWump64k7whVSnyEBM`;

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

  category.forEach((el) => {
    delete el.id;
    el.createdAt = new Date();
    el.updatedAt = new Date();
  });

  await queryInterface.bulkInsert("Categories", category, {});

  course.forEach((el) => {
    el.createdAt = new Date();
    el.updatedAt = new Date();
  });

  await queryInterface.bulkInsert("Courses", course, {});

  booking.forEach((el) => {
    el.createdAt = new Date();
    el.updatedAt = new Date();
  });

  await queryInterface.bulkInsert("Bookings", booking, {});
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

  await Category.destroy({
    cascade: true,
    truncate: true,
    restartIdentity: true,
  });

  await Course.destroy({
    cascade: true,
    truncate: true,
    restartIdentity: true,
  });
});

describe("GET ALL BOOKING BY STUDENT", (done) => {
  test("LOGIN - 200", (done) => {
    request(app)
      .post("/student/login")
      .send({ email: "banana@mail.com", password: "12345" })
      .expect(200)
      .end((err, res) => {
        access_token = res.body.access_token;
        return done();
      });
  });

  test("GET ALL BOOKING STUDENT - 200", (done) => {
    request(app)
      .get("/booking")
      .set("access_token", access_token)
      .expect(200)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(Array.isArray(body)).toBeTruthy();
        return done();
      });
  });

  test("FAILED GET ALL BOOKING CAUSE INVALID ACCESS TOKEN - 401", (done) => {
    request(app)
      .get("/booking")
      .set("access_token", invalid_access_token)
      .expect(401)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "JsonWebTokenError");
        return done();
      });
  });

  test("FAILED GET ALL BOOKING CAUSE ACCESS TOKEN IS NULL - 401", (done) => {
    request(app)
      .get("/booking")
      .set("access_token", invalid_access_token)
      .expect(401)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "JsonWebTokenError");
        return done();
      });
  });
});

describe("PATCH BOOKING BY STUDENT", (done) => {
  test("SUCCESS PATCH BOOKING STUDENT - 200", (done) => {
    request(app)
      .patch("/booking/payBooking/1")
      .set("access_token", access_token)
      .send({ time: "Friday" })
      .expect(200)
      .end((err, res) => {
        const { body, status } = res;

        return done();
      });
  });
});

describe("GET ONE BOOKING BY STUDENT", (done) => {
  test("SUCCESS GET BOOKING STUDENT - 200", (done) => {
    request(app)
      .get("/booking/1")
      .set("access_token", access_token)
      .expect(200)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toHaveProperty("id");
        expect(body).toHaveProperty("status");
        expect(body).toHaveProperty("Course");
        expect(body).toHaveProperty("Instructor");
        return done();
      });
  });

  test("FAILED GET BOOKING STUDENT CAUSE INVALID ACCESS TOKEN - 401", (done) => {
    request(app)
      .get("/booking/1")
      .set("access_token", invalid_access_token)
      .expect(200)
      .end((err, res) => {
        const { status, body } = res;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "JsonWebTokenError");
        return done();
      });
  });

  test("FAILED GET BOOKING STUDENT CAUSE INVALID ACCESS TOKEN - 401", (done) => {
    request(app)
      .get("/booking/1")
      .expect(200)
      .end((err, res) => {
        const { status, body } = res;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "Invalid token");
        return done();
      });
  });

  test("FAILED GET BOOKING STUDENT DATA NOT FOUND - 404", (done) => {
    request(app)
      .get("/booking/100")
      .set("access_token", access_token)
      .expect(404)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(404);
        expect(body).toHaveProperty("message", "Booking not found");
        return done();
      });
  });
});

describe("POST BOOKING BY STUDENT", (done) => {
  test("SUCCESS ADD BOOKING BY STUDENT - 201", (done) => {
    request(app)
      .post("/booking/1")
      .set("access_token", access_token)
      .expect(201)
      .end((err, res) => {
        const { body, status } = res;
        console.log(body, "<======== ini body post");
        expect(status).toBe(201);
        return done();
      });
  });

  test("FAILED BOOKING BECAUSE COURSE NOT FOUND - 404", (done) => {
    request(app)
      .post("/booking/100")
      .set("access_token", access_token)
      .expect(201)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(404);
        expect(body).toHaveProperty("message", "Course not found");
        return done();
      });
  });
});
