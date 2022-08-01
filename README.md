# Bild Studio Project

A frontend test project that uses React JS.

## Installation

Install the project with yarn or npm install (yarn recommended). That should
install all needed independecies that are used inside the project.

```bash
  yarn
  npm install
```

## Starting the project

After installing the project use yarn start or npm start

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
