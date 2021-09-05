<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><h1 align="center">Web Skills</h1>
<p align="center">
	이 Web Skills는 웹 개발자를 위한 로드맵을 제시한 <a href="https://github.com/andreasbm/web-skills" target="_blank" aria-label="Link to Web Skills">오픈소스</a>를 수정, 변경하여 개발자들이 협업하는 데 필수적인 Git에 대한 지식들을 개략적으로 담고있습니다. <a href="https://web-skills-06.github.io/web-skills/" target="_blank" aria-label="Link to Web Skills">https://web-skills-06.github.io/web-skills/</a> 해당 링크를 통해 Git 로드맵을 시각적으로 확인할 수 있고, 이 readme 파일의 스크롤을 내리면 로드맵의 <a href="#-foundation" target="_blank" aria-label="Link to list of skills">list</a>를 확인할 수 있습니다. 프로젝트가 마음에 든다면 언제든 <a href="https://github.com/Web-Skills-06/web-skills/stargazers" aria-label="Become stargazer link">stargazer</a>가 되어주세요🤩.
</p> 
<p align="center">
	<a href="http://andreasbm.github.io/web-skills" target="_blank">
		<img src="https://raw.githubusercontent.com/andreasbm/web-skills/master/demo.gif" alt="Web Skills Demo" width="800" />
	</a>
