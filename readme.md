**Usage**

querypassthru.apply(options);

**Options objects**

    {
		classes: array of strings, optional, if link has some class(es) from this list ,it will be processed,
		hosts: array of strings, optional, if link points to some host from this list, it will be processed,
		parameters: object, optional, mapping for parameters {
			someParamName: bool, OR
			anotherParamName: object {
				setKey: string or function(key, value),
				setValue: string or function(key, value)
			}
		}
	}

e.g.

    {
		classes: ["passthru"],
		hosts: ["google.com", "ya.ru"],
		parameters: {
			p1: true,
			p3: {
				setKey: "newKey",
				setValue: function(key, val) {
					return val*100;
				}
			}
		}
	}

> If nothing passed or options is empty all links will be processed

> If both **classes** and **hosts** are specified **AND** rule applied

