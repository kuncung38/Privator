const app = require("../app");
const request = require("supertest");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;
let data = require("../data/instructor.json");

const user1 = {
  email: "testing@gmail.com",
  password: "12345",
  fullName: "Instructor 01",
  birthDate: "2023-02-04",
  location: "Jl. Sultan Iskandar Muda, Jakarta, 12240, Indonesia",
};

afterAll(() => {
  queryInterface.bulkDelete("Instructors", null, {
    restartIdentity: true,
    truncate: true,
    cascade: true,
  });
});

describe("END POINT REGIST INSTRUCTOR", () => {
  test("SUCESS REGIST INSTRUCTOR - 201", (done) => {
    request(app)
      .post("/instructor/register")
      .send(user1)
      .expect(201)
      .end((err, res) => {
        expect(res.body).toHaveProperty(
          "message",
          "Success create a new instructor!"
        );
        return done();
      });
  });

  test("FAILED REGIST INSTRUCTOR CAUSE EMAIL IS NULL - 400", (done) => {
    request(app)
      .post("/instructor/register")
      .send({ password: "12345" })
      .expect(400)
      .end((err, res) => {
        expect(res.body).toHaveProperty("message", "Email is required");
        return done();
      });
  });

  test("FAILED REGIST INSTRUCTOR CAUSE PASSWORD IS NULL - 400", (done) => {
    request(app)
      .post("/instructor/register")
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

  test("FAILED REGIST INSTRUCTOR CAUSE FULLNAME IS NULL - 400", (done) => {
    request(app)
      .post("/instructor/register")
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

  test("FAILED REGIST INSTRUCTOR CAUSE BIRTHDATE IS NULL - 400", (done) => {
    request(app)
      .post("/instructor/register")
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

  test("FAILED REGIST INSTRUCTOR CAUSE LOCATION IS NULL - 400", (done) => {
    request(app)
      .post("/instructor/register")
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

  test("FAILED REGIST INSTRUCTOR CAUSE EMAIL ALREADY  EXISTS - 400", (done) => {
    request(app)
      .post("/instructor/register")
      .send(user1)
      .expect(400)
      .end((err, res) => {
        const { body, status } = res;
        if (err) done(err);
        expect(status).toBe(400);
        expect(body).toHaveProperty("message", "Email must be unique");
        return done();
      });
  });

  test("FAILED REGIST INSTRUCTOR CAUSE EMAIL INVALID FORMAT - 400", (done) => {
    request(app)
      .post("/instructor/register")
      .send({
        email: "testing",
        password: "12345",
        fullName: "Student 01",
        birthDate: "2023-02-04",
        location: "Jl. Sultan Iskandar Muda, Jakarta, 12240, Indonesia",
      })
      .expect(400)
      .end((err, res) => {
        const { body, status } = res;
        expect(status).toBe(400);
        expect(body).toHaveProperty("message", "Invalid email format");
        return done();
      });
  });
});

describe("END POINT LOGIN INSTRUCTOR", () => {
  test("SUCESS LOGIN INSTRUCTOR - 200", (done) => {
    request(app)
      .post("/instructor/login")
      .send({ email: user1.email, password: user1.password })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const { body, status } = res;
        expect(status).toBe(200);
        expect(body).toHaveProperty("access_token", expect.any(String));
        return done();
      });
  });

  test("FAILED LOGIN INSTRUCTOR CAUSE EMAIL INVALID- 401", (done) => {
    request(app)
      .post("/instructor/login")
      .send({ email: "halo@gmail.com", password: user1.password })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        const { body, status } = res;
        expect(status).toBe(401);
        expect(body).toHaveProperty("message", "Invalid email or password");
        return done();
      });
  });

  test("FAILED LOGIN INSTRUCTOR CAUSE PASSWORD INVALID- 401", (done) => {
    request(app)
      .post("/instructor/login")
      .send({ email: user1.email, password: "pass_wrong" })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        const { body, status } = res;
        expect(status).toBe(401);
        return done();
      });
  });

  test("FAILED LOGIN INSTRUCTOR CAUSE EMAIL NULL - 400", (done) => {
    request(app)
      .post("/instructor/login")
      .send({ email: "", password: user1.password })
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        const { body, status } = res;
        expect(status).toBe(400);
        expect(body).toHaveProperty("message", "Email is required");
        return done();
      });
  });

  test("FAILED LOGIN INSTRUCTOR CAUSE PASSWORD NULL - 400", (done) => {
    request(app)
      .post("/instructor/login")
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

describe("END POINT GET ALL INSTRUCTOR", () => {
  test("SUCESS GET ALL INSTRUCTOR - 200", (done) => {
    request(app)
      .get("/instructor")
      .expect(200)
      .end((err, res) => {
        expect(res.status).toBe(200);
        console.log(res.body);
        return done();
      });
  });
});

describe("END POINT GET ALL INSTRUCTOR", () => {
  test("SUCESS GET ALL INSTRUCTOR - 200", (done) => {
    request(app)
      .get("/instructor")
      .expect(200)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        return done();
      });
  });
});

describe("END POINT GET INSTRUCTOR", () => {
  test("SUCESS GET INSTRUCTOR - 200", (done) => {
    request(app)
      .get("/instructor/1")
      .expect(200)
      .end((err, res) => {
        expect(res.status).toBe(200);
        return done();
      });
  });

  test("FAILED GET INSTRUCTOR - 404", (done) => {
    request(app)
      .get("/instructor/100")
      .expect(404)
      .end((err, res) => {
        expect(res.status).toBe(404);
        expect(res.body).toHaveProperty("message", "Instructor not found");
        return done();
      });
  });
});
