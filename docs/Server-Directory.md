
## MVC DESIGN

- `node`서버 에 `api docs` 를 배포하기 위해 `public`폴더가 존재, `swagger`를 사용하여 `yaml` 파일로 배포
- `sequelize` 를 사용했기 때문에 `config`, `models` 폴더
- `route`를 `combine router` 로 나누지는 않앗음 라우터의 갯수가 많지 않다.
- `controller`를 사용하여 각 `path`에 매칭시킨다.
- `rest`폴더를 만들어 `rest client`extension 사용이 용이하도록 `test request`를 관리
- `views` 는 간단한 `oauth`테스트 용도


```js
.
├── config
│   └── config.js
├── controllers
│   ├── art
│   ├── auction
│   ├── bid
│   ├── file
│   ├── likes
│   ├── paddle
│   ├── puzzle
│   └── user
├── index.js
├── models
│   ├── art.js
│   ├── auction.js
│   ├── bid.js
│   ├── file.js
│   ├── index.js
│   ├── init-models.js
│   ├── invite.js
│   ├── likes.js
│   ├── paddle.js
│   ├── puzzle.js
│   └── user.js
├── package.json
├── public
│   ├── docs
│   └── swagger.yaml
├── request.rest
├── rest
│   ├── art.rest
│   ├── auction.rest
│   ├── bid.rest
│   ├── file.rest
│   ├── likes.rest
│   ├── paddle.rest
│   └── puzzle.rest
├── routes
│   ├── art.js
│   ├── auction.js
│   ├── bid.js
│   ├── file.js
│   ├── index.js
│   ├── likes.js
│   ├── paddle.js
│   ├── puzzle.js
│   └── user.js
└── views
    ├── dashboard.ejs
    ├── index.ejs
    ├── login.ejs
    └── protectroute.ejs
```