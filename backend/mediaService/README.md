# s3NodeMediaUpload
A Sample Project that uses Multer and AWS SDK to upload files to a s3 bucket , it has a dummy interface that can be replaced with by just REST API CALLS 

# Running a Node.js App with Environment Variables

In this guide, we'll walk through the steps to run a Node.js app and load environment variables from a `.env` file. [Checkout the .env.example file for refrence]

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

S-1)

Clone your Node.js project repository:

   ```bash
   git clone <repository_url>
   ```
S-2)

Install project dependencies using npm:

    ```bash
   npm install
   ```

S-3)
# Understanding the .env File in a Node.js Application

The `.env` file is a vital component of Node.js applications that allows you to manage configuration variables, secrets, and environment-specific settings. It's a best practice to store sensitive information and configuration values in this file rather than hard-coding them directly into your code. In this guide, we'll explore the importance of the `.env` file in the context of a Node.js application and provide explanations for the specific environment variables you've mentioned.

## Environment Variables in the .env File

Here's an overview of the environment variables you've mentioned in the `.env` file, along with explanations for each:

1. **`AWS_ACCESS_KEY_ID`**:
   - *Explanation*: This variable stores the AWS Access Key ID, which is used for authentication and authorization when your Node.js application interacts with AWS services. It's essential for securely accessing AWS resources.

2. **`AWS_SECRET_ACCESS_KEY`**:
   - *Explanation*: The `AWS_SECRET_ACCESS_KEY` complements the Access Key ID. It's a secret key used for authentication, and it must be kept secure. Both the Access Key ID and Secret Access Key are needed to access AWS services securely.

3. **`AWS_REGION`**:
   - *Explanation*: The `AWS_REGION` variable defines the AWS region where your application operates. AWS regions are geographic areas with their own data centers and service endpoints. Setting this variable specifies the region for your application's AWS interactions.

4. **`PORT`**:
   - *Explanation*: The `PORT` variable determines the port on which your Node.js application will listen for incoming network requests. It is used by the application's HTTP server to determine where to bind and listen for incoming connections.

5. **`AWS_BUCKET_NAME`**:
   - *Explanation*: `AWS_BUCKET_NAME` represents the name of an AWS S3 bucket. AWS S3 (Simple Storage Service) is used for scalable object storage. This variable is crucial when your application interacts with the specified S3 bucket, whether for storing or retrieving files.

## Using the .env File in Node.js

To use the environment variables defined in your `.env` file within your Node.js application, you can utilize libraries like `dotenv`. The process generally involves:

1. Creating a `.env` file in your project directory.
2. Defining your environment variables in the `.env` file.
3. Loading these variables in your Node.js application using `dotenv` or a similar library.

Here's a sample code snippet to load environment variables using `dotenv`:

```bash
#set environment variables
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
PORT=
AWS_BUCKET_NAME=
```

S-4)
To run the project locally

```bash
npm run start-server
```


<h1>To run the Project using Docker<h2>

Required:
Install latest version of Docker community edition

S-1)

Use command to build Image

```bash
docker build -t media-service .

```
S-2)
Use command to run container

```bash
docker run -d -p 8080:3333 media-service
```
S-3)
Go to <a href='localhost:8080'>localhost:8080</a> on your system

