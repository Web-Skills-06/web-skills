export const webcomponentsCollection = {
	name: "branches",
	areas: [
		{
            name: "Concept",
			skills: [
				{
					name: "What is branch",
					description: {
						text: "Branch는 가지라는 뜻으로, commit들이 나뭇가지처럼 뻗어나간다는 의미이다. 나뭇가지처럼 뻗어나간 branch를 전환해가면서, commit 사이를 가볍게 이동할 수 있는 어떠한 포인터 기능을 한다. 기본적으로 git은 master 브랜치를 만든다.",
						links: [
							["Wikipedia - Branch", "https://ko.wikipedia.org/wiki/%EA%B0%80%EC%A7%80_(%EC%8B%9D%EB%AC%BC%ED%95%99)"],
							["Git Branch - What is Branch", "https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80"],
						]
					}
				},
				{
					name: "Why use branch",
					description: {
						text: "Branch는 실제 배포에 사용되는 master 브랜치와 분리하여 또 다른 개발 라인을 만들 수 있다는 점에서 중요하다. 만약 새롭게 만든 브랜치에서 오류가 발생하더라도 실제 master 브랜치는 병합하기 전에는 전혀 영향을 받지 않는다.",
						links: [
							["Why branches are important in Git", "https://www.toolsqa.com/git/branch-in-git/"],
						]
					},
				},
			]
		},
		{
			name: "Command",
			skills: [
				{
					name: "Branch",
					description: {
						text: "Git branch는 브랜치를 생성하는 명령어이다. git branch [브랜치 이름]을 통해 생성할 수 있으며, git branch를 통해 브랜치 목록을 확인할 수 있다.",
						links: [
							["Git Branch 기초 - Branch 생성 및 사용", "https://goddaehee.tistory.com/274"],
							["브랜치 생성 및 목록 확인", "https://ifuwanna.tistory.com/283"],
							["생활코딩 - Branch 만들기", "https://opentutorials.org/course/2708/15260"],
						]
					},
					skills: [
						{
							name: "Checkout",
							description: {
								text: "-b 옵션을 주면 브랜치를 생성함과 동시에 이동할 수 있다.",
								links: [
								]
							},
							skills: [
								{
									name: "Switch",
									description: {
										text: "Git switch는 Git 2.23에서부터 브랜치 사이를 이동할 수 있는 명령어로 도입되었다.",
										links: [
										]
									},
								},
								{	
									name: "Restore",
									description: {
										text: "Learn how to style the inside of a shadow tree from outside of that Shadow Tree by using Shadow Parts.",
										links: [
										]
									}
								},
							
							]
						}		
					],
				},
				{
					name: "Branch merger",
					description: {
						text: "Learn how to create new HTML tags with Custom Elements.",
						links: [
						]
					},
					skills: [
						{
							name: "Merge",
							description: {
								text: "Learn how to create new HTML tags with Custom Elements.",
								links: [
									["생활코딩 - Branch 병합", "https://opentutorials.org/course/2708/15262"],
									["Git 브랜치 - Merge의 기초", "https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%B8%8C%EB%9E%9C%EC%B9%98%EC%99%80-Merge-%EC%9D%98-%EA%B8%B0%EC%B4%88"],
								]
							}
						},
						{
							name: "Rebase",
							description: {
								text: "Learn how to use HTML templates to create flexible templates that can then be used to populate the Shadow DOM.",
								links: [
								]
							},
							skills: [
								{
									name: "Rebase --onto",
									description: {
										text: "Learn how to style the inside of a shadow tree from outside of that Shadow Tree by using Shadow Parts.",
										links: [
										]
									}
								},
								{
									name: "Rebase --interactive",
									description: {
										text: "Learn how to compose Custom Elements by using slots.",
										links: [
											["대화형으로 Git commit history를 수정할 수 있는 interactive 옵션", "https://wormwlrm.github.io/2020/09/03/Git-rebase-with-interactive-option.html"],
										]
									}
								}
							]
						},
						{
							name: "Cherry-pick",
							description: {
								text: "Learn how to encapsulate your CSS using Shadow DOM.",
								links: [
									["git cherry-pick", "https://cselabnotes.com/kr/2021/03/31/56/"],
								]
							}
						},
					],
				},
			]
		},
		{
			name: "Strategy",
			skills: [				
				{
					name: "Git flow",
					description: {
						text: "Learn how the Constructible Stylesheets proposal enables reusable styles when using shadow dom.",
						links: [
							["우아한 형제들 - 우리는 Git-flow를 사용하고 있어요", "https://techblog.woowahan.com/2553/"],
						]
					},
					skills: [
						{
							name: "Github flow",
							description: {
								text: "Learn how the Form Participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.",
								links: [
									["간단하고 민첩한 Github-flow", "https://hyeon9mak.github.io/git-branch-strategy/"],
								]
							},
							skills: [
								{
									name: "Gitlab flow",
									description: {
										text: "Learn how the Form Participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.",
										links: [
											["Introduction to GitLab Flow", "https://docs.gitlab.com/ee/topics/gitlab_flow.html"],
										]
									}
								}	
							],
						},	
					]
				},
				{
					name: "Naming convention",
					description: {
						text: "Learn how the Form Participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.",
						links: [
							["Git branch & Naming", "https://velog.io/@kim-jaemin420/Git-branch-naming"],
							["Git Branching Naming Convention: Best Practices", "https://codingsight.com/git-branching-naming-convention-best-practices/"],
							["Github 기반 브랜치 명명 규칙", "https://rumblefish.tistory.com/65"],
						]
					}
				},
				{
					name: "Branch protection",
					description: {
						text: "Learn how the Form Participation API proposal enables elements, other than built-in form control elements, to participate in form submission and validation.",
						links: [
							["Git Branch Protection Rule", "https://2ndprince.tistory.com/49"],
							["Spectral - How to set up Git branch protection rules", "https://spectralops.io/blog/how-to-set-up-git-branch-protection-rules/"],
							["Github Docs - Managing a Branch Protection Rule", "https://docs.github.com/en/github/administering-a-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule"],
						]
					}
				}
			]
		},
	]
}