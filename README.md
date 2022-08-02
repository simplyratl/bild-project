# Bild Studio Project

A frontend test project that uses React JS.

## Installation

Install the project with yarn or npm install (yarn recommended considering it is what I used). That should
install all needed independecies that are used inside the project.

```bash
  yarn
  npm install
```

## Starting mockup backend

After installing you need to start backend.

```bash
  npx json-server --w db.json --port 4000
```

## Starting the project

All that's left to do is start the project using yarn start or npm start

```bash
  yarn start
  npm start
```

## API Reference

### JSON SERVER API

#### Get all posts

```http
  GET /posts
```

| Parameter | Type | Description            |
| :-------- | :--- | :--------------------- |
|           |      | No parameters required |

#### Get specific posts

```http
  GET /posts&category=${value}
```

| Parameter  | Type     | Value   | Description                                                                       |
| :--------- | :------- | :------ | :-------------------------------------------------------------------------------- |
| `category` | `string` | `value` | Dynamic parameter that fetches objects with specific value in this case category. |

#### Pagination

```http
  GET /posts?_page=${1}
```

| Parameter | Type  | Description                                                          |
| :-------- | :---- | :------------------------------------------------------------------- |
| `page`    | `int` | Pagination of fetched data. Limitations of API is 10 items per page. |
