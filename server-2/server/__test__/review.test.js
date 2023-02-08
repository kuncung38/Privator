const app = require("../app");
const request = require("supertest");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;

afterAll(() => {
  queryInterface.bulkDelete("Reviews", null, {
    restartIdentity: true,
    truncate: true,
    cascade: true,
  });
});

describe("ENDPOINT REVIEW", () => {
  test("SUCCESS POST REVIEW - 201", (done) => {
    request(app)
      .post("/review/1")
      .send({ score: 5, description: "best course ever" })
      .expect(201)
      .end((err, res) => {
        expect(res.body).toHaveProperty(
          "message",
          "Thank you for your feedback"
        );
        return done();
      });
  });

  test("FAILED REGIST STUDENT CAUSE SCORE IS NULL - 400", (done) => {
    request(app)
      .post("/review/1")
      .send({ score: null, description: "best course ever" })
      .expect(400)
      .end((err, res) => {
        expect(res.body).toHaveProperty("message", "Score is missing");
        return done();
      });
  });

  test("FAILED REGIST STUDENT CAUSE SCORE IS UNDEFINED - 400", (done) => {
    request(app)
      .post("/review/1")
      .send({ score: undefined, description: "best course ever" })
      .expect(400)
      .end((err, res) => {
        expect(res.body).toHaveProperty("message", "Score is missing");
        return done();
      });
  });
});

describe("END POINT LOGIN STUDENT", () => {
  test("SUCESS LOGIN STUDENT - 200", (done) => {
    request(app)
      .post("/student/login")
      .send({ email: user1.email, password: user1.password })
      .expect(200)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("access_token", expect.any(String));
        return done();
      });
  });

  test("FAILED LOGIN STUDENT CAUSE EMAIL INVALID- 401", (done) => {
    request(app)
      .post("/student/login")
      .send({ email: "halo@gmail.com", password: user1.password })
      .expect(401)
      .end((err, res) => {
        expect(res.status).toBe(401);
        expect(res.body).toHaveProperty("message", "Invalid email or password");
        return done();
      });
  });

  test("FAILED LOGIN STUDENT CAUSE PASSWORD INVALID- 401", (done) => {
    request(app)
      .post("/student/login")
      .send({ email: user1.email, password: "pass_wrong" })
      .expect(401)
      .end((err, res) => {
        expect(res.status).toBe(401);
        expect(res.body).toHaveProperty("message", "Invalid email or password");
        return done();
      });
  });

  test("FAILED LOGIN STUDENT CAUSE EMAIL NULL - 400", (done) => {
    request(app)
      .post("/student/login")
      .send({ email: "", password: user1.password })
      .expect(400)
      .end((err, res) => {
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty("message", "Email is required");
        return done();
      });
  });

  test("FAILED LOGIN STUDENT CAUSE PASSWORD NULL - 400", (done) => {
    request(app)
      .post("/student/login")
      .send({ email: user1.email, password: "" })
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        const { body, status } = res;
        expect(status).toBe(400);
        expect(body).toHaveProperty("message", "Password is required");
        return done();
      });
  });
});
