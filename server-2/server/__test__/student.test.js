const app = require("../app");
const request = require("supertest");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;

const user1 = {
  email: "testing@gmail.com",
  password: "12345",
  fullName: "Student 01",
  birthDate: "2023-02-04",
  location: "Jl. Sultan Iskandar Muda, Jakarta, 12240, Indonesia",
};

afterAll(() => {
  queryInterface.bulkDelete("Students", null, {
    restartIdentity: true,
    truncate: true,
    cascade: true,
  });
});

describe("END POINT REGIST STUDENT", () => {
  test("SUCESS REGIST STUDENT - 201", (done) => {
    request(app)
      .post("/student/register")
      .send(user1)
      .expect(201)
      .end((err, res) => {
        expect(res.body).toHaveProperty(
          "message",
          "Success create a new student"
        );
        return done();
      });
  });

  test("FAILED REGIST STUDENT CAUSE EMAIL IS NULL - 400", (done) => {
    request(app)
      .post("/student/register")
      .send({ password: "12345" })
      .expect(400)
      .end((err, res) => {
        expect(res.body).toHaveProperty("message", "Email is required");
        return done();
      });
  });

  test("FAILED REGIST STUDENT CAUSE PASSWORD IS NULL - 400", (done) => {
    request(app)
      .post("/student/register")
      .send({
        email: "12345",
        fullName: "Student 01",
        birthDate: "2023-02-04",
        location: "Jl. Sultan Iskandar Muda, Jakarta, 12240, Indonesia",
      })
      .expect(400)
      .end((err, res) => {
        expect(res.body).toHaveProperty("message", "Password is required");
        return done();
      });
  });

  test("FAILED REGIST STUDENT CAUSE FULLNAME IS NULL - 400", (done) => {
    request(app)
      .post("/student/register")
      .send({
        email: "testing@gmail.com",
        password: "12345",
        birthDate: "2023-02-04",
        location: "Jl. Sultan Iskandar Muda, Jakarta, 12240, Indonesia",
      })
      .expect(400)
      .end((err, res) => {
        expect(res.body).toHaveProperty("message", "Full Name is required");
        return done();
      });
  });

  test("FAILED REGIST STUDENT CAUSE BIRTHDATE IS NULL - 400", (done) => {
    request(app)
      .post("/student/register")
      .send({
        email: "testing@gmail.com",
        password: "12345",
        fullName: "Student 01",
        location: "Jl. Sultan Iskandar Muda, Jakarta, 12240, Indonesia",
      })
      .expect(400)
      .end((err, res) => {
        expect(res.body).toHaveProperty("message", "Birth Date is required");
        return done();
      });
  });

  test("FAILED REGIST STUDENT CAUSE LOCATION IS NULL - 400", (done) => {
    request(app)
      .post("/student/register")
      .send({
        email: "testing@gmail.com",
        password: "12345",
        fullName: "Student 01",
        birthDate: "2023-02-04",
      })
      .expect(400)
      .end((err, res) => {
        expect(res.body).toHaveProperty("message", "Location is required");
        return done();
      });
  });

  test("FAILED REGIST STUDENT CAUSE EMAIL ALREADY  EXISTS - 400", (done) => {
    request(app)
      .post("/student/register")
      .send(user1)
      .expect(400)
      .end((err, res) => {
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty("message", "Email must be unique");
        return done();
      });
  });

  test("FAILED REGIST STUDENT CAUSE EMAIL INVALID FORMAT - 400", (done) => {
    request(app)
      .post("/student/register")
      .send({
        email: "testing",
        password: "12345",
        fullName: "Student 01",
        birthDate: "2023-02-04",
        location: "Jl. Sultan Iskandar Muda, Jakarta, 12240, Indonesia",
      })
      .expect(400)
      .end((err, res) => {
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty("message", "Invalid email format");
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
