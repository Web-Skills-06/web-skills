export const fundamentalsCollection = {
	name: "Foundation",
	areas: [
		{
			name: "Github Tutorial",
			skills: [
				{
					name: "Sign Up",
					description: {
						text: "github에 접속해 'sign up'버튼 클릭해 새로운 계정을 생성한다.",
						links: [
							["Github", "https://github.com"],
						]
					},
					skills: [
						{
							name: "Sign In",
							description: {
								text: "sign up을 완료한 후, 이메일 인증을 완료하면 로그인이 가능하다.",
								links: [
									["Github", "https://github.com"],
								]
							},
						},
					]
				},
				{
					name: "Git Install",
					description: {
						text: "github를 사용하기 위해서는 깃을 설치해야한다. 이미 설치했으면 최신 버전으로 업데이트하는 게 좋다.",
						links: [
							["Git", "https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98"]
						]
					}
				},
				{
					name: "Git Config",
					description: {
						text: "git을 설치한 후에는 깃의 사용 환경을 적절하게 설정해 주어야 한다. 환경 설정은 한 컴퓨터에서 한 번만 하면 된다. 설정한 내용은 git을 업그레이드해도 유지된다. 'git config'라는 명령어를 사용한다. ",
						links: [
							["Google Search - Git config", "https://www.lainyzine.com/ko/article/how-to-set-git-repository-username-and-email"],
							["Google Search - Git config", "https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%B5%9C%EC%B4%88-%EC%84%A4%EC%A0%95"],
						]
					},
				},

				{
					name: "Create Repository",
					description: {
						text: "git 설치와 git config가 끝났으면 repository생성을 하도록 하자. repository는 깃허브 사이트에 저장소를 만드는 것이고, 우리의 파일을 업로드 할 수 있다.",
						links: [
							["Github", "https://github.com"],
							["Google Search - Create Repository", "https://velog.io/@kho5420/Git-GitHub-%EB%A0%88%ED%8C%8C%EC%A7%80%ED%86%A0%EB%A6%ACRepository-%EC%83%9D%EC%84%B1%ED%95%98%EA%B3%A0-%EC%86%8C%EC%8A%A4-%EC%98%AC%EB%A6%AC%EA%B8%B0:"]
						]
					},
					
				
					skills: [
						{
							name: "Initializing a repository",
							description: {
								text : "repository를 생성한 후 git으로 프로젝트 관리를 시작할때는 다음 명령어를 입력한다. 'git init'   이 명령어를 실행하면 해당 프로젝트 폴더 내에 숨겨진 .git폴더를 생성하고 이제 git은 현재 repositoy에 대한 모든 변경사항들을 추적 및 관리하게 된다.",
								links: [
									["Github", "https://github.com"],
									["Google Search - Create Repository", "https://velog.io/@kho5420/Git-GitHub-%EB%A0%88%ED%8C%8C%EC%A7%80%ED%86%A0%EB%A6%ACRepository-%EC%83%9D%EC%84%B1%ED%95%98%EA%B3%A0-%EC%86%8C%EC%8A%A4-%EC%98%AC%EB%A6%AC%EA%B8%B0:"]
								]
							}
						}
					]
				},
			]
		},
		{
			name: "Platform",
			skills: [
				{
					name: "Git",
					description: {
						text: "git은 컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율하기 위한 분산 버전 관리 시스템이다.",
						links: [
							["Git", "https://git-scm.com/"],
							["Wikipedia - Git", "https://ko.wikipedia.org/wiki/%EA%B9%83_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4)"]
						]
					},
					skills: [
						{
							name: "Github",
							description: {
								text: "github는 가장 큰 git 기반 버전 제어 플랫폼이다. 현재 3800 만 개 이상의 프로젝트를 호스팅하고 있으며 오픈 소스 커뮤니티에서 가장 일반적으로 사용된다.",
								links: [
									["Github", "https://github.com"],
									["Wikipedia - Github", "https://ko.wikipedia.org/wiki/%EA%B9%83%ED%97%88%EB%B8%8C"],
									["Youtube - Git & Github", "https://www.youtube.com/watch?v=YFNQwo7iTNc"]
								]
							},
						},
						
						{
							name: "Gitlab",
							description: {
								text: "gitlab은 git의 원격 저장소 기능과 이슈 트래커 기능등을 제공하는 소프트웨어다. 중앙 서버에서 git저장소를 관리하는 좋은 방법이며, repository 또는 project를 완벽하게 제어할 수 있다.",
								links: [
									["Gitlab", "https://about.gitlab.com/"],
									["Wikipedia - Gitlab", "https://ko.wikipedia.org/wiki/%EA%B9%83%EB%9E%A9"],
									["Google Search - Github vs Gitlab", "https://insight.infograb.net/blog/2021/02/05/gitlab-vs-github/"]
								]
							},
						},

						{ 
							name: "Bitbucket",
							description: {
								text: "Bitbucket은 아틀라시안 소유의 웹 기반 버전 관리 저장소 호스팅 서비스로서, 깃 버전 관리 시스템을 사용하는 소스 코드 및 개발 프로젝트를 대상으로 한다. 빗버킷은 상용 플랜과 무료 계정을 동시에 제공한다. 빗버킷은 지라, 힙챗, 컨플루언스, 밤부 등의 기타 아틀라시안 소프트웨어와 연동된다.",
								links: [
									["Bitbucket", "https://bitbucket.org/"],
									["Wikipedia - Bitbucket", "https://ko.wikipedia.org/wiki/%EB%B9%97%EB%B2%84%ED%82%B7"],
									["Google Search - Github, Gitlab, Bitbucket", "https://dora-guide.com/gitlab-vs-github/"]
								]
							},
						},

						{
							name: "Redmine",
							description: {
								text: "Redmine은 오픈 소스 프로그램으로 웹 기반의 프로젝트 관리 와 버그 추적 기능을 제공하는 도구이다. 화면기반의 프로젝트 관리에 도움이 되도록 달력과 간트 차트를 제공하고 일정관리 기능을 제공한다. 또한 레드마인은 통합된 프로젝트관리 기능과 이슈추적, 여러가지 형상 관리 기능을 제공한다.",
								links: [
									["Redmine", "https://www.redmine.org/"],
									["Wikipedia - Redmine", "https://ko.wikipedia.org/wiki/%EB%A0%88%EB%93%9C%EB%A7%88%EC%9D%B8"],
									["Youtube - What is Redmine?", "https://www.youtube.com/watch?v=dSUVgrMWSGQ"]
								]
							},
						},
					]
				},
					]
				}
			]
		}