# API Documentation

## Endpoints

- `/register`
- `/chats/:userId`
- `/chats/:userId/:groupId`
- `/image/upload`
- `/delete/:userId/message`
- `/delete/:userId/:roomId/message`

### POST `/register`

for user to register

```json
{
    "header": {
        "Content-Type": "application/x-www-form-urlencoded"
  }
}
```

#### Request

```json
{
    "phoneNumber": integer,
}
```

#### Response

- _201-Created_

```json
{
  "statusCode": 201,
  "message": "User created successfully"
}
```

- _400-Bad Request_

```json
{
  "error": {
    "statusCode": 400,
    "message": "Registration failed"
  }
}
```

### GET `/chats/:userId`

to show all chats of one user

#### Response

- _200-OK_

```json
{
  "statusCode": 200,
  "message": "OK"
}
```

- _400-Bad Request_

```json
{
  "error": {
    "statusCode": 400,
    "message": "Bad Request"
  }
}
```

- _403-Forbidden_

```json
{
  "error": {
    "statusCode": 403,
    "message": "You are unauthorized"
  }
}
```

### GET `/chats/:userId/:groupId`

to show group chat of a user

#### Response

- _200-OK_

```json
{
  "statusCode": 200,
  "message": "OK"
}
```

- _400-Bad Request_

```json
{
  "error": {
    "statusCode": 400,
    "message": "Bad Request"
  }
}
```

- _404-Not Found_

```json
{
  "error": {
    "statusCode": 404,
    "message": "The Group chat is not found"
  }
}
```

### Global Error

- _500-Internal Server Error_

```json
{
  "error": {
    "statusCode": 500,
    "message": "Internal Server Error"
  }
}
```
