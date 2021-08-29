# Commit Message Convention

## Introduction
github를 통해 협업을 진행하면서 원활한 소통을 위해 Commit Message를 작성하는 규칙을 정하였다. 우리 팀만의 독자적인 규칙을 정하는 방법도 있으나, 기존의 규칙을 우리의 상황에 맞게 수정하여 사용하는 방법을 택하였다. 우리 팀은 [Udacity Git Commit Message Style Guide](https://udacity.github.io/git-styleguide/)를 참고하여 약간의 수정을 통해 규칙을 정하였다.

## Message Structure
메시지의 전체적인 구조는 제목, 본문으로 나누고 각 파트는 한 칸 띄어 작성한다.   

```
type: Subject(#footer) -> 제목

body -> 본문
```

- type : 어떤 종류의 commit인지, 코드의 어떤 기능을 수정하였는지를 명시한다. 아래에 구체적인 type의 종류가 나와있으니 참고하여 작성한다.
- subject : 코드의 수정사항을 50글자가 넘어가지 않도록 간략하게 작성한다. 되도록 영문으로 작성하되, 한글로 작성하는 것도 허용한다. 영문으로 작성할 때는 명령문의 형태로 한다. 특수 문자는 사용하지 않는다. 첫 글자는 대문자로 작성한다.
- footer : 해당 commit이 포함되는 issue 티켓 번호를 작성한다. 본래 Udacity Convention에서는 body 이후에 footer를 작성하였으나, 가독성을 고려하여 변경하였다. 반드시 #과 함께 사용되어야 한다.(이슈와 연동되어야 하기 때문이다)
- body : commit의 추가적인 설명이다. subject에서 간략하게 적었던 내용을 길게 풀어서 작성한다. 이는 한글로 작성하는 것을 원칙으로 한다. subject로 충분한 의사소통이 가능하다 판단하면 생략할 수 있다. 한 줄 당 72자 내로 작성하며, 최대한 상세히 작성한다. 본문 내용은 어떻게 변경했는지 보다 무엇을 변경했는지 또는 왜 변경했는지를 설명한다.

__type__
- feat : 새로운 기능을 추가한 경우, 웹페이지에 새로운 내용 또는 구성을 추가할 경우
- fix : 버그를 고친 경우
- docs : 문서를 수정하거나 추가한 경우
- style : 코드 포맷 변경, 세미 콜론 누락 등 자잘한 코드 수정
- refactor : 새로운 기능이나 버그 수정없이 현재 구현을 개선한 경우
- test : 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경X)

## Caution
> 현재 진행중인 프로젝트는 오픈소스 소프트웨어를 활용하여 git을 활용하는 데 중점을 두고 있다. 따라서 실제로 어떠한 기능이 추가되거나 하는 경우는 거의 없다. 따라서 웹페이지에 나타날 텍스트를 변경하거나 내용을 추가하는 등의 commit이 주로 일어날텐데, 이러한 commit에 feat type을 사용하여 작성한다. 만약 화면 구성을 변경하는 등의 commit이 있을 경우에도 feat type을 사용한다.

> 제목에서 type과 : 사이에 빈칸을 두지 않는다. : 과 Subject 사이에만 빈칸을 둔다.

## Example
1. foundation part에 github-tutorial 내용을 추가한 경우   
```
feat: Add github-tutorial content(#3)

foundation.js 파일 생성 후 github-tutorial 추가
설명과 관련된 link 모두 삽입 완료
```
2. 코드의 모양이 맘에 들지 않아서 포맷을 변경한 경우
```
style: Change code format(#4)

코드의 들여쓰기가 각기 다른 방식으로 되어있어서 통일함.
``` 
3. 내용이 추가된 것은 없지만, 파일간 연결되도록 설정한 경우
```
refactor: fundamentalSCollection import change(#7)

fundamentalsCollection이 src/data/fundamentals.js를 import했는데
foundation.js를 새로 만들어서 src/data/foundation.js를 import하도록 변경함
```

> 이는 단지 예시일 뿐, subject와 body 부분은 자율적으로 작성한다.


# Issue Naming Convention

## Introduction
프로젝트를 진행할 때 어떠한 새로운 수정사항이 생기면 issue를 만들고 시작한다. 따라서 issue는 해당 수정사항을 나타내는 지표가 된다. 만약 fundamentals.js 라는 파일을 수정하고자 한다면, 이전에는 `[Javascript] fundamentals.js 수정` 과 같이 issue naming을 진행하였다. javascript 파일을 수정하기 때문에 [] 내에 Javascript를 작성한 것이다. 하지만 여기서 문제가 발생하였다.   

