export const webcomponentsCollection = {
	name: "branches",
	areas: [
		{
            name: "Concept",
			skills: [
				{
					name: "What is branch",
					description: {
						text: "Branch는 가지라는 뜻으로, commit들이 나뭇가지처럼 뻗어나간다는 의미이다. 나뭇가지처럼 뻗어나간 branch를 전환해가면서, commit 사이를 가볍게 이동할 수 있는 어떠한 포인터 기능을 한다. 기본적으로 git은 master 브랜치를 만든다. 최근에는 main으로 이름이 바뀌었다.",
						links: [
							["Wikipedia - Branch", "https://ko.wikipedia.org/wiki/%EA%B0%80%EC%A7%80_(%EC%8B%9D%EB%AC%BC%ED%95%99)"],
							["Git 공식문서 - What is Branch", "https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80"],
							['생활코딩 - Branch의 원리(심화)', "https://opentutorials.org/course/2708/15303"],
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
						text: "Git branch는 브랜치를 생성하는 명령어이다. git branch [브랜치 이름]을 통해 생성할 수 있으며, git branch를 통해 브랜치 목록을 확인할 수 있다. 브랜치는 새로운 기능이나 작업을 시작할 때 분기하여 사용한다.",
						links: [
							["Tistory - Branch 생성 및 사용", "https://goddaehee.tistory.com/274"],
							["Tistory - 브랜치 생성 및 목록 확인", "https://ifuwanna.tistory.com/283"],
							["생활코딩 - Branch 만들기", "https://opentutorials.org/course/2708/15260"],
						]
					},
					skills: [
						{
							name: "Checkout",
							description: {
								text: "Git checkout은 브랜치를 전환하거나, 이전 commit으로 이동함으로써 작업중인 파일을 복구하는 기능을 모두 가지고 있다. -b 옵션을 주면 브랜치를 생성함과 동시에 이동할 수 있기도 하다. 이 때문에 혼란이 계속되어 checkout 기능을 Switch와 Restore로 각각 분리하여 명령어를 2개 생성하였다.",
								links: [
									["Git 공식문서 - Git checkout", "https://git-scm.com/docs/git-checkout"],
									["Bitbucket 공식문서 - Git checkout", "https://www.atlassian.com/git/tutorials/using-branches/git-checkout"],
									["코드잇 - Git checkout과 Git reset의 차이점", "https://blog.naver.com/codeitofficial/222011693376"],
									["수정사항을 되돌리는 checkout, reset, revert의 차이점", "https://postlude.github.io/2019/03/21/git-checkout-reset-revert/"],
									["Checkout 기능 분리(Switch, Restore)", "http://honeymon.io/tech/2019/08/30/git-2.23-release.html"],
									["생활코딩 - reset과 checkout의 원리(심화)", "https://opentutorials.org/course/2708/15304"],
								]
							},
							skills: [
								{
									name: "Switch",
									description: {
										text: "Git switch는 Git 2.23에서부터 브랜치 사이를 이동할 수 있는 명령어로 도입되었다.",
										links: [
											["Git 공식문서 - Git switch", "https://git-scm.com/docs/git-switch"],
											["devconnected - How to Switch Branch on Git", "https://devconnected.com/how-to-switch-branch-on-git/"],
										]
									},
								},
								{	
									name: "Restore",
									description: {
										text: "Git restore는 Git 2.23에서부터 수정사항을 복구할 수 있는 명령어로 도입되었다.",
										links: [
											["Bskyvision - Git restore 사용법", "https://bskyvision.com/1146"],
											["Git 공식문서 - Git restore", "https://git-scm.com/docs/git-restore"],
											["Restore, Clean을 이용하여 로컬 변화 취소하기(feat. reset)", "https://velog.io/@younoah/git-restore-clean-%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%A1%9C%EC%BB%AC-%EB%B3%80%ED%99%94-%EC%B7%A8%EC%86%8C%ED%95%98%EA%B8%B0-feat.-reset"],
											["Runebook.dev - Git restore", "https://runebook.dev/ko/docs/git/git-restore"],
										]
									}
								},
							
							]
						}		
					],
				},
				{
					name: "Stash",
					description: {
						text: "아직 현재 브랜치에서 작업이 끝나지 않은 경우는 다른 브랜치로 switch 할 수 없다. 그렇다고 아직 작업이 끝나지 않은 것을 commit할 수도 없는데, 이럴 때 사용하는 것이 stash이다. 임시 저장한 뒤 나중에 복원할 수 있는 명령어라고 이해하면 된다.",
						links: [
							["생활코딩 - stash", "https://opentutorials.org/course/2708/15332"],
							["Git stash 명령어 사용하기", "https://gmlwjd9405.github.io/2018/05/18/git-stash.html"],
							["Git 공식문서 - Stashing과 Cleaning", "https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-Stashing%EA%B3%BC-Cleaning"],
							["Bitbuket 공식문서 - Git stash", "https://www.atlassian.com/git/tutorials/saving-changes/git-stash"],
							["Git stash 사용법: 커밋하지 않고 변경사항 저장하는 방법", "https://www.lainyzine.com/ko/article/git-stash-usage-saving-changes-without-commit/"],
							["Git stash로 자유롭게 branch 이동하기(feat. commit)", "https://velog.io/@anrun/git-stash"],
						]
					}
				},
				{
					name: "Branch merger",
					description: {
						text: "브랜치를 병합하는 방법에는 Merge와 Rebase가 있다. 브랜치를 분기하여 사용하다가 모든 작업을 마치게 되면 master 브랜치 등으로 다시 병합되어야 한다. 병합되지 않으면 수정사항이 반영되지 않기 때문이다.",
						links: [
							["Tistory - Merge와 Rebase의 차이점", "https://unordinarydays.tistory.com/161"],
							["Merge vs Rebase", "https://brunch.co.kr/@anonymdevoo/7"],
							["생활코딩 - Branch 병합 시 충돌해결", "https://opentutorials.org/course/2708/15275"],
							["생활코딩 - merge & conflict의 원리(심화)", "https://opentutorials.org/course/2708/15306"],
						]
					},
					skills: [
						{
							name: "Merge",
							description: {
								text: "Merge 방식으로 병합할 때는 merge commit이 새롭게 생긴다. 병합된 브랜치가 남아있으면서 하나의 브랜치로 합쳐진다고 이해하면 된다.",
								links: [
									["생활코딩 - Branch 병합", "https://opentutorials.org/course/2708/15262"],
									["Git 공식문서 - 브랜치와 Merge의 기초", "https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%B8%8C%EB%9E%9C%EC%B9%98%EC%99%80-Merge-%EC%9D%98-%EA%B8%B0%EC%B4%88"],
									["Bitbucket - Git merge", "https://www.atlassian.com/git/tutorials/using-branches/git-merge"],
									["Tistory - 브랜치 병합하기(git branch merge)", "https://goddaehee.tistory.com/275"],
									["Tistory - 브랜치 병합하기 + 충돌 제거하기", "https://jeong-pro.tistory.com/106"],
								]
							}
						},
						{
							name: "Rebase",
							description: {
								text: "Rebase 방식으로 병합될 때에는 새로운 commit이 생성되지 않으며, 병합된 브랜치가 사라진다. 병합된 브랜치의 모든 커밋이 새로운 브랜치로 그대로 옮겨온다고 이해하면 된다.",
								links: [
									["Git 공식문서 - Rebase 하기", "https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase-%ED%95%98%EA%B8%B0"],
									["Bitbucket - Git rebase", "https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase"],
									["FlyingSquirrel - git rebase 하는 방법", "https://flyingsquirrel.medium.com/git-rebase-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-ce6816fa859d"],
									["왜 Git rebase를 알아야 하는가?", "https://suhwan.dev/2018/01/21/Git-Rebase-1/"],
									["Git rebase를 이해하기", "https://junwoo45.github.io/2019-10-23-rebase/"],
								]
							},
							skills: [
								{
									name: "Rebase --onto",
									description: {
										text: "Onto는 브랜치가 아니라 임의의 커밋과 커밋 사이의 rebase를 가능하게 하는 옵션이다.",
										links: [
											["Git rebase - 커밋 이곳저곳으로 옮기기", "https://suhwan.dev/2018/01/27/Git-Rebase-2/"],
											["Tistory - git rebase 명령어 중 유용한 옵션 --onto", "https://foris.tistory.com/135"],
											["Git rebase --onto 실제 사례 적용", "https://smjeon.dev/git/git-rebase/"],
										]
									}
								},
								{
									name: "Rebase --interactive",
									description: {
										text: "Interactive는 대화형으로 명령어를 실행하여 과거의 commit 이력을 수정할 수 있는 옵션이다.",
										links: [
											["대화형으로 Git commit history를 수정할 수 있는 interactive 옵션", "https://wormwlrm.github.io/2020/09/03/Git-rebase-with-interactive-option.html"],
											["Tistory - interactive 옵션으로 불필요한 커밋 이력 제거", "https://victorydntmd.tistory.com/279"],
											["Git rebase -i 사용하여 명령어 대화형으로 실행", "https://jupiny.com/2018/05/07/git-rebase-i-option/"],
										]
									},
								}
							]
						},
						{
							name: "Cherry-pick",
							description: {
								text: "Cherry-pick는 브랜치에서 모든 커밋이 아니라 내가 원하는 커밋만 가져올 수 있는 명령어이다.",
								links: [
									["git cherry-pick 사용법", "https://cselabnotes.com/kr/2021/03/31/56/"],
									["협업하며 생기는 문제를 cherry-pick으로 해결하기", "https://medium.com/react-native-seoul/git-cherry-pick-%EC%82%AC%EC%9A%A9%EB%B2%95-fe1a3346bd27"],
									["Git 공식문서 - Git cherry-pick", "https://git-scm.com/docs/git-cherry-pick"],
									["Bitbuket 공식문서 - Git cherry-pick", "https://www.atlassian.com/git/tutorials/cherry-pick"],
									["cherry-pick으로 원하는 commit 가져오기", "https://itzjamie96.github.io/2020/12/10/git-cherry-pick-basics/"],
									["Tistory - cherry-pick 필요 상황 및 사용법", "https://zakelstorm.tistory.com/29"],
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
						text: "브랜치 전략 중 하나로 거의 표준과 같이 사용되는 방법론이다. 총 5가지의 브랜치 종류를 사용하여 운영된다. master와 develop가 메인 브랜치이며, feature, release, fotfix는 필요에 따라 운영되는 브랜치이다.",
						links: [
							["우아한 형제들 - 우리는 Git-flow를 사용하고 있어요", "https://techblog.woowahan.com/2553/"],
							["Tistory - Git Flow 개념 이해하기", "https://uxgjs.tistory.com/183"],
							["Tistory - 나의 Git Flow 적응기", "https://jeong-pro.tistory.com/196"],
							["Tistory - git-flow 소개, 설치 및 사용법", "https://hbase.tistory.com/60"],
							["Tistory - 협업을 위한 Git Flow 설정하기", "https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-Git-Flow-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0"],
							["Git Flow와 자주 사용되는 Git 명령어들", "https://www.holaxprogramming.com/2018/11/01/git-commands/"],
						]
					},
					skills: [
						{
							name: "Github flow",
							description: {
								text: "Git Flow를 GitHub에서 사용하기 편하게 변형사킨 방법론이다. 또한 자동화의 개념이 들어가 있어, 더 간편한 모델이다.",
								links: [
									["간단하고 민첩한 Github-flow", "https://hyeon9mak.github.io/git-branch-strategy/"],
									["GitHub Guides - Understanding the GitHub flow", "https://guides.github.com/introduction/flow/"],
									["GitHub Docs - GitHub flow", "https://docs.github.com/en/get-started/quickstart/github-flow"],
									["Tistory - Git flow와 GitHub flow의 이해", "https://codingtrainee.tistory.com/156"],
								]
							},
							skills: [
								{
									name: "Gitlab flow",
									description: {
										text: "Github Flow에서는 너무 편리하게 구성하다보니, 배포, 환경 구성, 릴리즈, 통합에 대한 이슈를 남겨둔 것이 많았다. 따라서 이를 보안하기 위해 GitLab에서 관련 내용을 추가적으로 덧붙여 구성한 방법론이 GitLab Flow이다.",
										links: [
											["Gitlab Docs - Introduction to GitLab Flow", "https://docs.gitlab.com/ee/topics/gitlab_flow.html"],
											["Git flow가 가진 문제점과 솔류션 - GitLab flow", "https://insight.infograb.net/blog/2020/09/22/git-flow-problem-and-solution/"],
											["Git flow, GitHub flow, GitLab flow 차이", "https://ujuc.github.io/2015/12/16/git-flow-github-flow-gitlab-flow/"],
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
						text: "새로운 작업을 시작할 때 항상 브랜치를 분기하고 시작하는 경우가 많다. 따라서 브랜치를 만드는 일이 비일비재하게 이루어지는데, 이름을 짓는 규칙이 없다면 혼란을 가져올 수 있다. 브랜치 이름을 정하는 규칙이 몇가지가 있다.",
						links: [
							["Git branch & Naming", "https://velog.io/@kim-jaemin420/Git-branch-naming"],
							["Coding Sight - Git Branching Naming Convention: Best Practices", "https://codingsight.com/git-branching-naming-convention-best-practices/"],
							["Tistory - Github 기반 브랜치 명명 규칙", "https://rumblefish.tistory.com/65"],
						]
					}
				},
				{
					name: "Branch protection",
					description: {
						text: "Master 브랜치는 실제로 배포가 이루어지며, 실제 사용자들이 사용하는 프로그램의 코드들이 저장되어 있다. 따라서 Master 브랜치에는 오류코드나 실수한 부분이 반영되면 안된다. 따라서 많은 회사들은 Master 브랜치를 protection 전략으로 보호를 한다.",
						links: [
							["Tistory - Git Branch Protection Rule", "https://2ndprince.tistory.com/49"],
							["Spectral - How to set up Git branch protection rules", "https://spectralops.io/blog/how-to-set-up-git-branch-protection-rules/"],
							["Github Docs - Managing a Branch Protection Rule", "https://docs.github.com/en/github/administering-a-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule"],
						]
					}
				}
			]
		},
	]
}