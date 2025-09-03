# nodejs-crud-simple

Project ini merupakan implementasi sederhana dari aplikasi CRUD (Create, Read, Update, Delete) menggunakan **Node.js** dengan koneksi ke **MySQL**.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    age INT
);
```

## File .env
Berikut contoh file .env yang digunakan
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=testdb
PORT=3000
```
## License

[MIT](https://choosealicense.com/licenses/mit/)