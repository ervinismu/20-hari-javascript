
# Task

Buat 3 url di `routes/articles.js` berserta tampilannya di `views/articles`, semua ada tampilannya kecuali yang menggunakan POST method, `form action` diarahkan `ke url yang menggunakkan method POST`.Setelah submit form, user `diarahkan ke halaman list artikel` :

- (GET)  `/` : untuk menampilkan list artikel
- (GET)  `/create` : untuk menampilkan form input artikel
- (POST) `/create_article` : untuk handle input artikel, tidak ada layout

## Example URL

- localhost:3000/articles
- localhost:3000/articles/create
- localhost:3000/articles/create_article

# install body-parser

- `npm install body-parser --save` // install body-parser
- // tambahkan ke app.js
  const bodyParser = require('body-parser');

  // ditambahkan sebelum mendefinisikan url
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

## PR

- menambahkan halaman untuk menampilkan detail article
- menambahkan tombol untuk menghapus artikel
- menambahkan halaman untuk edit artikel
