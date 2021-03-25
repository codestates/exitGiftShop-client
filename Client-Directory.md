
## Atomic Design

`랜딩페이지를` 기준으로 네개의 `organism` 이 존재한다.
이 네개를 `template`으로 묶어서 홈페이지를 구성한다.

- onGoing
- myBid
- Collections
- Support

각 `organism` 는 `molecules` 여러개의 조합이고 우리는 `section`과 동격으로 취급했다.

각 `molecules` 마다 여러개의 기능들이 존재하는데 이를 `atoms`에서 분류한다.

```js
.
├── App
│   ├── App.js
│   ├── GlobalStyles.js
│   ├── Pages
│   │   ├── LandingFirst.js
│   │   ├── LandingLast.js
│   │   ├── LandingSecond.js
│   │   ├── LandingThird.js
│   │   └── Pagenotfound.js
│   ├── atoms
│   │   ├── Assets
│   │   ├── AuctionTime
│   │   ├── FollowBtn.js
│   │   └── Sign
│   ├── molecules
│   │   ├── ActiveBid.js
│   │   ├── DetailTitleTextBox.js
│   │   ├── Mybid
│   │   ├── Mypage.js
│   │   ├── SignUp.js
│   │   ├── SlideContent.js
│   │   └── TxHistroy.js
│   ├── organisms
│   │   ├── Collection.js
│   │   ├── MyBid.js
│   │   ├── Ongoing.js
│   │   └── Support.js
│   └── templates
│       └── LandingTemplate.js
├── apis
│   └── api.js
├── index.js
└── templates
    └── LandingTemplate.js
```