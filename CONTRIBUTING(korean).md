## 어떻게 기여하나요?

> 저희 팀이 기여한 방식

1. 프로젝트를 깃허브에 fork한다.
2. fork를 local machine에 clone한다.
3. main 브랜치와 develop 브랜치를 생성한다.
4. 이슈를 만든다.(CONVENTION.md 참고)
5. 이슈를 바탕으로 develop 브랜치에서 새로운 브랜치를 만든다.
6. 변경하고 싶은 부분을 변경한다.
7. commit을 작성한다.
8. 당신의 branch를 fork한 곳에 push한다.
9. 변경할 부분을 다 변경했으면 당신이 생성한 새로운 branch를 develop -> main 순서로 merge한다.


```
자세한 방법은 밑에 
```  


저희 팀이 기여한 방식을 그대로 따라도 되고, 이 외에도 다양한 기여방식이 존재합니다.



> 다른 기여 방법

* 오타 수정
* 테스트 추가
* 주석 달기
* 잘못된 이슈 이름 고치기 및 새로운 기능 제안     




## 자세한 방법
- 파일 생성 
`src/data` 폴더에 파일을 생성하고, 원하는 내용을 입력할 수 있다.
주로 name, text, description, link, area 등의 태그를 사용할 수 있다.
따라서 내용을 변경하거나 추가하고 싶으면 src/data로 가면 된다.

- 아이콘 생성
`assets` 폴더에 `.svg`파일을 넣으면 자동으로 인식한다.

- 연동
`src/data.js`의 상단에 원하는 파일을 import한 후, collections에 export한다.



여기서 규칙은
```
A. 폴더명은 'assets/collection_name/area_name/skill_name'으로 작성해야한다.
B. 파일명은 'name.svg'로 작성해야한다.
C. 아이콘 파일은 assets안에 적절한 위치에 존재해야한다.
D. 폴더와 파일 이름의 띄어쓰기는 - &는 and로 표헌한다.
```

A. collection_name은 `src/data`에 생성한 파일명이고,
area_name은 `src/data`에 생성한 파일의 코드에 자신이 적은 area의 name이고,
skill_name은 area_name과 동일하게 파일의 코드에 자신이 적은 skill의 name이다.  


B.'name.svg'의 name은 `src/data`에 생성한 파일 내부의 코드에 자신이 적은 name이다.  
이것과 일치해야 아이콘이 연동될 수 있다.


C. 아이콘 파일은 'assets/collection_name/area_name/skill_name'폴더에 적절히 위치해야한다.  
적절한 위치에 존재하면 아이콘이 연동될 수 있다.


D. `src/data`파일 내부의 코드는 띄어쓰기, &로 표현했다면, 폴더나 파일명의 띄어쓰기는 -, &는 and로 표현한다.      



이 외에도 기여할 수 있는 방법이 있으면 저희에게 알려주시면 감사하겠습니다!