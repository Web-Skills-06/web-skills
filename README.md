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
* [➤ Accessibility](#-accessibility)
	* [The why](#the-why)
	* [Screen Readers](#screen-readers)
	* [Accessibility tree](#accessibility-tree)
		* [ARIA](#aria)
		* [Accessible HTML](#accessible-html)
			* [Alt text](#alt-text)
		* [Accessible CSS](#accessible-css)
	* [Accessible forms](#accessible-forms)
	* [UI States](#ui-states)
	* [Keyboard Accessibility](#keyboard-accessibility)
		* [Focus](#focus)
	* [Accessible Colors](#accessible-colors)
	* [Laws & Policies](#laws--policies)
		* [Audits](#audits)
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

만약 이 오픈소스에 기여하고 싶다면, [issues page](https://github.com/Web-Skills-06/web-skills/issues)로 가서 스펠링 수정, 이슈 수정, 새로운 기능 및 내용 제안 등 원하는 방식으로 참여할 수 있습니다. [CONTRIBUTING(korean)](https://github.com/Web-Skills-06/web-skills/blob/main/CONTRIBUTING(korean).md)으로 가면 이 오픈소스에 기여할 수 있는 정확한 방법이 나와있으니 참고해주세요.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#foundations)

## ➤ Foundations

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

## ➤ Accessibility

### The why

Learn what accessibility is and why it is important.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Accessibility Fundamentals](https://developers.google.com/web/fundamentals/accessibility/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> A11ycasts with Rob Dodson](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fudacity.github.io" alt="Logo" /> Udacity - Chromevox Lite](http://udacity.github.io/ud891/lesson3-semantics-built-in/02-chromevox-lite/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> Dev.to - Why Accessibility Matters](https://dev.to/lhoffmanwg1/why-accessibility-matters-39nl)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.abilitynet.org.uk" alt="Logo" /> Abilitynet - Why Accessibility Matters](https://www.abilitynet.org.uk/why-accessibility-matters)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.udacity.com" alt="Logo" /> Udacity - Web Accessibility](https://www.udacity.com/course/web-accessibility--ud891)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Youtube - Headings, Landmarks, and Tabs](https://www.youtube.com/watch?v=HE2R86EZPMA)

### Screen Readers

Learn about assistive technology such as screen readers that reads sections of the page aloud based on the current focus.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> The A11Y Project - Screen Reader Myths](https://a11yproject.com/posts/people-who-use-screen-readers-dont-use-javascript/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> The A11Y Project - NVDA Screen Reader](https://a11yproject.com/posts/getting-started-with-nvda/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> The A11Y Project - OS X Voiceover](https://a11yproject.com/posts/getting-started-with-voiceover/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Screen Reader Survey](https://webaim.org/projects/screenreadersurvey7/)

### Accessibility tree

Learn about the accessibility tree and how assistive technology uses it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - The Accessibility Tree](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree)

#### ARIA

Learn how to use ARIA descriptions an labels to help assistive technology understanding your website.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - ARIA Labels](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Hiding and updating content](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/hiding-and-updating-content)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> The A11Y Project - ARIA States](https://a11yproject.com/posts/ARIA-states/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> The A11Y Project - ARIA Properties](https://a11yproject.com/posts/ARIA-properties/)

#### Accessible HTML

Learn how to write HTML in such as way that assistive technology better understands it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Introduction to Semantics](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Accessibility HTML](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Skip navigation](https://webaim.org/techniques/skipnav/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> w3c - Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fguide.freecodecamp.org" alt="Logo" /> Freecodecamp - Semantic Elements](https://guide.freecodecamp.org/html/html5-semantic-elements/)

##### Alt text

Learn how to use the alt attribute to provide a useful text alternative to this image.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Text Alternatives for Images](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/text-alternatives-for-images)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Accessible Images](https://webaim.org/techniques/images/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Alternative text](https://webaim.org/techniques/alttext/)

#### Accessible CSS

Learn how to write CSS in such as way that assistive technology better understands it.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - CSS](https://webaim.org/techniques/css/)

### Accessible forms

Learn how to build accessible forms that makes it usable to as many people as possible.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Forms](https://webaim.org/techniques/forms/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fitnext.io" alt="Logo" /> Itnext - Form Accessibility Gudie](https://itnext.io/form-accessibility-a-practical-guide-4062b7e2dd14)

### UI States

Learn how to make the state of each UI element clear.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Accessible Styles](https://developers.google.com/web/fundamentals/accessibility/accessible-styles)

### Keyboard Accessibility

Learn how to make it easy for keyboard users to navigate your site.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Keyboard](https://webaim.org/techniques/keyboard/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.smashingmagazine.com" alt="Logo" /> Smashing Magazine - Web with just a keyboard](https://www.smashingmagazine.com/2018/07/web-with-just-a-keyboard/)

#### Focus

Learn how to create a sensible tab order and how to make it easy for the users to locate the currently focused element.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Control focus with tabindex](https://web.dev/control-focus-with-tabindex/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Focus](https://developers.google.com/web/fundamentals/accessibility/focus/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Dom Order Matters](https://developers.google.com/web/fundamentals/accessibility/focus/dom-order-matters)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Using Tabindex](https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Track Focus](https://developers.google.com/web/tools/chrome-devtools/accessibility/focus)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - :focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - :focus-within](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)

### Accessible Colors

Learn how to select colors in such a way that users, including those with visual disabilities, can perceive the content on the page.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Contrast and Color](https://webaim.org/articles/contrast/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> The A11Y Project - Check contrast](https://a11yproject.com/posts/check-contrast-with-mobile-device/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11yproject.com" alt="Logo" /> The A11Y Project - What is color contrast?](https://a11yproject.com/posts/what-is-color-contrast/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fstripe.com" alt="Logo" /> Designing accessible color systems](https://stripe.com/en-dk/blog/accessible-color-systems)

### Laws & Policies

Learn about the governmental policies related to web accessibility.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> W3C - Laws & Policies](https://www.w3.org/WAI/policies/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Laws around the world](https://webaim.org/articles/laws/world/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Section 508](https://webaim.org/standards/508/checklist)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - WCAG 2 Checklist](https://webaim.org/standards/wcag/checklist)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fa11y.dev" alt="Logo" /> A11Y.dev - Lawsuits](https://a11y.dev/470-digital-accessibility-cases-were-filed-in-q3-2018/)

#### Audits

Learn how to conduct an accessibility review to improve the overall experience of using your site. Remember, good accessibility equals good UX!

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Accessibility audits](https://web.dev/lighthouse-accessibility)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - How to review](https://developers.google.com/web/fundamentals/accessibility/how-to-review)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwebaim.org" alt="Logo" /> Webaim - Accessibility Tools](https://webaim.org/articles/tools/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Accessibility Reference](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=http%3A%2F%2Fwave.webaim.org" alt="Logo" /> Webaim - Wave](http://wave.webaim.org/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fchrome.google.com" alt="Logo" /> Google Chrome - NoCoffee Extension](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.digitala11y.com" alt="Logo" /> Digital A11Y - Accessibility Plugins](https://www.digitala11y.com/accessibility-plug-ins-ie-chrome-firefox-browsers/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Accessibility for teams](https://developers.google.com/web/fundamentals/accessibility/a11y-for-teams)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.wuhcag.com" alt="Logo" /> WCAG 2.0 checklists](https://www.wuhcag.com/wcag-checklist/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/)



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
	

| [<img alt="Andreas Mehlsen" src="https://avatars1.githubusercontent.com/u/6267397?s=460&v=4" width="100">](https://twitter.com/andreasmehlsen) | [<img alt="You?" src="https://joeschmoe.io/api/v1/random" width="100">](https://github.com/andreasbm/readme/blob/master/CONTRIBUTING.md) |
|:--------------------------------------------------:|:--------------------------------------------------:|
| [Andreas Mehlsen](https://twitter.com/andreasmehlsen) | [You?](https://github.com/andreasbm/readme/blob/master/CONTRIBUTING.md) |
| 🔥                                               |                                                  |


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).   
Used Icon source : [SVG Repo](https://www.svgrepo.com/).