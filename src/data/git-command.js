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
                                    name: "Git-version-management",
                                    description: {
                                        text: "소위 Git이라고 하면 command line에서 사용되는 프로그램을 말합니다. 아래의 링크와 강의를 통해 바로 이 프로그램의 사용법을 살펴봅니다.",
                                        links: [
                                            ["Opentutorials - Version management", "https://opentutorials.org/course/3839"],
                                            ["Learning Git Branching", "https://learngitbranching.js.org/?locale=ko"],
                                            ["Git tutorials", "https://violet-bora-lee.github.io/git-tutorial/"]
                                            ["Git 학습에 도움이 되는 실습 사이트","https://git-school.github.io/visualizing-git/"]
                                        ]
                                    }
                                },
                                {
                                    name: "Git commit",
                                    description: {
                                        text: "commit은 git 버전 관리의 최소 단위입니다. add를 통해 staging area로 파일을 옮기고 commit으로 파일을 Repository로 옮깁니다.",
                                        links: [
                                            ["Github - 좋은 커밋 메시지란?", "https://github.com/javascript-tutorial/ko.javascript.info/pull/460"]
                                        ]
                                    },
                                    skills: [
                                        {
                                            name: "",
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