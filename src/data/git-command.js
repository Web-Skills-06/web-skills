export const gitCommandCollection = {
	name: "git command",
	areas: [
		{
            name: "Prepare",
			skills: [
				{
					name: "Posix",
					description: {
						text: "POSIX는 서로 다른 운영체제를 같은 방법으로 조작할 수 있도록 만들어진 표준입니다. 이 표준을 준수하는 운영체제로는 unix, macos가 있습니다. linux는 posix를 100% 따르고 있지는 않지만 거의 호환된다고 보시면 됩니다. 윈도우나 모바일 운영체제는 posix를 따르고 있지 않습니다.",
						links: [
							["Opentutorials - POSIX CLI1", "https://opentutorials.org/module/3747"],
                            ["당근마켓 Daegwon Nacyot Kim 님 - 커맨드라인 사용법", "https://www.44bits.io/ko/post/linux-and-mac-command-line-survival-guide-for-beginner"],
                            ["개발자 Violet-Bora-Lee님 - 리눅스 서바이벌", "https://github.com/Violet-Bora-Lee/linux-survival-for-korean"]
						]
					}
				},
				{
					name: "Vim",
					description: {
						text: "Vim은 Bram Moolenaar가 만든 vi 호환 텍스트 편집기입니다. Vim은 마우스나 화살표를 사용하지 않고 키보드 타자만으로 모든 문서를 편집할 수 있습니다. 입문자가 쓰기에 알아야 할 명령어들이 있어 읽으면 좋은 강의들을 소개합니다.",
						links: [
							["Wikipidia - Vim", "https://ko.wikipedia.org/wiki/Vim"],
							["Youtube - Vi 시작하기", "https://www.youtube.com/watch?v=GWo_MxMlJJ4&t=928s"],
							["Tistory - vim swap 문제 해결", "https://jhnyang.tistory.com/141"],
							["Facebook - vim 페이스북 그룹", "https://www.facebook.com/groups/vim.ko"]
						]
					}
				},
            ],
        },
        {
            name: "Git-cli",
            skills: [
                {
                    name: "Git-cli-basic",
                    description: {
                        text: "지옥에서 온 문서 관리자. git을 처음 만든 리누스 토르발스가 남긴 말입니다. 파일이 수없이 변경되는 지옥에서 git은 버전 관리를 하는데 유용한 기술입니다.",
                        links: [
                            ["Opentutorials - Git1", "https://opentutorials.org/course/3837"],
                            ["Pro Git - 공식 문서", "https://git-scm.com/book/ko/v2"],
                            ["MDN - Git and GitHub", "https://developer.mozilla.org/ko/docs/Learn/Tools_and_testing/GitHub"]
                        ]
                    },
                    skills: [
                        {
                            name: "Version",
                            description: {
                                text: "Git을 통해서 프로젝트의 버전 관리를 할 수 있습니다. 아래의 링크는 버전 관리를 실습하는데 이용할 수 있는 강의와 사이트입니다.",
                                links: [
                                    ["Opentutorials - Version management", "https://opentutorials.org/course/3839"],
                                    ["Learning Git Branching", "https://learngitbranching.js.org/?locale=ko"],
                                    ["Git tutorials", "https://violet-bora-lee.github.io/git-tutorial/"],
                                    ["Git 학습에 도움이 되는 실습 사이트","https://git-school.github.io/visualizing-git/"]
                                ]
                            },
                            skills: [
                                {
                                    name: "Add",
                                    description: {
                                        text: "commit을 하기 위해서는 이전에 수정한 파일을 Staging area로 넘기는 작업이 필요합니다. git add 명령어를 사용하면 이제까지 수정한 파일을 일부 혹은 전부 Staging area로 넘길 수 있습니다.",
                                        links: [
                                            ["Opentutorials - Make a version", "https://opentutorials.org/course/3839/22592"],
                                            ["Git 공식 문서 - 수정하고 저장소에 저장하기", "https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EC%88%98%EC%A0%95%ED%95%98%EA%B3%A0-%EC%A0%80%EC%9E%A5%EC%86%8C%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0"],
                                        ]
                                    }
                                },
                                {
                                    name: "Commit",
                                    description: {
                                        text: "commit은 git 버전 관리의 최소 단위입니다. add를 통해 staging area로 파일을 옮기고 commit으로 파일을 Repository로 옮깁니다.",
                                        links: [
                                            ["Github - 좋은 커밋 메시지란?", "https://github.com/javascript-tutorial/ko.javascript.info/pull/460"]
                                        ]
                                    },
                                },
                            ]
                        },
                        {
                            name: "Collaboration",
                            description: {
                                text: "git은 프로젝트의 버전 관리를 돕기도 하지만 협업에도 중요하게 쓰이는 도구입니다. 이때 협업을 하기 위한 방법이 두 가지 있는데요. 하나는 직접 서버로 돌릴 컴퓨터에 작업한 내용을 옮겨넣는 방법입니다. 하지만 개인이 이 방법을 쓰기엔 현실적으로 어렵습니다. 다른 한 방법이 Github, Gitlab과 같은 원격 저장소를 이용하는 방법입니다. 아래의 링크를 통해 협업하는 방법을 알아보세요.",
                                links: [
                                    ["Opentutorials - 협업", "https://opentutorials.org/course/3842"],
                                    ["Velog - Git 협업 가이드", "https://velog.io/@jinuku/Git-%ED%98%91%EC%97%85-%EA%B0%80%EC%9D%B4%EB%93%9C"]
                                ]
                            },
                            skills: [
                                {
                                    name: "Push",
                                    description: {
                                        text: "로컬에서 작업을 한 뒤에 원격 저장소로 파일을 올리려면 push를 해야합니다. 아래의 링크를 통해 push를 하면 어떤 일이 일어나는지 한번 알아보세요.",
                                        links: [
                                            ["Opentutorial"]
                                        ]
                                    },
                                },
                                {
                                    name: "Pull",
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
                            name: "Reset",
                            description: {
                                text: "Reset은 최근 작업한 버전을 취소하고 지정한 버전으로 되돌리는 효과를 냅니다. 하지만 엄밀한 정의는 조금 다릅니다. git에서 버전을 삭제하는 일은 웬만하면 드뭅니다. reset의 정확한 기능을 알면 그것을 더 알맞게 활용할 수 있게 될 것입니다.",
                                links: [
                                    ["Opentutorials - Reset vs Checkout", "https://opentutorials.org/module/4032/24532"],
                                    ["Opentutorials - Head의 이해", "https://opentutorials.org/module/4032/24531"],
                                    ["Git 튜토리얼", "https://violet-bora-lee.github.io/git-tutorial/#reset"]
                                ]
                            },
                            skills: [
                                {
                                    name: "Options",
                                    description: {
                                        text: "reset은 최근 작업한 버전을 삭제하고 과거로 되돌리는 기능이 아닙니다. 그와 비슷한 효과를 내지만 더 정확하게는 Head가 가리키는 Branch가 가리키는 버전을 지정해서 바꾸는 것입니다. 아래의 강좌는 reset의 옵션입니다. 옵션에 따라서 Repository, Staging area, Working directory에서 어떤 변화가 일어나는지 알아보세요.",
                                        links: [
                                            ["Opentutorials - --hard vs --soft vs --mixed", "https://opentutorials.org/module/4032/24533"]
                                        ]
                                    },
                                },
                                {
                                    name: "Reset vs Revert",
                                    description: {
                                        text: "Reset과 Revert는 프로젝트에서 버전을 지정한 시점으로 되돌리는 기능입니다. 하지만 둘은 기능이나 쓰임새가 다릅니다. 또한, reset은 단순히 버전을 삭제하는 것을 넘어서 프로젝트에 유용하게 쓰일 수 있습니다. 아래 링크의 강좌를 통해 두 명령어를 잘 익히시기 바랍니다.",
                                        links: [
                                            ["Opentutorials - Reset vs Revert", "https://opentutorials.org/module/4032/24532"],
                                            ["Opentutorials - Git reset", "https://opentutorials.org/course/3839/22596"],
                                            ["Opentutorials - Git revert", "https://opentutorials.org/course/3839/22597"]
                                        ]
                                    },
                                },
                            ]
                        },
                    ]
                },
                {
                    name: "Git-cli-highlevel",
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
                                text: "Pull request는 협업 시 Git에 권한이 없는 타인이 수정사항을 제안하고 그걸 받아들여 내 프로젝트에 병합시킬 때 사용하는 기능입니다. 아래 링크에서 Pull request에 대한 구체적인 사용법을 알아보세요!",
                                links: [
                                    ["Opentutorials - https://opentutorials.org/course/4587"],
                                    []
                                ]
                            },
                        }
                    ]
                },
            ],
        }
    ]
};