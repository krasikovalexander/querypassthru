
window.setTimeout(function(){
	for (let link of document.links) {
		//if (!link.classList.contains('btn')) {
		//	continue;
		//}
		
		let url = new URL(link.href);
		let goal = url.hostname + url.pathname;

		switch (url.hostname) {
			case "ads.leovegas.com":
				goal = "leovegas";
				break;
			case window.location.hostname:
				matches = url.pathname.match(/\/(.*)-besuchen/i);
				if (matches && matches.length == 2) {
					goal = matches[1];
				}
				break;
		}

		link.onclick = function(){
			clicky.goal(goal, null, 1); 
			clicky.pause(500);
		}
	}
}, 1000);