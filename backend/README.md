# UberClone Backend

This folder contains the backend implementation for the UberClone project.

## Project Structure

- **models/**: Database models for various entities.
- **services/**: Business logic and service implementations.
- **controllers/**: Route handlers.
- **Routes/**: API route definitions.
- **config/**: Configuration settings.
- **utils/**: Utility functions and helpers.

## Installation

1. Clone the repository.
2. Navigate to the backend folder.
3. Run `npm install` to install dependencies.
4. Create a `.env` file for environment variables.
5. Run `npm run start` to start the server.

## Usage

Ensure that your database is up and running. The backend exposes various RESTful API endpoints to handle user and caption (driver) operations.

## API Endpoints

---

### User Endpoints

#### Create a New User

- **Endpoint:** `POST /user/register`

**Request Body**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

**Field Requirements**

- **fullname.firstname**: (string, required) Minimum 3 characters.
- **fullname.lastname**: (string, optional) Minimum 3 characters if provided.
- **email**: (string, required) Must be a valid email address.
- **password**: (string, required) Minimum 6 characters.

**Response Data**

*Success Response*  
- **Status Code:** 200 OK
- **Response Body:**

  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketid": null
    }
  }
  ```

*Validation Error*  
- **Status Code:** 400 Bad Request  
- **Response Body:**

  ```json
  {
    "errors": [
      {
        "msg": "Validation error message",
        "param": "<field_name>",
        "location": "body"
      }
    ]
  }
  ```

*Missing Field(s) Error*  
- **Status Code:** 400 Bad Request  
- **Response Body:**

  ```json
  {
    "errors": [
      {
        "msg": "All fields are required"
      }
    ]
  }
  ```

---

#### User Login API

- **Endpoint:** `POST /user/login`

**Request Body**

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

**Field Requirements**

- **email**: (string, required) Must be a valid email address.
- **password**: (string, required) Minimum 6 characters.

**Response Data**

*Success Response*  
- **Status Code:** 200 OK  
- **Response Body:**

  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketid": null
    }
  }
  ```

*Validation Error*  
- **Status Code:** 400 Bad Request  
- **Response Body:**

  ```json
  {
    "errors": [
      {
        "msg": "Validation error message",
        "param": "<field_name>",
        "location": "body"
      }
    ]
  }
  ```

*Authentication Error*  
- **Status Code:** 401 Unauthorized  
- **Response Body:**

  ```json
  {
    "message": "invalid email or password"
  }
  ```

---

#### User Profile API

- **Endpoint:** `GET /user/profile`

**Headers**

Require an authentication token provided as a cookie (`token`) or in the `Authorization` header as a Bearer token.

**Response Data**

*Success Response*  
- **Status Code:** 200 OK  
- **Response Body:**

  ```json
  {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketid": null
  }
  ```

*Not Found Error*  
- **Status Code:** 404 Not Found  
- **Response Body:**

  ```json
  {
    "message": "User not found"
  }
  ```

---

#### User Logout API

- **Endpoint:** `GET /user/logout`

**Headers**

Require an authentication token provided as a cookie (`token`) or in the `Authorization` header as a Bearer token.

**Response Data**

*Success Response*  
- **Status Code:** 200 OK  
- **Response Body:**

  ```json
  {
    "message": "Logged out successfully"
  }
  ```

*Error - No Token Provided*  
- **Status Code:** 400 Bad Request  
- **Response Body:**

  ```json
  {
    "message": "No token provided"
  }
  ```

---

### Caption (Driver) Endpoints

#### Create a New Caption (Driver) Registration

- **Endpoint:** `POST /caption/register`

**Request Body**

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "yourpassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

**Field Requirements**

- **fullname.firstname**: (string, required) Minimum 3 characters.
- **fullname.lastname**: (string, optional) Minimum 3 characters if provided.
- **email**: (string, required) Must be a valid email address.
- **password**: (string, required) Minimum 6 characters.
- **vehicle.color**: (string, required) Minimum 3 characters.
- **vehicle.plate**: (string, required) Minimum 3 characters.
- **vehicle.capacity**: (number, required) At least 1.
- **vehicle.vehicleType**: (string, required) Must be one of: `car`, `bike`, `truck`, `bus`.

**Response Data**

*Success Response*  
- **Status Code:** 201 Created  
- **Response Body:**

  ```json
  {
    "token": "<jwt_token>",
    "caption": {
      "_id": "<caption_id>",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "socketId": null,
      "status": "inactive",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

*Validation or Missing Field Error*  
- **Status Code:** 400 Bad Request  
- **Response Body:**

  ```json
  {
    "errors": [
      {
        "msg": "Validation error message",
        "param": "<field_name>",
        "location": "body"
      }
    ]
  }
  ```

*Already Exists Error*  
- **Status Code:** 400 Bad Request  
- **Response Body:**

  ```json
  {
    "message": "caption already exist"
  }
  ```

---

#### Caption Login API

- **Endpoint:** `POST /caption/login`

**Request Body**

```json
{
  "email": "jane.doe@example.com",
  "password": "yourpassword"
}
```

**Field Requirements**

- **email**: (string, required) Must be a valid email address.
- **password**: (string, required) Minimum 6 characters.

**Response Data**

*Success Response*  
- **Status Code:** 201 Created  
- **Response Body:**

  ```json
  {
    "token": "<jwt_token>",
    "captiondata": {
      "_id": "<caption_id>",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "socketId": null,
      "status": "inactive",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

*Validation Error*  
- **Status Code:** 400 Bad Request  
- **Response Body:**

  ```json
  {
    "errors": [
      {
        "msg": "Validation error message",
        "param": "<field_name>",
        "location": "body"
      }
    ]
  }
  ```

*Authentication Error*  
- **Status Code:** 404 Not Found or 400 Bad Request  
- **Response Body:**

  ```json
  {
    "message": "user not found" // or "invalid email or password"
  }
  ```

---

#### Caption Profile API

- **Endpoint:** `GET /caption/profile`

**Headers**

Require an authentication token provided as a cookie (`token`) or in the `Authorization` header as a Bearer token.

**Response Data**

*Success Response*  
- **Status Code:** 200 OK  
- **Response Body:**

  ```json
  {
    "caption": {
      "_id": "<caption_id>",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "socketId": null,
      "status": "inactive",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

---

#### Caption Logout API

- **Endpoint:** `POST /caption/logout`

**Headers**

Require an authentication token provided as a cookie (`token`) or in the `Authorization` header as a Bearer token.

**Response Data**

*Success Response*  
- **Status Code:** 200 OK  
- **Response Body:**

  ```json
  {
    "message": "logout successfully"
  }
  ```

*Error - No Token Provided*  
- **Status Code:** 400 Bad Request  
- **Response Body:**

  ```json
  {
    "message": "No token provided"
  }
  ```

---

## Additional Information

- **Logout Operations:**  
  Both User and Caption logout endpoints blacklist the provided JWT token for 24 hours to prevent its reuse.
  
- **Authentication Middleware:**  
  Middleware checks for the presence of a valid token (either from cookies or the Authorization header) and ensures the token is not blacklisted.

## Technologies Used

- Node.js
- Express
- MongoDB

## License

This project is licensed under the MIT License.