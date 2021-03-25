
## uuid를 사용해야하는 이유

### 우리 팀은 데이터베이스 orm으로 sequelize를 선택했다

시퀄라이저의 기본 `Primary Key`는 `Integer`형식을 가지고 있다.

자 내가 원래는 `user`테이블의 `1번` 회원을 지우려고 했다고 가정해보자

- 컨트롤러에서 오타로 인해서 실수로 모델을 잘못 입력했다.
- `post`테이블을 가져왔다면?
- 당연히 `post` 테이블 또한 `1번` 글을 가지고 있을 확률이 높다 왜냐?
- `Integer`특성 상 다른 테이블과 비교했을때 1번 부터 시작하기 때문이다
- `post`테이블의 `1번` 글을 지운다.
- 당연히 이쪽 저쪽에서 에러가 터진다

이게 치명적인 약점이 될 수가 있다고 생각한다.

### 우리 팀이 선택한 방법

- 어떻게? `model schema` 에서 `Default`를 `Sequelize.UUIDV4` 로 설정

- 모델을 사용한 각종 `CRUD method`

  -기본적으로 `id` 와 `uuid` 가 동시에 생성되는 것이다.

- `Primary Key` 는 유지한다 참조하기 편한 면이 있다.
- `Unique Key`를 `uuid` 로 추가하여 시퀄라이즈의 `model`에서 처리한다.

- CRUD
  - 조회나 `api Method` 관련 `parameter` 는 `uuid`로 처리한다.
  - `constraint` 관련 `orm` 의 각종 `association` 또한 `uuid`를 기준으로 `join`시키면 되고
- **특히 response에서 id를 제거 해주는 것이 큰 도움이 될 예정**
이정도 조치만 해도 작은 프로젝트에서는 `id` 관련 이슈는 희박하게 줄어들 것 이라고 판단했지만.. 또 모른다 클라이언트에서 쓰기 힘들다고 하면... `ERD`부터 다시 시작해야한다.
결론은 시간안에는 못 만든다. 인덱스 정책을 함부로 바꾸면

#### example request

```js
{
  "art_uuid": "82865d2f-26b8-4611-85f1-933643995e79",
  "start_time": "2021-03-19T04:54:36.000Z",
  "end_time": "2021-03-19T04:54:36.000Z",
  "hammer_price": 10000,
  "now_price": 1000,
  "link": "https://exitgift.shop/ongoing"
}
```

#### example response

```js
{
  "art_uuid": "82865d2f-26b8-4611-85f1-933643995e79",
  "uuid": "e44f21af-a7c3-4c64-bf26-6c10edd4d0c3",
  "auction_end_time": "2021-03-19T04:54:36.000Z",
  "auction_hammer_price": 10000,
  "auction_now_price": 1000,
  "auction_link": "https://exitgift.shop/ongoing",
  "auction_start_time": "2021-03-19T04:54:36.000Z",
  "createdAt": "2021-03-19T04:54:36.000Z",
  "updatedAt": "2021-03-19T04:54:36.000Z"
}
```