웹페이지의 fundamentals을 소개하는 부분을 github-tutoial을 소개하는 부분으로 수정하고 싶어서, 위에서와 같이 issue를 생성하였다고 가정하자. 실제로 프로젝트를 진행할 때에는 src/data 폴더에 github-tutoial.js라는 파일을 생성한 뒤, 해당 파일에 github-tutoial과 관련된 설명과 link를 첨부한다. 또한 관련된 icon을 변경하고 싶다면, assets라는 폴더에 github-tutoial 폴더를 생성한 뒤 icon 사진을 저장해야 한다. 또한 웹페이지에 수정한 내용을 실제로 반영하려면 src폴더에 data.js 파일에서 변경사항을 import 해주는 설정을 해야한다. issue 이름과는 달리 정작 실제 코드 수정에는 fundamentals.js 파일을 전혀 수정하지 않고 있다. 해당 오픈소스 소프트웨어의 특성상, 제목이 fundamentals이라면, 내용을 적을 javascript 파일도 fundamentals.js 라는 이름이어야 하고, 관련된 아이콘을 저장할 때에도 assets 폴더에 fundamentals이라는 폴더가 존재해야 하기 때문에 발생하는 문제이다. 따라서 우리 팀은 issue 이름을 convention으로 정해놓아야할 필요성을 느끼게 되었다. 이에 따라 혼동을 최대한으로 줄이기 위해서 Udacity convention을 활용하여 만든 commit message convention과 유사한 형태로 만들었다.

## Name Structure
이름의 구조는 commit message의 제목 부분과 유사하다. type이 [] 내에 위치해있고, 그 뒤로 subject를 작성한다.

```
[type] Subject
```

- type : 어떤 종류의 issue인지를 명시한다. commit message convention에서의 type 종류에서 issue 만의 특성을 고려하여 추가하거나 삭제하였다. 아래에 구체적인 type의 종류가 나와있으니 참고하여 작성한다. 이는 반드시 [] 내에 적도록 한다.
- Subject : 해당 issue에서 수정할 사항을 간략하게 명시한다. 글자수는 50글자가 넘어가지 않도록 하며, 한글 또는 영어로 작성한다. 영어로 작성할 경우에는 명령문의 형태로 하며, 첫 글자는 대문자로 한다.

__type__
- feat : 새로운 기능을 추가할 경우, 웹페이지에 새로운 내용을 추가할 경우
- composition : 웹페이지 화면의 구성을 변경할 경우(레이아웃, 배경 색 등)
- fix : 버그를 고치는 것이 목적인 경우
- docs : 문서화 진행중인 문서를 수정하거나 추가할 경우
- offer : 프로젝트 관련하여 어떠한 사항을 제안하고 싶을 경우
- refactor : 코드 포맷 변경, 세미 콜론 누락 등 자잘한 코드를 수정, 새로운 기능이나 버그 수정없이 현재 구현을 개선하고자 할 경우
- test : 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경X)을 할 목적인 경우

## Caution
> issue name에는 수정사항을 간략하게 적지만, 실제 issue 내용을 적는 부분(본문)에서는 구체적으로 작성한다. 예컨대 다음과 같은 내용이 들어가야 한다.
- 어떠한 이유로 해당 issue를 생성하였는지
- 해당 issue에서는 어떤 내용을 수정할 것인지

> issue naming에서의 type은 단순히 issue를 생성할 때 코드에서 수정하고자하는 부분의 목적을 명시하는 데 그 역할이 있다. 만약 feat type의 issue를 생성하였다면, 이 issue에 따르는 commit 가운데 feat type이 아닌 commit이 존재할 수 있다. 웹사이트에 새로운 내용을 추가하려고 feat type으로 issue를 생성한 뒤 코드를 수정하다가 오류가 발견되어 fix type의 commit을 해당 issue에 추가하여도 된다는 것이다. issue의 type과 commit의 type은 아무런 상관이 없다. 이를 헷갈리지 말아야 한다.

> commit과 달리 issue는 제안(offer)하는 경우가 있으므로, offer type을 추가하였고, 웹페이지에 내용을 추가하는 issue와 화면 구성을 변경하는 issue가 구분되어 있는 것을 고려하여, feat type 외에 composition type을 추가하였다.

> issue의 특성상 commit에서의 style이나 refactor과 같은 type은 잘 사용될 일이 없을 수도 있다. 하지만 만약을 대비하여 모든 경우에 type 종류를 정해놓기 위해 이 두가지를 합쳐 refactor type을 정해놓았다.

## Example
1. 웹페이지에서 Branches라는 부분에 내용을 추가하고자 하는 경우
```
[feat] branches part 내용 추가 -> 제목

목적 :   
Branches.js 파일을 생성하여 전반적인 branch에 대한 설명으로 내용을 수정한다.   
내용은 branch, switch, checkout, merge 등 기본적인 branch에 대한 명령어와 브랜치 이름 convention에 대한 소개, 브랜치 전략 등을 포함한다.  -> 본문
```

2. 여러가지 프로젝트의 convention을 문서로 정리하는 경우
```
[docs] convention 문서화 -> 제목

목적 :   
프로젝트를 진행하며 생기는 convention을 하나의 문서로 정리한다.   
commit message convention과 branch 이름 convention, branch 전략에 대한 내용을 .md 파일로 정리한다.   -> 본문
```