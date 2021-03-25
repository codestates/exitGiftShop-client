# 깃허브 사용 규칙

## 1. Branch Create/Merge rule

### 브랜치 종류

- `master` : 바로 시연을 할 수 있는, 버그가 없이 작동하는 최신 버전 코드입니다. 오직 `release` 브랜치에서 PR을 보낼 수 있습니다.
  - `dev` : 각 `feature_something_#123`브랜치를 통합하고 `master`브랜치에 올릴 수 있는 지 확인합니다
    - `feature_somting_#123` : 각 페이지에서 feature를 분리해서 개발을 하는 브랜치입니다.

> :warning: PUSH는 `feature_*_#issue_number` 브랜치로만 할 수 있습니다.
> 브랜치 이름은 `lower_snake_case`를 사용합니다. 
> 예) `feature_*_#issue_number`

> 왜? `origin 의 브랜치 명이 feature 라는 점을 리마인드/ 체크합니다`
> 기능개발 단계에서 `dev` 브랜치에 직접 push 하지 않도록 합니다

### PR 상세 규칙

- `feature_somting_#123 <- local`
  - local 레포지토리 `dev` 브랜치에서 `feature_somting_#123` 브랜치를 생성하여 작업합니다

- `dev <- feature_somting_#123`
  - `feature_somting_#123` 브랜치는 `task card` 를 마감할 때 PR을 보내고 삭제를 합니다.
  - team review / bug fix를 한 후 병합합니다.

- `master <- dev`
  - 시연을 할 수 있는, 버그가 없이 작동하는  최신 버전 어플리케이션을 배포하는 용도입니다. 버전번호를 태그합니다.

## 2. Commit Rule

- 커밋 메시지는 [Commit Conversion](https://github.com/codestates/exitGiftShop-client/wiki/Commit-Convention) 을 따릅니다

## 3. Merge Rule

- 기본적으로 각 pr 에 대해 팀 리뷰를 진행합니다
- Conflict 관련 수정은 팀장이 맡아서 진행한 이후 Merge 합니다
- 그 외에 다른 팀원이 작업한 코드가 필요해 요청 시 Merge 할 수 있습니다.
