var querypassthru = {
	apply: function(config = {}){

		if (location.search) {
			let searchParams = new URLSearchParams(location.search);

			for (let link of document.links) {

				if (config.classes && config.classes.length) {
					let found = false;
					for (let cssClass of config.classes) {
						if (link.classList.contains(cssClass)) {
							found = true;
							break;
						}
					}
					if (!found) {
						continue;
					}
				}

				if (config.hosts && config.hosts.length) {
					console.log(config.hosts);
					if (!config.hosts.includes(link.host)) {
						continue;
					}
				}

				let url = new URL(link.href);
				if (config.parameters) {
					for (let p of searchParams) {
						if (config.parameters[p[0]]) {
							let key = oldKey = p[0];
							let val = oldVal = p[1];

							let sp = config.parameters[p[0]];

							if (sp.setKey) {
								if (typeof sp.setKey === "function") {
									key = sp.setKey(oldKey, oldVal, searchParams);
								} else {
									key = sp.setKey;
								}
							}

							if (key) {
								if (sp.setValue) {
									if (typeof sp.setValue === "function") {
										val = sp.setValue(oldKey, oldVal, searchParams);
									} else {
										val = sp.setValue;
									}
								}

								url.searchParams.set(key, val);
							}
						}
					}
				} else {
					for (let p of searchParams) {
						url.searchParams.set(...p);
					}
				}
	
				link.href = url.toString();
			}
		}
	}
};