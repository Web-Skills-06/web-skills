<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><h1 align="center">Web Skills</h1>
<p align="center">
	Web Skills is a visual overview of useful skills to learn as a web developer. Go to <a href="https://andreasbm.github.io/web-skills" target="_blank" aria-label="Link to Web Skills">https://andreasbm.github.io/web-skills</a> to check out the visual overview or scroll through this readme to get the overview <a href="#-fundamentals" target="_blank" aria-label="Link to list of skills">as a list</a>. If you like the project you are very welcome to <a href="https://github.com/andreasbm/web-skills/stargazers" aria-label="Become stargazer link">become a stargazer 🤩</a>
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
	* [How can I support you?](#how-can-i-support-you)
	* [How can I get involved?](#how-can-i-get-involved)
	* [How can I keep track of what skills I know?](#how-can-i-keep-track-of-what-skills-i-know)
	* [I am overwhelmed! Help me!](#i-am-overwhelmed-help-me)
	* [Why haven't you included XYZ Technology?](#why-havent-you-included-xyz-technology)
	* [What does the "experimental" banner mean?](#what-does-the-experimental-banner-mean)
	* [How can I get in contact with you?](#how-can-i-get-in-contact-with-you)
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

Web Skills is a visual overview of useful skills to learn as a web developer. It is useful for people who just started learning about web development and for people who have been in the field for years and want to learn new things. As a beginner, I would encourage you not to see this website as the definitive list of what you need to know but as an example of what you can learn and where you can start. The skills are arranged in chronological order based on what learning path I recommend you to take but feel free to jump around freely.

### How did you choose the skills?
		
The skills are derived from a combination of 10 years of experience, a bachelor in software engineering and what I personally find to be the most useful to know on a day-to-day basis. Therefore, you'll notice that it's missing a lot of things. For example, I am not a PHP developer - because of this, PHP is not included. If you were a PHP developer, this overview would probably look a lot different.

### How can I support you?

I am spending my spare time building Web Skills for free because I want to help people get into web development. My motivation comes from people finding Web Skills useful, so if you like the project feel free to support me in any way you like! For example, you are more than welcome to become a [stargazer](https://github.com/andreasbm/web-skills/stargazers), share Web Skills with your friends and followers or create blog articles linking to Web Skills. If you want to, it will absolutely make my day if you [support me with a cup of coffee](https://www.buymeacoffee.com/AndreasMehlsen)! <3

### How can I get involved?

You are welcome to get involved in any way you like. If you want to, you can go to the [issues page](https://github.com/andreasbm/web-skills/issues) and help me fix the spelling, fix issues or suggest some new features. Any involvement is highly appreciated!

### How can I keep track of what skills I know?

If you scroll to the bottom of the page, you will find a button that says "Sign in with Google". If you click this button and sign in, you will be able to mark skills as completed.

### I am overwhelmed! Help me!

I totally understand if you are a bit overwhelmed by the amount of skills on the page – but I can assure you that this overview includes much, much more than most people will ever need to know. My main goal is to provide a visual overview of web development and make people hungry for learning more. One of the things I absolute love about being a developer is learning new skills. I think it is amazing to be in a field where you can do what you do for a lifetime and still learn something new! People cannot be an expert in every skill on this page so try to find what excites you the most and become really good at that.

### Why haven't you included XYZ Technology?

The skills are based on what I personally find to be the most useful on a day-to-day basis. If you think something really important is missing, you can always suggest it on the [issues page](https://github.com/andreasbm/web-skills/issues).

### What does the "experimental" banner mean?

When a skill is described as experimental, it means that the technology is immature and currently in the process of being added to the Web platform (or considered for addition). Think carefully before you start using experimental technology in any kind of production project. The definition used in Web Skills is based on the excellent definition used on [MDN](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental). You are very welcome to open an issue if you see a skill you believe should be marked as "experimental" or have the banner removed.

### How can I get in contact with you?

Reach out to me on Twitter at [@AndreasMehlsen](https://twitter.com/AndreasMehlsen) or take a look at [my website](https://andreasbm.github.io) if you want to learn more about what other projects I'm working on.


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

Learn how to create new HTML tags with Custom Elements.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Custom Elements](https://developers.google.com/web/fundamentals/web-components/customelements)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - Creating a Custom Element from Scratch](https://css-tricks.com/creating-a-custom-element-from-scratch/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info" alt="Logo" /> Javascript.info - Custom Elements](https://javascript.info/custom-elements)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - An introduction to Custom Elements](https://dev.to/jamesrweb/an-introduction-to-custom-elements-5327)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fitnext.io" alt="Logo" /> itnext - Introduction to Web Components](https://itnext.io/introduction-to-web-components-part-i-custom-elements-4de6713cef9d)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Web Components](https://web.dev/web-components-io-2019/)

### Why use branch

Learn how to use HTML templates to create flexible templates that can then be used to populate the Shadow DOM.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Using Templates & Slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info" alt="Logo" /> Javascript.info - Template Element](https://javascript.info/template-element)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - The Content Template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)


### Command

### Branch

Learn how to encapsulate your CSS using Shadow DOM.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Shadow DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Using Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Shadow Tree](https://developer.mozilla.org/en-US/docs/Glossary/Shadow_tree)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - Encapsulating Style and Structure](https://css-tricks.com/encapsulating-style-and-structure-with-shadow-dom/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fitnext.io" alt="Logo" /> itnext - Introduction to Web Components](https://itnext.io/introduction-to-web-components-part-ii-shadow-dom-8d1d8e126332)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmeowni.ca" alt="Logo" /> Monica - Shadow DOM: fast and encapsulated styles](https://meowni.ca/posts/shadow-dom/)

#### Checkout

Learn how to style the inside of a shadow tree from outside of that Shadow Tree by using Shadow Parts.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> Fergald - CSS Shadow ::part and ::theme](https://github.com/fergald/docs/blob/master/explainers/css-shadow-parts-1.md)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - ::part](https://developer.mozilla.org/en-US/docs/Web/CSS/::part)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3.org" alt="Logo" /> W3C - CSS Shadow Parts](https://www.w3.org/TR/css-shadow-parts-1/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmeowni.ca" alt="Logo" /> Monica - ::part and ::theme, an explainer](https://meowni.ca/posts/part-theme-explainer/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Youtube - CSS Shadow Parts](https://www.youtube.com/watch?v=yVrvOueeb3s)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.chromestatus.com" alt="Logo" /> Chrome Status - ::part and ::theme](https://www.chromestatus.com/features/5763933658939392)

##### Switch

Learn how to compose Custom Elements by using slots.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Falligator.io" alt="Logo" /> Alligator.io - Composing Custom Elements](https://alligator.io/web-components/composing-slots-named-slots/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fjavascript.info" alt="Logo" /> Javascript.info - Slots Composition](https://javascript.info/slots-composition)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - HTML <slot> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcomponent.kitchen" alt="Logo" /> Component.kitchen - A history of the HTML slot element](https://component.kitchen/blog/posts/a-history-of-the-html-slot-element)

##### Restore

Get familiar with best practices when it comes to building Web Components.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Custom Element Best Practices](https://developers.google.com/web/fundamentals/web-components/best-practices)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.webcomponents.org" alt="Logo" /> Webcomponents.org - Web Components Best Practices](https://www.webcomponents.org/community/articles/web-components-best-practices)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> mateusortiz - Web Components the Right Way](https://github.com/mateusortiz/webcomponents-the-right-way)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - Making Web Components for Different Contexts](https://dev.to/equinusocio/making-web-components-for-different-contexts-25ed)

### Stash

Learn how the Constructible Stylesheets proposal enables reusable styles when using shadow dom.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Constructable Stylesheets](https://developers.google.com/web/updates/2019/02/constructable-stylesheets)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwicg.github.io" alt="Logo" /> W3C - Constructable Stylesheet Objects](https://wicg.github.io/construct-stylesheets/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - Why Would Anyone Use Constructible Stylesheets](https://dev.to/westbrook/why-would-anyone-use-constructible-stylesheets-anyways-19ng)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fmedium.com" alt="Logo" /> Benjamin Farrel - Adopt a Design System](https://medium.com/swlh/adopt-a-design-system-inside-your-web-components-with-constructable-stylesheets-dd24649261e)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> WICG - Constructable Stylesheet Objects](https://github.com/WICG/construct-stylesheets/blob/gh-pages/explainer.md)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.chromestatus.com" alt="Logo" /> Chrome Status - Constructible Stylesheets](https://www.chromestatus.com/feature/5394843094220800)

### Branch merger

Learn how the Form Participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Form Participation API Explained](https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.chromestatus.com" alt="Logo" /> Chrome Status - Form-associated custom elements](https://www.chromestatus.com/features/4708990554472448)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fgithub.com" alt="Logo" /> web-platform-tests - Form Participation](https://github.com/web-platform-tests/wpt/tree/master/custom-elements/form-associated)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Devs - Form-associated custom elements](https://developers.google.com/web/updates/2019/09/nic77#form-associated_custom_elements)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - More capable form controls](https://web.dev/more-capable-form-controls/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fhtml.spec.whatwg.org" alt="Logo" /> W3C - Creating a form-associated custom element](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-face-example)

#### Merge

Learn how the Form Participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Form Participation API Explained](https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit)

#### Rebase

Learn how the Form Participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Form Participation API Explained](https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit)

##### Rebase --onto

Learn how the Form Participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Form Participation API Explained](https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit)

##### Rebase --interactive

Learn how the Form Participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Form Participation API Explained](https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit)

#### Cherry-pick

Learn how the Form Participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Form Participation API Explained](https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit)


### Strategy

### Git flow

Learn how the Form Participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Form Participation API Explained](https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit)

#### Github flow

Learn how the Form Participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Form Participation API Explained](https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit)

##### Gitlab flow

Learn how the Form Participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Form Participation API Explained](https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit)

### Naming convention

Learn how the Form Participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Form Participation API Explained](https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit)

### Branch protection

Learn how the Form Participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdocs.google.com" alt="Logo" /> Form Participation API Explained](https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit)


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