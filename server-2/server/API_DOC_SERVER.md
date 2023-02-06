# Privator API Documentation

## Models :

_User_

```
- email : string, required, unique
- name : string, required
- password : string, required
```

_Course_

```
- title : string, required
- instructor : string, required
- day : string, required
- imageUrl : string, required
```

_MyCourse_

```
- UserId : integer, required
- CourseId : integer, required
- status : string, (default: "Uncompleted")
```

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`

Routes below need authentication:

- `GET /courses`
- `POST /mycourses/:courseId`
- `GET /mycourses`

Routes below need authentication & authorization:

- `PATCH /mycourses/:id`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "email": "string",
  "name": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "name": "string",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Name is required"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. GET /courses

Description:

- Get all course from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 1,
    "title": "Intro Vue",
    "instructor": "Samuel Aditia",
    "day": "Monday,Thursday,Saturday",
    "imageUrl": "https://docs.vuejs.id/images/logo.png"
  },
  {
    "id": 2,
    "title": "REST API",
    "instructor": "Wendy",
    "day": "Wednesday,Friday",
    "imageUrl": "https://billwerk.io/wp-content/uploads/sites/2/2019/05/icons-restapi-350x350.png"
  },
  {
    "id": 3,
    "title": "JQuery & Bootstrap",
    "instructor": "Ayu Sudi",
    "day": "Tuesday,Thursday",
    "imageUrl": "https://www.kindpng.com/picc/m/445-4450455_css-logo-jquery-html-css-and-jquery-hd.png"
  },
  ...,
]
```

&nbsp;

## 4. POST /mycourses/:courseId

Description:

- Add course to my course

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "courseId": "integer"
}
```

_Response (201 - Created)_

```json
{
  "id": 1,
  "CourseId": 2,
  "UserId": 1,
  "status": "Uncompleted"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Course not found"
}
```

&nbsp;

## 5. GET /mycourses

Description:

- Get all my course from user

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 2,
    "UserId": 1,
    "CourseId": 2,
    "status": "Uncompleted",
    "Course": {
      "title": "REST API",
      "instructor": "Edison",
      "day": "Wednesday,Friday",
      "imageUrl": "https://billwerk.io/wp-content/uploads/sites/2/2019/05/icons-restapi-350x350.png"
    }
  },
  {
    "id": 1,
    "UserId": 1,
    "CourseId": 1,
    "status": "Completed",
    "Course": {
      "title": "Intro Vue",
      "instructor": "Arnold Therigan",
      "day": "Monday,Thursday,Saturday",
      "imageUrl": "https://docs.vuejs.id/images/logo.png"
    }
  }
  ...,
]
```

&nbsp;

## 6. PATCH /mycourses/:id

Description:

- Update my course to completed

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "message": "Course has been completed"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Course not found"
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You are not authorized"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
