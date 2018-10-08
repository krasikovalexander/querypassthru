querypassthru.apply({
	hosts: ["ads.leovegas.com"],
	parameters: {
		v: {
			setKey: function(key, val){
				if (val.match(/^Sport/i)) {
					return "Sport";
				}
				if (val.match(/^Casino/i)) {
					return "Casino";
				}
				return false;
			},
			setValue: function(key, val) {
				if (val.match(/^Sport|Casino/i)) {
					let chunks = val.replace(/^Sport|Casino/i, '').match(/.{1,2}/g);
					if (chunks.length == 3) {
						return ["ID=", chunks[0], "_CR=", chunks[1], "_KW=", chunks[2]].join('');
					}
				}
				return "";
			}
		},
		utm_medium: {
			setKey: function(key, val){
				if (val.match(/^S/i)) {
					return "Sport";
				}
				if (val.match(/^C/i)) {
					return "Casino";
				}
				return false;
			},
			setValue: function(key, val, searchParams) {
				if (val.match(/^S|C/i)) {
					let chunks = [];
					for (let key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
						if (searchParams.has(key)) {
							chunks.push(key+"="+searchParams.get(key));
						}
					}
					return chunks.join('_');
				}
				return "";
			}
		}
	}
});