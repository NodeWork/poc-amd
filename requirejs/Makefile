
DIST=_dist

clean:
	rm -rf $(DIST)

build: clean
	node ./lib/r.js -o build.js

prod: build
	cd $(DIST) && node app.js

prev:
	node app.js
