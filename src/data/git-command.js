export const gitCommandCollection = {
	name: "git command",
	areas: [
		{
			skills: [
				{
					name: "Posix",
					description: {
						text: "POSIX는 서로 다른 운영체제를 같은 방법으로 조작하기 할 수 있도록 만들어진 표준입니다. 이 표준을 준수하는 운영체제로는 unix, macos가 있습니다. linux는 posix를 100% 따르고 있지는 않지만 거의 호환된다고 보시면 됩니다. 윈도우나 모바일 운영체제는 posix를 따르고 있지 않습니다.",
						links: [
							["Opentutorials - POSIX CLI1", "https://opentutorials.org/module/3747"],
						]
					}
				},
				{
					name: "Vim",
					description: {
						text: "Vim은 Bram Moolenaar가 만든 vi 호환 텍스트 편집기입니다. Vim은 텍스트 편집기 가운데 개발자들 사이에서 많이 쓰이는 도구입니다. 마우스나 화살표를 사용하지 않고 키보드 타자만으로 모든 문서를 편집할 수 있기 때문입니다. 프로그램을 짜는데 흐름이 끊기지 않고 쭉 써내려가는 건 매우 중요합니다. 그렇기 때문에 깃에서 여러 줄의 commit을 달 수 있도록 Vim을 배우는 것은 실력을 기르는 데 있어 중요합니다.",
						links: [
							["Wikipidia - Vim", "https://ko.wikipedia.org/wiki/Vim"],
							["Youtube - Vi 시작하기", "https://www.youtube.com/watch?v=GWo_MxMlJJ4&t=928s"],
							["Opentutorials - vim", "https://opentutorials.org/course/730"],
							["Facebook - vim 페이스북 그룹", "https://www.facebook.com/groups/vim.ko"]
						]
					}
				},
				{
					name: "git-cli-basic",
					description: {
						text: "소위 git이라고 하면 command line에서 사용되는 프로그램을 말합니다. ",
						links: [
							["Opentutorials - git version-management", "https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree"]
						]
					},
					skills: [
						{
							name: "git commit",
							description: {
								text: "commit은 git 버전 관리의 최소 단위입니다. add를 통해 staging",
								links: [
									["Google Devs - ARIA Labels", "https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships"],
									["Google Devs - Hiding and updating content", "https://developers.google.com/web/fundamentals/accessibility/semantics-aria/hiding-and-updating-content"],
									["The A11Y Project - ARIA States", "https://a11yproject.com/posts/ARIA-states/"],
									["The A11Y Project - ARIA Properties", "https://a11yproject.com/posts/ARIA-properties/"],
								]
							}
						},
						{
							name: "Accessible HTML",
							description: {
								text: "Learn how to write HTML in such as way that assistive technology better understands it.",
								links: [
									["Google Devs - Introduction to Semantics", "https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/"],
									["MDN - Accessibility HTML", "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML"],
									["Webaim - Skip navigation", "https://webaim.org/techniques/skipnav/"],
									["w3c - Headings", "https://www.w3.org/WAI/tutorials/page-structure/headings/"],
									["Freecodecamp - Semantic Elements", "https://guide.freecodecamp.org/html/html5-semantic-elements/"]
								]
							},
							skills: [
								{
									name: "Alt text",
									description: {
										text: "Learn how to use the alt attribute to provide a useful text alternative to this image.",
										links: [
											["Google Devs - Text Alternatives for Images", "https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/text-alternatives-for-images"],
											["Webaim - Accessible Images", "https://webaim.org/techniques/images/"],
											["Webaim - Alternative text", "https://webaim.org/techniques/alttext/"],
										]
									}
								}
							]
						},
						{
							name: "Accessible CSS",
							description: {
								text: "Learn how to write CSS in such as way that assistive technology better understands it.",
								links: [
									["Webaim - CSS", "https://webaim.org/techniques/css/"]
								]
							}
						},
					]
				},
				{
					name: "git-cli-highlevel",
					description: {
						text: "git",
						links: [
							["Webaim - Forms", "https://webaim.org/techniques/forms/"],
							["Itnext - Form Accessibility Gudie", "https://itnext.io/form-accessibility-a-practical-guide-4062b7e2dd14"]
						]
					},
					skills: [
						{
							name: "Pull request",
							description: {
								text: "Pull request를 ",
								links: [
									["Webaim - Forms", "https://webaim.org/techniques/forms/"],
									["Itnext - Form Accessibility Gudie", "https://itnext.io/form-accessibility-a-practical-guide-4062b7e2dd14"]
								]
							},
						}
					]
				},
				{
					name: "UI States",
					description: {
						text: "Learn how to make the state of each UI element clear.",
						links: [
							["Google Devs - Accessible Styles", "https://developers.google.com/web/fundamentals/accessibility/accessible-styles"]
						]
					}
				},
				{
					name: "Keyboard Accessibility",
					description: {
						text: "Learn how to make it easy for keyboard users to navigate your site.",
						links: [
							["Webaim - Keyboard", "https://webaim.org/techniques/keyboard/"],
							["Smashing Magazine - Web with just a keyboard", "https://www.smashingmagazine.com/2018/07/web-with-just-a-keyboard/"]
						]
					},
					skills: [
						{
							name: "Focus",
							description: {
								text: "Learn how to create a sensible tab order and how to make it easy for the users to locate the currently focused element.",
								links: [
									["web.dev - Control focus with tabindex", "https://web.dev/control-focus-with-tabindex/"],
									["Google Devs - Focus", "https://developers.google.com/web/fundamentals/accessibility/focus/"],
									["Google Devs - Dom Order Matters", "https://developers.google.com/web/fundamentals/accessibility/focus/dom-order-matters"],
									["Google Devs - Using Tabindex", "https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex"],
									["Google Devs - Track Focus", "https://developers.google.com/web/tools/chrome-devtools/accessibility/focus"],
									["MDN - :focus-visible", "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible"],
									["MDN - :focus-within", "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within"]
								]
							}
						}
					]
				},
				{
					name: "Accessible Colors",
					description: {
						text: "Learn how to select colors in such a way that users, including those with visual disabilities, can perceive the content on the page.",
						links: [
							["Webaim - Contrast and Color", "https://webaim.org/articles/contrast/"],
							["The A11Y Project - Check contrast", "https://a11yproject.com/posts/check-contrast-with-mobile-device/"],
							["The A11Y Project - What is color contrast?", "https://a11yproject.com/posts/what-is-color-contrast/"],
							["Designing accessible color systems", "https://stripe.com/en-dk/blog/accessible-color-systems"],
						]
					}
				},
				{
					name: "Laws & Policies",
					description: {
						text: "Learn about the governmental policies related to web accessibility.",
						links: [
							["W3C - Laws & Policies", "https://www.w3.org/WAI/policies/"],
							["Webaim - Laws around the world", "https://webaim.org/articles/laws/world/"],
							["Webaim - Section 508", "https://webaim.org/standards/508/checklist"],
							["Webaim - WCAG 2 Checklist", "https://webaim.org/standards/wcag/checklist"],
							["A11Y.dev - Lawsuits", "https://a11y.dev/470-digital-accessibility-cases-were-filed-in-q3-2018/"],
						]
					},
					skills: [
						{
							name: "Audits",
							description: {
								text: "Learn how to conduct an accessibility review to improve the overall experience of using your site. Remember, good accessibility equals good UX!",
								links: [
									["web.dev - Accessibility audits", "https://web.dev/lighthouse-accessibility"],
									["Google Devs - How to review", "https://developers.google.com/web/fundamentals/accessibility/how-to-review"],
									["Webaim - Accessibility Tools", "https://webaim.org/articles/tools/"],
									["Google Devs - Accessibility Reference", "https://developers.google.com/web/tools/chrome-devtools/accessibility/reference"],
									["Webaim - Wave", "http://wave.webaim.org/"],
									["Google Chrome - NoCoffee Extension", "https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl"],
									["Digital A11Y - Accessibility Plugins", "https://www.digitala11y.com/accessibility-plug-ins-ie-chrome-firefox-browsers/"],
									["Google Devs - Accessibility for teams", "https://developers.google.com/web/fundamentals/accessibility/a11y-for-teams"],
									["WCAG 2.0 checklists", "https://www.wuhcag.com/wcag-checklist/"],
									["How to Meet WCAG (Quick Reference)", "https://www.w3.org/WAI/WCAG21/quickref/"],
								]
							}
						}
					]
				}
			]
		}
	]
};