import {html, render} from "../../web_modules/lit-html.js";
import {APP_VERSION} from "./../config.js";
import "../atoms/button.js";

/**
 * Opens the dialog dialog.
 * @returns {Promise<void>}
 */
export async function openHelp () {
	const {openDialog} = await import("../../web_modules/web-dialog.js");
	const {$dialog, resolver} = openDialog({
		$content: $dialog => render(html`
			<style>
				* {
					box-sizing: border-box;
				}
				
				h2 {
					margin: var(--spacing-xl) 0 var(--spacing-m);
				}
				
				h3 {
					margin: var(--spacing-m) 0 var(--spacing-s);
				}
				
				p {
					margin: 0 0 var(--spacing-m);
				}
				
				a {
					color: var(--link);
				}
				
				#close {
					position: absolute;
					top: 0;
					right: 0;
					padding: var(--spacing-l);
					cursor: pointer;
					font-size: 1.5rem;
				}
				
				#version {
					position: absolute;
					right: var(--spacing-m);
					bottom: var(--spacing-m);
					color: var(--shade-500);
				}
				
			</style>
			
			<div tabindex="0"></div>
			<ws-button id="close" @click="${() => $dialog.close()}" aria-label="Close dialog">✖️</ws-button>

			<h2>Git Roadmap</h2>

			<img src="assets/foundation/platform/git-roadmap.png">

			<h3><a target="_blank" href="https://opentutorials.org/course/3837" rel="noopener" aria-label="Open get involved">생활코딩</a></h3>
			<p>생활코딩 사이트에서도 git roadmap의 정보를 얻을 수 있다.
			생활코딩의 roadmap은 거미줄처럼 </p>


			
			<span id="version">v${APP_VERSION}</span>
		`, $dialog)
	});

	// Flip the colors
	$dialog.style.setProperty(`--dialog-bg`, `var(--foreground)`);
	$dialog.style.setProperty(`--dialog-color`, `var(--background)`);

	return resolver;
}