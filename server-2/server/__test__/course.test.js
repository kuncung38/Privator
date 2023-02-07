const app = require("../app");
const request = require("supertest");
const { Course, Category, Instructor, sequelize } = require("../models");
const { queryInterface } = sequelize;
let course = require("../data/course.json");
let category = require("../data/category.json");
let instructor = require("../data/instructor.json");
const bcrypt = require("bcrypt");

let invalid_access_token = `12345678eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjc1Njg5Mzc5fQ.l2lGkMX6xuQGhg9K4qx4B3Us0fWump64k7whVSnyEBM`;
let access_token;

const user1 = {
  email: "testing@gmail.com",
  password: "12345",
  fullName: "Instructor 01",
  birthDate: "2023-02-04",
  location: "Jl. Sultan Iskandar Muda, Jakarta, 12240, Indonesia",
};

const mewcourse = {
  name: "Belajar Pemograman Menggunakan C++",
  detail: "Mari kita belajar",
  price: 100000,
  type: "Offline",
  imgUrl: "ini link image",
  CategoryId: 1,
  level: "Beginner",
};

beforeAll(async () => {
  category.forEach((el) => {
    delete el.id;
    el.createdAt = new Date();
    el.updatedAt = new Date();
  });

  await queryInterface.bulkInsert("Categories", category, {});

  instructor.forEach((el) => {
    el.password = bcrypt.hashSync(el.password, 10);
    el.createdAt = new Date();
    el.updatedAt = new Date();
    el.geometry = JSON.stringify(el.geometry);
  });

  await queryInterface.bulkInsert("Instructors", instructor, {});

  course.forEach((el) => {
    el.createdAt = new Date();
    el.updatedAt = new Date();
  });

  await queryInterface.bulkInsert("Courses", course, {});
});

afterAll(async () => {
  await Category.destroy({
    cascade: true,
    truncate: true,
    restartIdentity: true,
  });

  await Instructor.destroy({
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

describe("END POINT GET ALL COURSE", () => {
  test("SUCESS GET COURSE - 200", (done) => {
    request(app)
      .get("/course")
      .expect(200)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(Array.isArray(body)).toBeTruthy();
        expect(body[0]).toHaveProperty("id");
        expect(body[0]).toHaveProperty("name");
        expect(body[0]).toHaveProperty("detail");
        expect(body[0]).toHaveProperty("price");
        expect(body[0]).toHaveProperty("imgUrl");
        expect(body[0]).toHaveProperty("type");
        expect(body[0]).toHaveProperty("CategoryId");
        expect(body[0]).toHaveProperty("level");
        expect(body[0]).toHaveProperty("Instructor");
        expect(body[0]).toHaveProperty("Category");
        return done();
      });
  });
});

describe("END POINT GET ONE COURSE", () => {
  test("SUCESS GET COURSE - 200", (done) => {
    request(app)
      .get("/course/1")
      .expect(200)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toHaveProperty("id");
        expect(body).toHaveProperty("name");
        expect(body).toHaveProperty("detail");
        expect(body).toHaveProperty("price");
        expect(body).toHaveProperty("imgUrl");
        expect(body).toHaveProperty("type");
        expect(body).toHaveProperty("level");
        expect(body).toHaveProperty("Instructor");
        expect(body).toHaveProperty("Category");
        return done();
      });
  });

  test("FAILED GET COURSE - 404", (done) => {
    request(app)
      .get("/course/1000")
      .expect(404)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(404);
        expect(body).toHaveProperty("message", "Course not found");
        return done();
      });
  });
});

describe("END POINT GET ALL CATEGORIES", () => {
  test("SUCESS GET ALL CATEGORIES - 200", (done) => {
    request(app)
      .get("/course/categories")
      .expect(200)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(Array.isArray(body)).toBeTruthy();
        expect(body[0]).toHaveProperty("id");
        expect(body[0]).toHaveProperty("name");
        return done();
      });
  });
});

describe("END POINT GET ONE CATEGORY", () => {
  test("SUCESS GET ONE CATEGORY - 200", (done) => {
    request(app)
      .get("/course/categories/1")
      .expect(200)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(200);
        expect(Array.isArray(body)).toBeTruthy();
        expect(body[0]).toHaveProperty("id");
        expect(body[0]).toHaveProperty("name");
        expect(body[0]).toHaveProperty("detail");
        expect(body[0]).toHaveProperty("price");
        expect(body[0]).toHaveProperty("imgUrl");
        expect(body[0]).toHaveProperty("type");
        expect(body[0]).toHaveProperty("CategoryId");
        expect(body[0]).toHaveProperty("level");
        expect(body[0]).toHaveProperty("Instructor");
        expect(body[0]).toHaveProperty("Category");
        return done();
      });
  });

  test("FAILED GET ONE CATEGORY - 404", (done) => {
    request(app)
      .get("/course/categories/1000")
      .expect(404)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(404);
        expect(body).toHaveProperty("message", "No Course in this Category");
        return done();
      });
  });
});

describe("ADD COURSE", () => {
  test("REGISTER - 200", (done) => {
    request(app)
      .post("/instructor/register")
      .send(user1)
      .expect(201)
      .end((err, res) => {
        return done();
      });
  });

  test("LOGIN - 200", (done) => {
    request(app)
      .post("/instructor/login")
      .send({ email: user1.email, password: user1.password })
      .expect(201)
      .end((err, res) => {
        access_token = res.body.access_token;
        return done();
      });
  });

  test("SUCCESSFULY CREATE NEW COURSE - 201", (done) => {
    request(app)
      .post("/course")
      .set("access_token", access_token)
      .send(mewcourse)
      .expect(201)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(201);
        expect(body).toHaveProperty("id");
        expect(body).toHaveProperty("name", mewcourse.name);
        expect(body).toHaveProperty("detail", mewcourse.detail);
        expect(body).toHaveProperty("price", mewcourse.price);
        expect(body).toHaveProperty("imgUrl", mewcourse.imgUrl);
        expect(body).toHaveProperty("type", mewcourse.type);
        expect(body).toHaveProperty("CategoryId", mewcourse.CategoryId);
        expect(body).toHaveProperty("level", mewcourse.level);
        return done();
      });
  });

  test("FAILED CREATE NEW COURSE CAUSE INVALID ACCESS TOKEN - 401", (done) => {
    request(app)
      .post("/course")
      .set("access_token", invalid_access_token)
      .send(mewcourse)
      .expect(401)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "JsonWebTokenError");
        return done();
      });
  });

  test("FAILED CREATE NEW COURSE CAUSE NULL ACCESS TOKEN - 401", (done) => {
    request(app)
      .post("/course")
      .send(mewcourse)
      .expect(401)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "Invalid token");
        return done();
      });
  });

  test("FAILED CREATE NEW COURSE - 401", (done) => {
    request(app)
      .post("/course")
      .set("access_token", access_token)
      .send({ name: mewcourse.name })
      .expect(400)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(400);
        expect(body).toHaveProperty("message", "Please fill all the field");
        return done();
      });
  });
});
