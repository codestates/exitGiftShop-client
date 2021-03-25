## 테이블스키마 명세서입니다

### 스키마 기본 전략

- `1:1` 관계 : 기본적으로 비정규화
- `1:N` 관계 : `Foriegn Key` 정규화
- `N:N` 관계 : `linked_table` 정규화
- `N:N` 관계 : 필요한 추가 컬럼을 사용하였기에 `entity`로 승격하였습니다.
- `entity` 의 `record` 가 많지 않을 것이라고 예측되는 경우 비정규화 하였습니다

### 테이블 스키마


![scheme-table](https://user-images.githubusercontent.com/56165665/111881909-f9c8e580-896f-11eb-9f41-4f73b4770e68.png)

### 사전 (컬럼명을 통일하여 같은 의미의 다른 컬럼이 없도록 조치합니다)

![scheme-dic](https://user-images.githubusercontent.com/56165665/111881912-fb92a900-896f-11eb-9543-8155d5382b90.png)