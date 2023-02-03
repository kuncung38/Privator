## List:

# Students CURD

    POST /students/register
    POST /students/login
    GET /students
    GET /students/:id
    PUT /students/:id
    DELETE /students/:id

# Instructors CRUD

    POST /instructors/register
    POST /instructors/login
    GET /instructors
    GET /instructors/:id
    PUT /instructors/:id
    DELETE /instructors/:id

# Classroom CRUD

    POST /classroom/create
    GET  /classroom/:id

---

    Instructors routes needs request with format exactly as the same as Students routes, They also gave very similar responses. Just replace the url with /instructors and everything will work just fine

# 1. POST /students/register

Request:

-   body:

```json
{
    "fullName": "string, required",
    "email": "string, required",
    "username": "string, required",
    "password": "string, required",
    "bio": "string",
    "birthData": "date",
    "phoneNumber": "string",
    "address": "string",
    "profilePicture": "string",
    "profileBanner": "String",
    "location": {
        "type": "Point", //type must be 'Point'
        "coordinates": [longitude, latitude]
    }
}
```

_Response (201 - Created)_

```json
{
    "message": "New Student has been created"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email and password are required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email is already be exists"
}

```

&nbsp;

# 2. POST /students/login

Request:

-   body:

```json
{
    "email": "string, required",
    "password": "string, required"
}
```

_Response (200 - OK)_

```json
{"ok"}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Email and password are required"
}
```

_Response (401 - Unauthenticated)_

```json
{
    "message": "Invalid user or password"
}
```

&nbsp;

# 3. GET /students

Description: Get all current students

_Response (200 - OK)_

```json
{
    [
       {
            "fullName": "string",
            "email": "string",
            "username": "string, required",
            "bio": "string",
            "birthData": "date",
            "phoneNumber": "string",
            "address": "string",
            "profilePicture": "string",
            "profileBanner": "String",
            "location": {
                "type": "Point", //type must be 'Point'
                "coordinates": [longitude, latitude]
            }
        },
        ...
    ]
}
```

&nbsp;

# 4. GET /students/:id

Get data based on the id as parameters

_Response (200 - OK)_

```json
{
    "fullName": "string",
    "email": "string",
    "username": "string, required",
    "bio": "string",
    "birthData": "date",
    "phoneNumber": "string",
    "address": "string",
    "profilePicture": "string",
    "profileBanner": "String",
    "location": {
        "type": "Point", //type must be 'Point'
        "coordinates": [longitude, latitude]
    }
}
```

_Response(404 - Not Found)_

```json
{
    "message": "Student / instructor not found"
}
```

&nbsp;

# 5. PUT /students/:id

Edit Students data based on id as params.
For now, lets not modify the password
Request:

-   Body

```json
{
    "fullName": "string",
    "email": "string",
    "bio": "string",
    "birthData": "date",
    "phoneNumber": "string",
    "address": "string",
    "profilePicture": "string",
    "profileBanner": "String",
    "location": {
        "type": "Point", //type must be 'Point'
        "coordinates": [longitude, latitude]
    }
}
```

# 6. DELETE /students/:id

_response (200 - OK)_

```json
{
    "message": "Succesfully deleted user"
}
```

_Response(404 - Not Found)_

```json
{
    "message": "Student / instructor not found"
}
```

&nbsp;

## Global Error

_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal server error"
}
```
