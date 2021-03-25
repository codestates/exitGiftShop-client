# 4조가 함께하는 방법

## 1. project task card rules

- [frontend kanban](https://github.com/codestates/exitGiftShop-client/projects/1)
- [backend kanban](https://github.com/codestates/exitGiftShop-server/projects/1)

### taskcard template
```md
 🍉 task sample

- [x] checklist1
- [x] checklist1
- [ ] checklist3
- [ ] checklist4
```
- `list up` 을 참고하여 `milestone` 을 생성합니다
  - `to do section` checklist를 작성하여 `issue convert`를 통해 이슈번호를 생성합니다
  - `assign`, `label`을 사용하여 이슈를 분류합니다
  - `doing section`으로 카드를 배치하여 본인의 작업중인 이슈를 공유합니다
  - 완료된 경우 `review section`으로 카드를 배치하고 `linked pr`을 필요에 따라 추가합니다
  - 리뷰를 완료하였거나 필요없는 경우 `done section`으로 카드를 배치하고 `issue close` 합니다
  - 보류 혹은 진행이 어려운 상황에는 `pending section`으로 카드를 배치합니다

## 2. meeting

- stand up meeting 10:00AM
  - 코딩을 시작하기 전 하루의 목표와 서로의 컨디션을 점검합니다.
- stand down meeting 10:00PM
  - 목표의 달성여부, 이슈를 쉐어링 하고, 소감을 공유합니다.

## 3. 명세서

- API 명세서는 `REST API`를 기반으로 합니다.
- API 명세는 서버 `docs` location 에 작성합니다.

> 예) `localhost:4000/docs`

## 4. cooperation

- stand up meeting 이후 팀장은 `slack`을 통해 진행상황을 보고합니다

```md
`4. exitGiftShop - exitGiftShop`
- 진행 Sprint 진행 상황
  :
- 진행 Sprint 혹은 SR 완료 태스크 (리스트 업)
  :
- 도움이 필요한 사항 ( 원칙은 헬프 데스크를 이용해 주시기 바랍니다 )
  : 
- 특이사항
  : 
```

- 프로젝트에 해당하는 이슈는 팀장이 항상 주시해야 합니다.
- 팀원님들께서는 항상 `task card`를 통해 이슈를 공유하여 다른 팀원분들과 협업하여야 합니다.