</p>
<br />
<details>
<summary>📖 Table of Contents</summary>
<br />

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ FAQ](#-faq)
	* [What is Web Skills?](#what-is-web-skills)
	* [How did you choose the skills?](#how-did-you-choose-the-skills)
	* [How can I get involved?](#how-can-i-get-involved)
* [➤ Foundation](#-foundation)
	* [Github Tutorial](#github-tutorial)
	* [Sign Up](#sign-up)
		* [Sign In](#sign-in)
	* [Git Install](#git-install)
	* [Git Config](#git-config)
	* [Create Repository](#create-repository)
		* [Initializing a repository](#initializing-a-repository)
	* [Platform](#platform)
	* [Git](#git)
		* [Github](#github)
		* [Gitlab](#gitlab)
		* [Bitbucket](#bitbucket)
* [➤ Git command](#-git-command)
	* [Prepare](#prepare)
	* [Posix](#posix)
	* [Vim](#vim)
	* [Git-cli](#git-cli)
	* [Git-cli-basic](#git-cli-basic)
		* [sourcetree](#sourcetree)
		* [Version](#version)
			* [Add](#add)
			* [Commit](#commit)
		* [Collaboration](#collaboration)
			* [Push](#push)
			* [Pull](#pull)
		* [Reset](#reset)
			* [Options](#options)
			* [Reset vs Revert](#reset-vs-revert)
		* [Repository](#repository)
	* [Pull request](#pull-request)
	* [Conflict](#conflict)
	* [Advanced](#advanced)
* [➤ Branches](#-branches)
	* [Concept](#concept)
	* [What is branch](#what-is-branch)
	* [Why use branch](#why-use-branch)
	* [Command](#command)
	* [Branch](#branch)
		* [Checkout](#checkout)
			* [Switch](#switch)
			* [Restore](#restore)
	* [Stash](#stash)
	* [Branch merger](#branch-merger)
		* [Merge](#merge)
		* [Rebase](#rebase)
			* [Rebase --onto](#rebase---onto)
			* [Rebase --interactive](#rebase---interactive)
		* [Cherry-pick](#cherry-pick)
	* [Strategy](#strategy)
	* [Git flow](#git-flow)
		* [Github flow](#github-flow)
			* [Gitlab flow](#gitlab-flow)
	* [Naming convention](#naming-convention)
	* [Branch protection](#branch-protection)
* [➤ Contributors](#-contributors)
* [➤ License](#-license)
</details>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#faq)

## ➤ FAQ

### What is Web Skills?

이 Web Skills는 개발자들이 협업을 할 때에 필수적인 Git을 개략적으로 소개하고 있습니다. Git은 컴퓨터 파일의 변경사항을 추적하여 commit을 통해 변경사항을 저장할 수 있는 버전관리 시스템입니다. 로컬 환경에서 뿐만 아니라 push를 통해 github, gitlab, bitbuket 등 웹페이지 상에 저장할 수 있어, 오프라인 환경에서도 사용할 수 있습니다. 또한 Git은 협업을 하는 데 유용하여 많은 회사들에서 사용되고 있습니다. branch를 통해 기술을 개발하고, 이후 병합하여 변경사항을 반영합니다. 이 때문에 메인이 되는 branch에 오류 등 잘못된 코드가 반영되는 것을 사전에 예방할 수 있습니다. 하지만 Git은 초보자가 배우기에 어렵고, 대학의 컴퓨터학과에서도 다루지 않는 경우가 많습니다. 따라서 Git을 처음 접하는 사람들이 보다 쉽게 배울 수 있도록 로드맵을 제작하였습니다.

### How did you choose the skills?

스킬들은 로드맵인 만큼 기초부터 심화까지 해당되는 내용을 담고 있습니다. Git에 대해 공부하고 활용하면서 로드맵에 들어갔으면 하는 내용을 팀원들과 상의를 통해 도출해냈습니다. 처음에는 Git을 설치하고 환경설정하는 법부터 시작하여, 가장 기본적인 Git 명령어 commit, push 등과 branch에 대한 개념, branch를 나누고 다시 병합하는 방법, 브랜치 전략과 main 브랜치를 보호하는 방법까지를 다루고 있습니다. 이 로드맵에 있는 내용은 Git을 처음 접했을 때 알아두면 좋을만한 기초적인 지식들입니다. 따라서 누락된 내용도 많을 것입니다. 만약 추가하고싶은 내용이 있다면 언제든 이 오픈소스에 기여해주세요.

### How can I get involved?

만약 이 오픈소스에 기여하고 싶다면, [issues page](https://github.com/Web-Skills-06/web-skills/issues)로 가서 스펠링 수정, 이슈 수정, 새로운 기능 및 내용 제안 등 원하는 방식으로 참여할 수 있습니다. 다음의 링크를 누르면 이 오픈소스에 기여할 수 있는 정확한 방법이 나와있으니 참고해주세요.   
- 영어 버전 : [CONTRIBUTING(english)](https://github.com/Web-Skills-06/web-skills/blob/main/CONTRIBUTING.md)
- 한글 버전 : [CONTRIBUTING(korean)](https://github.com/Web-Skills-06/web-skills/blob/main/CONTRIBUTING(korean).md)   

우리 팀은 여러분의 기여를 환영합니다😆

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#foundation)

## ➤ Foundation

### Github Tutorial

### Sign Up

github에 접속해 'sign up'버튼 클릭해 새로운 계정을 생성한다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Github](https://github.com)

#### Sign In

sign up을 완료한 후, 이메일 인증을 완료하면 로그인이 가능하다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Github](https://github.com)

### Git Install

github를 사용하기 위해서는 깃을 설치해야한다. 이미 설치했으면 최신 버전으로 업데이트하는 게 좋다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Git](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98)

### Git Config

git을 설치한 후에는 깃의 사용 환경을 적절하게 설정해 주어야 한다. 환경 설정은 한 컴퓨터에서 한 번만 하면 된다. 설정한 내용은 git을 업그레이드해도 유지된다. 'git config'라는 명령어를 사용한다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> Google Search - Git config](https://www.lainyzine.com/ko/article/how-to-set-git-repository-username-and-email)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Search - Git config](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%B5%9C%EC%B4%88-%EC%84%A4%EC%A0%95)

### Create Repository

git 설치와 git config가 끝났으면 repository생성을 하도록 하자. repository는 깃허브 사이트에 저장소를 만드는 것이고, 우리의 파일을 업로드 할 수 있다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Github](https://github.com)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Search - Create Repository](https://velog.io/@kho5420/Git-GitHub-%EB%A0%88%ED%8C%8C%EC%A7%80%ED%86%A0%EB%A6%ACRepository-%EC%83%9D%EC%84%B1%ED%95%98%EA%B3%A0-%EC%86%8C%EC%8A%A4-%EC%98%AC%EB%A6%AC%EA%B8%B0:)

#### Initializing a repository

repository를 생성한 후 git으로 프로젝트 관리를 시작할때는 다음 명령어를 입력한다. 'git init' 이 명령어를 실행하면 해당 프로젝트 폴더 내에 숨겨진 .git폴더를 생성하고 이제 git은 현재 repositoy에 대한 모든 변경사항들을 추적 및 관리하게 된다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Github](https://github.com)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsvgontheweb.com" alt="Logo" /> Google Search - Create Repository](https://velog.io/@kho5420/Git-GitHub-%EB%A0%88%ED%8C%8C%EC%A7%80%ED%86%A0%EB%A6%ACRepository-%EC%83%9D%EC%84%B1%ED%95%98%EA%B3%A0-%EC%86%8C%EC%8A%A4-%EC%98%AC%EB%A6%AC%EA%B8%B0:)


### Platform

### Git

git은 컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율하기 위한 분산 버전 관리 시스템이다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Git](https://git-scm.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> Wikipedia - Git](https://ko.wikipedia.org/wiki/%EA%B9%83_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4))

#### Github

github는 가장 큰 git 기반 버전 제어 플랫폼이다. 현재 3800 만 개 이상의 프로젝트를 호스팅하고 있으며 오픈 소스 커뮤니티에서 가장 일반적으로 사용된다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Github](https://github.com)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Wikipedia - Github](https://ko.wikipedia.org/wiki/%EA%B9%83%ED%97%88%EB%B8%8C)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> Youtube - Git & Github](https://www.youtube.com/watch?v=YFNQwo7iTNc)

#### Gitlab

gitlab은 git의 원격 저장소 기능과 이슈 트래커 기능등을 제공하는 소프트웨어다. 중앙 서버에서 git저장소를 관리하는 좋은 방법이며, repository 또는 project를 완벽하게 제어할 수 있다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Gitlab](https://about.gitlab.com/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Wikipedia - Gitlab](https://ko.wikipedia.org/wiki/%EA%B9%83%EB%9E%A9)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> Google Search - Github vs Gitlab](https://insight.infograb.net/blog/2021/02/05/gitlab-vs-github/)

#### Bitbucket

Bitbucket은 아틀라시안 소유의 웹 기반 버전 관리 저장소 호스팅 서비스로서, 깃 버전 관리 시스템을 사용하는 소스 코드 및 개발 프로젝트를 대상으로 한다. 빗버킷은 상용 플랜과 무료 계정을 동시에 제공한다. 빗버킷은 지라, 힙챗, 컨플루언스, 밤부 등의 기타 아틀라시안 소프트웨어와 연동된다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Bitbucket](https://bitbucket.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> Wikipedia - Bitbucket](https://ko.wikipedia.org/wiki/%EB%B9%97%EB%B2%84%ED%82%B7)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fbitsofco.de" alt="Logo" /> Google Search - Github, Gitlab, Bitbucket](https://dora-guide.com/gitlab-vs-github/)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#accessibility)

## ➤ Git command

### Prepare

### Posix

POSIX는 서로 다른 운영체제를 같은 방법으로 조작할 수 있도록 만들어진 표준입니다. 이 표준을 준수하는 운영체제로는 unix, macos가 있습니다. linux는 posix를 100% 따르고 있지는 않지만 거의 호환된다고 보시면 됩니다. 윈도우나 모바일 운영체제는 posix를 따르고 있지 않습니다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Opentutorials - POSIX CLI1](https://opentutorials.org/module/3747)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> 당근마켓 Daegwon Nacyot Kim 님 - 커맨드라인 사용법](https://www.44bits.io/ko/post/linux-and-mac-command-line-survival-guide-for-beginner)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fudacity.github.io" alt="Logo" /> 개발자 Violet-Bora-Lee님 - 리눅스 서바이벌](https://github.com/Violet-Bora-Lee/linux-survival-for-korean)

### Vim

Vim은 Bram Moolenaar가 만든 vi 호환 텍스트 편집기입니다. Vim은 마우스나 화살표를 사용하지 않고 키보드 타자만으로 모든 문서를 편집할 수 있습니다. 입문자가 쓰기에 알아야 할 명령어들이 있어 읽으면 좋은 강의들을 소개합니다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> Wikipidia - Vim](https://ko.wikipedia.org/wiki/Vim)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> Youtube - Vi 시작하기](https://www.youtube.com/watch?v=GWo_MxMlJJ4&t=928s)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> Tistory - vim swap 문제 해결](https://jhnyang.tistory.com/141)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Facebook - vim 페이스북 그룹](https://www.facebook.com/groups/vim.ko)

### Git-cli

### Git-cli-basic

지옥에서 온 문서 관리자. git을 처음 만든 리누스 토르발스가 남긴 말입니다. 파일이 수없이 변경되는 지옥에서 git은 버전 관리를 하는데 유용한 기술입니다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Opentutorials - Git1](https://opentutorials.org/course/3837)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Pro Git - 공식 문서](https://git-scm.com/book/ko/v2)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> MDN - Git and GitHub](https://developer.mozilla.org/ko/docs/Learn/Tools_and_testing/GitHub)

#### sourcetree

git을 다룰 때 좀 더 시각적으로 편리하게 사용할 수 있도록 도와주는 여러 툴이 존재합니다. Sourcetree 같은 도구는 우리가 시간에 따라 작업이 어떻게 이루어지는지 보는데 많은 도움을 주어요. 아래 링크를 통해 git을 좀 더 편리하게 사용할 수 있는 툴들을 알아보세요.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Opentutorials - Sourcetree](https://opentutorials.org/module/3746)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Sourcetree - 공식 사이트](https://www.sourcetreeapp.com/)

#### Version

Git을 통해서 프로젝트의 버전 관리를 할 수 있습니다. 아래의 링크는 버전 관리를 실습하는데 이용할 수 있는 강의와 사이트입니다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Opentutorials - Version management](https://opentutorials.org/course/3839)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Learning Git Branching](https://learngitbranching.js.org/?locale=ko)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Git tutorials](https://violet-bora-lee.github.io/git-tutorial/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> Git 학습에 도움이 되는 실습 사이트](https://git-school.github.io/visualizing-git/)

##### Add

commit을 하기 위해서는 이전에 수정한 파일을 Staging area로 넘기는 작업이 필요합니다. git add 명령어를 사용하면 이제까지 수정한 파일을 일부 혹은 전부 Staging area로 넘길 수 있습니다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Opentutorials - Make a version](https://opentutorials.org/course/3839/22592)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Git 공식 문서 - 수정하고 저장소에 저장하기](https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EC%88%98%EC%A0%95%ED%95%98%EA%B3%A0-%EC%A0%80%EC%9E%A5%EC%86%8C%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0)

##### Commit

commit은 git 버전 관리의 최소 단위입니다. add를 통해 staging area로 파일을 옮기고 commit으로 파일을 Repository로 옮깁니다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Opentutorials - Make a version](https://opentutorials.org/course/3839/22592)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Github - 좋은 커밋 메시지란?](https://github.com/javascript-tutorial/ko.javascript.info/pull/460)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Udacity git commit message style guide](https://udacity.github.io/git-styleguide/)

#### Collaboration

git은 프로젝트의 버전 관리를 돕기도 하지만 협업에도 중요하게 쓰이는 도구입니다. 이때 협업을 하기 위한 방법이 두 가지 있는데요. 하나는 직접 서버로 돌릴 컴퓨터에 작업한 내용을 옮겨넣는 방법입니다. 하지만 개인이 이 방법을 쓰기엔 현실적으로 어렵습니다. 다른 한 방법이 Github, Gitlab과 같은 원격 저장소를 이용하는 방법입니다. 아래의 링크를 통해 협업하는 방법을 알아보세요.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Opentutorials - 협업](https://opentutorials.org/course/3842)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Velog - Git 협업 가이드](https://velog.io/@jinuku/Git-%ED%98%91%EC%97%85-%EA%B0%80%EC%9D%B4%EB%93%9C)

##### Push

로컬에서 작업을 한 뒤에 원격 저장소로 파일을 올리려면 push를 해야합니다. 아래의 링크를 통해 push를 하면 어떤 일이 일어나는지 한번 알아보세요.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Opentutorial - git push](https://opentutorials.org/course/3841/22828)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Daleseo - git push 사용법 / 팁](https://www.daleseo.com/git-push/)

##### Pull

동시에 협업을 하다 보면 다른 사람이 작업한 파일을 내 컴퓨터로 가져와야 합니다. 이 때 pull 명령어를 이용하면 원격 저장소에서 로컬로 다른 사람이 수정한 작업을 내려받을 수 있습니다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Opentutorials - git pull](https://opentutorials.org/course/3841/22834)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Opentutorials - git pull vs fetch](https://opentutorials.org/course/3842/23969)

#### Reset

Reset은 최근 작업한 버전을 취소하고 지정한 버전으로 되돌리는 효과를 냅니다. 하지만 엄밀한 정의는 조금 다릅니다. git에서 버전을 삭제하는 일은 웬만하면 드뭅니다. reset의 정확한 기능을 알면 그것을 더 알맞게 활용할 수 있게 될 것입니다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Opentutorials - Reset vs Checkout](https://opentutorials.org/module/4032/24532)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fitnext.io" alt="Logo" /> Opentutorials - Head의 이해](https://opentutorials.org/module/4032/24531)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fitnext.io" alt="Logo" /> Git 튜토리얼](https://violet-bora-lee.github.io/git-tutorial/#reset)

##### Options

reset은 최근 작업한 버전을 삭제하고 과거로 되돌리는 기능이 아닙니다. 그와 비슷한 효과를 내지만 더 정확하게는 Head가 가리키는 Branch가 가리키는 버전을 지정해서 바꾸는 것입니다. 아래의 강좌는 reset의 옵션입니다. 옵션에 따라서 Repository, Staging area, Working directory에서 어떤 변화가 일어나는지 알아보세요.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Opentutorials - --hard vs --soft vs --mixed](https://opentutorials.org/module/4032/24533)

##### Reset vs Revert

Reset과 Revert는 프로젝트에서 버전을 지정한 시점으로 되돌리는 기능입니다. 하지만 둘은 기능이나 쓰임새가 다릅니다. 또한, reset은 단순히 버전을 삭제하는 것을 넘어서 프로젝트에 유용하게 쓰일 수 있습니다. 아래 링크의 강좌를 통해 두 명령어를 잘 익히시기 바랍니다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Opentutorials - Reset vs Revert](https://opentutorials.org/module/4032/24532)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Opentutorials - Git reset](https://opentutorials.org/course/3839/22596)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Opentutorials - Git revert](https://opentutorials.org/course/3839/22597)

#### Repository

git은 Working directory, Staging area, Repository 이렇게 3개의 구조로 이루어져 있습니다. 이 구조를 머릿속에 그려보면서 git이 어떻게 동작하는지 알아봅시다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Git 공식 문서 - 깃의 기초](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EA%B8%B0%EC%B4%88)

### Pull request

Pull request는 협업 시 Git에 권한이 없는 타인이 수정사항을 제안하고 그걸 받아들여 내 프로젝트에 병합시킬 때 사용하는 기능입니다. 또한, fork라는 기능을 사용해 다른 사람의 작업물을 가져와서 pull request를 할 수도 있지요. 아래 링크에서 Pull request에 대한 구체적인 사용법을 알아보세요!

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Opentutorials - Pull request](https://opentutorials.org/course/4587)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.smashingmagazine.com" alt="Logo" /> Velog - Git fork](https://velog.io/@ifyouseeksoomi/Git-git-fork)

### Conflict

협업을 할 때 동시에 같은 파일을 동시에 작업해서 merge를 할 때 충돌이 발생하기도 합니다. 충돌은 시스템의 실패라기보단 git이 자동화를 결함없이 수행할 수 있도록 우리에게 주는 메시지라고 보시면 됩니다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> Opentutorials - Conflict](https://opentutorials.org/course/3840/23682)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Opentutorials - 3 way merge](https://opentutorials.org/course/3840/23684)

### Advanced

git을 사용하면서 예상치 못한 bug가 발생했을 때, commit을 reset시켜서 log를 볼 수 없을 때와 같이 예외적인 상황이 항상 발생합니다. 아래의 링크를 통해 심화적인 방법을 익혀봄으로써 다양한 상황에 대처할 수 있는 능력을 길러보세요.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Tistory - git bisect](https://simsi6.tistory.com/97)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> Codelab - git reflog](https://suwoni-codelab.com/git/2018/04/07/Git-reflog/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> Opentutorials - 강의 2번 reflog 기능 설명](https://opentutorials.org/module/4032/24533)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#branches)

## ➤ Branches

### Concept

### What is branch

Branch는 가지라는 뜻으로, commit들이 나뭇가지처럼 뻗어나간다는 의미이다. 나뭇가지처럼 뻗어나간 branch 사이를 전환해가면서, commit 사이를 가볍게 이동할 수 있는 어떠한 포인터 기능을 한다. 기본적으로 git은 master 브랜치를 만든다. 최근에는 main으로 이름이 바뀌었다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Wikipedia - Branch](https://ko.wikipedia.org/wiki/%EA%B0%80%EC%A7%80_(%EC%8B%9D%EB%AC%BC%ED%95%99))
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Git 공식문서 - What is Branch](https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> 생활코딩 - Branch의 원리(심화)](https://opentutorials.org/course/2708/15303)

### Why use branch

Branch는 실제 배포에 사용되는 master 브랜치와 분리하여 또 다른 개발 라인을 만들 수 있다는 점에서 중요하다. 만약 새롭게 만든 브랜치에서 오류가 발생하더라도 실제 master 브랜치는 병합하기 전에는 전혀 영향을 받지 않는다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Why branches are important in Git](https://www.toolsqa.com/git/branch-in-git/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info" alt="Logo" /> 유튜브 - 협업에서 왜 브랜치를 나눠서 사용해야 하는가](https://www.youtube.com/watch?v=uoHxdOmGJDk)


### Command

### Branch

Git branch는 브랜치를 생성하는 명령어이다. git branch [브랜치 이름]을 통해 생성할 수 있으며, git branch를 통해 브랜치 목록을 확인할 수 있다. 브랜치는 새로운 기능이나 작업을 시작할 때 분기하여 사용한다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Tistory - Branch 생성 및 사용](https://goddaehee.tistory.com/274)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Tistory - 브랜치 생성 및 목록 확인](https://ifuwanna.tistory.com/283)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> 생활코딩 - Branch 만들기](https://opentutorials.org/course/2708/15260)

#### Checkout

Git checkout은 브랜치를 전환하거나, 이전 commit으로 이동함으로써 작업중인 파일을 복구하는 기능을 모두 가지고 있다. -b 옵션을 주면 브랜치를 생성함과 동시에 이동할 수 있기도 하다. 이 때문에 혼란이 계속되어 git은 checkout 기능을 Switch와 Restore로 각각 분리하여 명령어를 2개 생성하였다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> Git 공식문서 - Git checkout](https://git-scm.com/docs/git-checkout)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> Bitbucket 공식문서 - Git checkout](https://www.atlassian.com/git/tutorials/using-branches/git-checkout)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> 코드잇 - Git checkout과 Git reset의 차이점](https://blog.naver.com/codeitofficial/222011693376)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmeowni.ca" alt="Logo" /> 수정사항을 되돌리는 checkout, reset, revert의 차이점](https://postlude.github.io/2019/03/21/git-checkout-reset-revert/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Checkout 기능 분리(Switch, Restore)](http://honeymon.io/tech/2019/08/30/git-2.23-release.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.chromestatus.com" alt="Logo" /> 생활코딩 - reset과 checkout의 원리(심화)](https://opentutorials.org/course/2708/15304)

##### Switch

Git switch는 Git 2.23에서부터 브랜치 사이를 이동할 수 있는 명령어로 도입되었다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Falligator.io" alt="Logo" /> Git 공식문서 - Git switch](https://git-scm.com/docs/git-switch)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info" alt="Logo" /> devconnected - How to Switch Branch on Git](https://devconnected.com/how-to-switch-branch-on-git/)

##### Restore

Git restore는 Git 2.23에서부터 수정사항을 복구할 수 있는 명령어로 도입되었다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Bskyvision - Git restore 사용법](https://bskyvision.com/1146)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.webcomponents.org" alt="Logo" /> Git 공식문서 - Git restore](https://git-scm.com/docs/git-restore)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> Restore, Clean을 이용하여 로컬 변화 취소하기(feat. reset)](https://velog.io/@younoah/git-restore-clean-%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%A1%9C%EC%BB%AC-%EB%B3%80%ED%99%94-%EC%B7%A8%EC%86%8C%ED%95%98%EA%B8%B0-feat.-reset)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> Runebook.dev - Git restore](https://runebook.dev/ko/docs/git/git-restore)

### Stash

아직 현재 브랜치에서 작업이 끝나지 않은 경우는 다른 브랜치로 switch 할 수 없다. 그렇다고 아직 작업이 끝나지 않은 것을 commit할 수도 없는데, 이럴 때 사용하는 것이 stash이다. 수정사항을 임시 저장한 뒤 나중에 복원할 수 있는 명령어라고 이해하면 된다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> 생활코딩 - stash](https://opentutorials.org/course/2708/15332)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwicg.github.io" alt="Logo" /> Git stash 명령어 사용하기](https://gmlwjd9405.github.io/2018/05/18/git-stash.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> Git 공식문서 - Stashing과 Cleaning](https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-Stashing%EA%B3%BC-Cleaning)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Bitbuket 공식문서 - Git stash](https://www.atlassian.com/git/tutorials/saving-changes/git-stash)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> Git stash 사용법: 커밋하지 않고 변경사항 저장하는 방법](https://www.lainyzine.com/ko/article/git-stash-usage-saving-changes-without-commit/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.chromestatus.com" alt="Logo" /> Git stash로 자유롭게 branch 이동하기(feat. commit)](https://velog.io/@anrun/git-stash)

### Branch merger

브랜치를 병합하는 방법에는 Merge와 Rebase가 있다. 브랜치는 분기하여 사용하다가 모든 작업을 마치게 되면 master 브랜치 등으로 다시 병합되어야 한다. 병합되지 않으면 수정사항이 반영되지 않기 때문이다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Tistory - Merge와 Rebase의 차이점](https://unordinarydays.tistory.com/161)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.chromestatus.com" alt="Logo" /> Merge vs Rebase](https://brunch.co.kr/@anonymdevoo/7)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> 생활코딩 - Branch 병합 시 충돌해결](https://opentutorials.org/course/2708/15275)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> 생활코딩 - merge & conflict의 원리(심화)](https://opentutorials.org/course/2708/15306)

#### Merge

Merge 방식으로 병합할 때는 merge commit이 새롭게 생긴다. 병합된 브랜치가 남아있으면서 하나의 브랜치로 합쳐진다고 이해하면 된다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> 생활코딩 - Branch 병합](https://opentutorials.org/course/2708/15262)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Git 공식문서 - 브랜치와 Merge의 기초](https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%B8%8C%EB%9E%9C%EC%B9%98%EC%99%80-Merge-%EC%9D%98-%EA%B8%B0%EC%B4%88)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Bitbucket - Git merge](https://www.atlassian.com/git/tutorials/using-branches/git-merge)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Tistory - 브랜치 병합하기(git branch merge)](https://goddaehee.tistory.com/275)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Tistory - 브랜치 병합하기 + 충돌 제거하기](https://jeong-pro.tistory.com/106)

#### Rebase

Rebase 방식으로 병합될 때에는 새로운 commit이 생성되지 않으며, 병합된 브랜치가 사라진다. 병합된 브랜치의 모든 커밋이 새로운 브랜치로 그대로 옮겨온다고 이해하면 된다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Git 공식문서 - Rebase 하기](https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase-%ED%95%98%EA%B8%B0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Bitbucket - Git rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> FlyingSquirrel - git rebase 하는 방법](https://flyingsquirrel.medium.com/git-rebase-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-ce6816fa859d)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> 왜 Git rebase를 알아야 하는가?](https://suhwan.dev/2018/01/21/Git-Rebase-1/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Git rebase를 이해하기](https://junwoo45.github.io/2019-10-23-rebase/)

##### Rebase --onto

Onto는 브랜치가 아니라 임의의 커밋과 커밋 사이의 rebase를 가능하게 하는 옵션이다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Git rebase - 커밋 이곳저곳으로 옮기기](https://suhwan.dev/2018/01/27/Git-Rebase-2/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Tistory - git rebase 명령어 중 유용한 옵션 --onto](https://foris.tistory.com/135)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Git rebase --onto 실제 사례 적용](https://smjeon.dev/git/git-rebase/)

##### Rebase --interactive

Interactive는 대화형으로 명령어를 실행하여 과거의 commit 이력을 수정할 수 있는 옵션이다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> 대화형으로 Git commit history를 수정할 수 있는 interactive 옵션](https://wormwlrm.github.io/2020/09/03/Git-rebase-with-interactive-option.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Tistory - interactive 옵션으로 불필요한 커밋 이력 제거](https://victorydntmd.tistory.com/279)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Git rebase -i 사용하여 명령어 대화형으로 실행](https://jupiny.com/2018/05/07/git-rebase-i-option/)

#### Cherry-pick

Cherry-pick는 병합을 진행할 때, 병합될 브랜치에서 모든 커밋이 아니라 내가 원하는 커밋만 가져올 수 있는 명령어이다. 충돌이 발생하거나, 의도치 않은 수정사항이 생겼을 때 사용하면 유용하다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> git cherry-pick 사용법](https://cselabnotes.com/kr/2021/03/31/56/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> 협업하며 생기는 문제를 cherry-pick으로 해결하기](https://medium.com/react-native-seoul/git-cherry-pick-%EC%82%AC%EC%9A%A9%EB%B2%95-fe1a3346bd27)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Git 공식문서 - Git cherry-pick](https://git-scm.com/docs/git-cherry-pick)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Bitbuket 공식문서 - Git cherry-pick](https://www.atlassian.com/git/tutorials/cherry-pick)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> cherry-pick으로 원하는 commit 가져오기](https://itzjamie96.github.io/2020/12/10/git-cherry-pick-basics/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Tistory - cherry-pick 필요 상황 및 사용법](https://zakelstorm.tistory.com/29)

### Strategy

### Git flow

브랜치 전략 중 하나로 거의 표준과 같이 사용되는 방법론이다. 총 5가지의 브랜치 종류를 사용하여 운영된다. master와 develop가 메인 브랜치이며, feature, release, hotfix는 필요에 따라 운영되는 브랜치이다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> 우아한 형제들 - 우리는 Git-flow를 사용하고 있어요](https://techblog.woowahan.com/2553/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Tistory - Git Flow 개념 이해하기](https://uxgjs.tistory.com/183)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Tistory - 나의 Git Flow 적응기](https://jeong-pro.tistory.com/196)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Tistory - git-flow 소개, 설치 및 사용법](https://hbase.tistory.com/60)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Tistory - 협업을 위한 Git Flow 설정하기](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-Git-Flow-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Git Flow와 자주 사용되는 Git 명령어들](https://www.holaxprogramming.com/2018/11/01/git-commands/)

#### Github flow

GitHub flow는 Git Flow를 GitHub에서 사용하기 편하게 변형시킨 방법론이다. 또한 자동화의 개념이 들어가 있어, 더 간편한 모델이다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> 간단하고 민첩한 Github-flow](https://hyeon9mak.github.io/git-branch-strategy/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> GitHub Guides - Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> GitHub Docs - GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Tistory - Git flow와 GitHub flow의 이해](https://codingtrainee.tistory.com/156)

##### Gitlab flow

Github Flow에서는 브랜치를 너무 편리하게 구성하다보니, 배포, 환경 구성, 릴리즈, 통합에 대한 이슈를 남겨둔 것이 많았다. 따라서 이를 보안하기 위해 GitLab에서 관련 내용을 추가적으로 덧붙여 구성한 방법론이 GitLab Flow이다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Gitlab Docs - Introduction to GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Git flow가 가진 문제점과 솔류션 - GitLab flow](https://insight.infograb.net/blog/2020/09/22/git-flow-problem-and-solution/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Git flow, GitHub flow, GitLab flow 차이](https://ujuc.github.io/2015/12/16/git-flow-github-flow-gitlab-flow/)

### Naming convention

새로운 작업을 시작할 때는 항상 브랜치를 분기하고 시작하는 경우가 많다. 따라서 브랜치를 만드는 일이 비일비재하게 이루어지는데, 이름을 짓는 규칙이 없다면 혼란을 가져올 수 있다. 따라서 브랜치 이름을 정하는 규칙이 몇가지가 있다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Git branch & Naming](https://velog.io/@kim-jaemin420/Git-branch-naming)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Coding Sight - Git Branching Naming Convention: Best Practices](https://codingsight.com/git-branching-naming-convention-best-practices/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Tistory - Github 기반 브랜치 명명 규칙](https://rumblefish.tistory.com/65)

### Branch protection

Master 브랜치는 실제로 배포가 이루어지며, 실제 사용자들이 사용하는 프로그램의 코드들이 저장되어 있다. 따라서 Master 브랜치에는 오류코드나 실수한 부분이 반영되면 안 된다. 따라서 많은 회사들은 Master 브랜치를 protection 전략으로 보호한다.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Tistory - Git Branch Protection Rule](https://2ndprince.tistory.com/49)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Spectral - How to set up Git branch protection rules](https://spectralops.io/blog/how-to-set-up-git-branch-protection-rules/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Github Docs - Managing a Branch Protection Rule](https://docs.github.com/en/github/administering-a-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributors)

## ➤ Contributors
	

| [<img alt="Andreas Mehlsen" src="https://avatars1.githubusercontent.com/u/6267397?s=460&v=4" width="100">](https://twitter.com/andreasmehlsen) | [<img alt="The-groot" src="https://avatars.githubusercontent.com/u/46774346?v=4" width="100">](https://github.com/the-groot) | [<img alt="Kimgeek" src="https://avatars.githubusercontent.com/u/67546862?v=4" width="100">](https://github.com/Kimgeek) | [<img alt="Ohjiwoo-lab" src="https://avatars.githubusercontent.com/u/74577768?v=4" width="100">](https://github.com/Ohjiwoo-lab) | [<img alt="You?" src="https://joeschmoe.io/api/v1/random" width="100">](https://github.com/Web-Skills-06/web-skills/blob/main/CONTRIBUTING(korean).md) |
|:--------------------------------------------------:|:--------------------------------------------------:|:--------------------------------------------------:|:--------------------------------------------------:|:--------------------------------------------------:|
| [Andreas Mehlsen](https://twitter.com/andreasmehlsen) | [The-groot](https://github.com/the-groot) | [Kimgeek](https://github.com/Kimgeek) | [Ohjiwoo-lab](https://github.com/Ohjiwoo-lab) | [You?](https://github.com/Web-Skills-06/web-skills/blob/main/CONTRIBUTING(korean).md) |
| 🔥                                               |                                                  |                                                  |                                                  |                                                  |


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).   
Used Icon source : [SVG Repo](https://www.svgrepo.com/).