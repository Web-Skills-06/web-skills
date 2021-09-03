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

Learn the basics of HTML and get comfortable with it's syntax and main concepts.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.codecademy.com" alt="Logo" /> Codecademy - Learn HTML](https://www.codecademy.com/learn/learn-html)

#### Sign In

Get familiar with the basic HTML tags

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.tutorialspoint.com" alt="Logo" /> Tutorialspoint - Basic HTML tags](https://www.tutorialspoint.com/html/html_basic_tags.htm)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.elated.com" alt="Logo" /> Elated - First 10 HTML tags](https://www.elated.com/first-10-html-tags/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - HTML tags](https://www.w3schools.com/tags/ref_byfunc.asp)

### Git Install

Learn how to design efficient forms, validating them effectively and keeping the user informed along the way.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - HTML forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Web - Forms](https://developers.google.com/web/fundamentals/design-and-ux/input/forms/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - Forms](https://www.w3schools.com/html/html_forms.asp)

### Git Config

Learn how to make your content search-friendly.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Discoverable](https://web.dev/discoverable)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Search - Get Started](https://developers.google.com/search/docs/guides/get-started)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Search - SEO basics](https://developers.google.com/search/docs/guides/javascript-seo-basics)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - SEO audits](https://web.dev/lighthouse-seo)

### Create Repository

Learn how to structure your HTML in a way that provides a rich experience when sharing it online.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Web - Social Discovery](https://developers.google.com/web/fundamentals/discovery/social-discovery)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Search - Search Features](https://developers.google.com/search/docs/guides/search-features)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdevelopers.google.com" alt="Logo" /> Google Search - Structured Data](https://developers.google.com/search/docs/guides/intro-structured-data)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fweb.dev" alt="Logo" /> web.dev - Easily discoverable](https://web.dev/discoverable)

#### Initializing a repository

Learn how to work with SVG files to make graphics look crisp across all screen resolutions.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Adding vector graphics to the Web](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fsvgontheweb.com" alt="Logo" /> SVG on the web](https://svgontheweb.com/)


### Platform

### Git

Learn the basics of CSS and get comfortable with it's syntax and main concepts.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - CSS Tutorial](https://www.w3schools.com/css/default.asp)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.youtube.com" alt="Logo" /> Supercharged - CSS Selectors](https://www.youtube.com/watch?v=IKho_xDKaLw)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS first steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS building blocks](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS Syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax)

#### Github

Learn about CSS selectors and how to effeciently target DOM elements.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - CSS selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - All selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - Child and Sibling Selectors](https://css-tricks.com/child-and-sibling-selectors/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - All Selectors](https://css-tricks.com/almanac/selectors/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - CSS Combinators](https://www.w3schools.com/css/css_combinators.asp)

#### Gitlab

Learn what specificity means and how to use it when writing CSS.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdev.to" alt="Logo" /> dev.to - CSS Specificity](https://dev.to/emmawedekind/css-specificity-1kca)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fspecificity.keegan.st" alt="Logo" /> Specificity Calculator](https://specificity.keegan.st/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - CSS Specificity](https://www.w3schools.com/css/css_specificity.asp)

#### Bitbucket

Learn how to use pseudo selectors.

* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fdeveloper.mozilla.org" alt="Logo" /> MDN - Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fcss-tricks.com" alt="Logo" /> CSS Tricks - Meet the Pseudo Class Selectors](https://css-tricks.com/pseudo-class-selectors/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fbitsofco.de" alt="Logo" /> When do the :hover, :focus, and :active pseudo-classes apply?](https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - CSS Pseudo-elements](https://www.w3schools.com/css/css_pseudo_elements.asp)
* [ ] [<img style="margin-bottom: 0;" src="https://plus.google.com/_/favicon?domain_url=https%3A%2F%2Fwww.w3schools.com" alt="Logo" /> W3Schools - CSS Pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp)


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