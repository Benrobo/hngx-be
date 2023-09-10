# My Node.js API Documentation

Welcome to the documentation for the My Node.js API. This API allows you to perform CRUD operations on a "person" resource. You can create, retrieve, update, and delete person records using this API.

# UML Diagram

#### Picture 1: shows the basic structure and overflow of the api.

<img src="https://raw.githubusercontent.com/Benrobo/hngx-be/main/s-2/md-assets/uml1.png" width="500">

#### Picture 1: shows the request and response formats of each operation made.

<img src="https://raw.githubusercontent.com/Benrobo/hngx-be/main/s-2/md-assets/uml2.png" width="500">

## Table of Contents

1. [Getting Started](#getting-started)
2. [API Endpoints](#api-endpoints)
   - [Create a Person](#1-create-a-person)
   - [Get a Person](#2-get-a-person)
   - [Update a Person](#3-update-a-person)
   - [Delete a Person](#4-delete-a-person)
3. [Sample Requests and Responses](#sample-requests-and-responses)
4. [Testing the API](#testing-the-api)
5. [Repository](#repository)

## Getting Started

To get started with the API, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/benrobo/hngx-be.git
   ```

2. Install the dependencies:

   ```bash
   Downloads$ cd /hngx-be/s-2
   s-2$ yarn
   ```

3. Start the API server:

   ```bash
   yarn start
   # or
   yarn dev
   ```

The API will now be running at `http://localhost:8080`. You can access the API endpoints as described below.

## API Endpoints

### 1. Create a Person

- **URL:** `/api/:Mark Essein`
- **Method:** `POST`
- **Response:**

  ```json
  {
    "errorStatus": false,
    "code": "--person/success",
    "message": "User created successfully",
    "statusCode": 200,
    "data": {
      "id": "896ea8dce542ea2d7614",
      "name": "Mark Essein"
    }
  }
  ```

### 2. Get a Person

- **URL:** `/api/:identifier`
  > Identifier could either be **user id** or **username**
- **Method:** `GET`
- **Response (Success):**

  ```json
  {
    "errorStatus": false,
    "code": "--person/success",
    "message": "Success",
    "statusCode": 200,
    "data": {
      "id": "896ea8dce542ea2d7614",
      "name": "John Doe"
    }
  }
  ```

- **Response (Not Found):**

  ```json
  {
    "errorStatus": true,
    "code": "--person/user-notfound",
    "message": "User doesn't exist.",
    "statusCode": 404
  }
  ```

### 3. Update a Person

- **URL:** `/api/:userId`
- **Method:** `PUT`
- **Response (Success):**

  ```json
  {
    "errorStatus": false,
    "code": "--person/success",
    "message": "User updated successfully",
    "statusCode": 200,
    "data": {
      "id": "896ea8dce542ea2d7614",
      "name": "New Name"
    }
  }
  ```

- **Response (Not Found):**

  ```json
  {
    "errorStatus": true,
    "code": "--person/user-notfound",
    "message": "Failed to update: User doesn't exist.",
    "statusCode": 404
  }
  ```

### 4. Delete a Person

- **URL:** `/api/:userId`
- **Method:** `DELETE`
- **Response (Success):**

  ```json
  {
    "errorStatus": false,
    "code": "--person/success",
    "message": "User deleted successfully",
    "statusCode": 200,
    "data": null
  }
  ```

- **Response (Not Found):**

  ```json
  {
    "errorStatus": true,
    "code": "--person/user-notfound",
    "message": "User doesn't exist.",
    "statusCode": 404
  }
  ```

## Sample Requests and Responses

You can use tools like `curl`, Postman, or any HTTP client library to interact with the API using the provided endpoints. Refer to the [API Endpoints](https://hngx-be2.onrender.com/api) section for details on each request and response.

## Testing the API

You can run automated tests to verify the functionality of the API. The tests cover creating, retrieving, updating, and deleting persons. To run the tests, use the following command:

```bash
npm test
```

## Repository

The source code for this API is available on GitHub: [Link to Repository](https://github.com/yourusername/your-repo)

Feel free to explore the code and contribute to the project.

Thank you for using our API! If you have any questions or encounter issues, please don't hesitate to reach out.

Please replace `"http://localhost:3000"` with the actual base URL where your API is hosted in the "Getting Started" section. Additionally, replace the GitHub repository link in the "Repository" section with your actual repository URL.
