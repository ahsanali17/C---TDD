const http = require("https");

function getContent(){
	const options = {
		"method": "GET",
		"hostname": "air-quality.p.rapidapi.com",
		"port": null,
		"path": "/current/airquality?lon=-73.00597&lat=40.71427",
		"headers": {
			"x-rapidapi-key": "ad79b44e5bmsh2b6210a3ef29223p1a5ee5jsncc406e22144a",
			"x-rapidapi-host": "air-quality.p.rapidapi.com",
			"useQueryString": true
		}
	};

	const req = http.request(options, function (res) {
		const chunks = [];

		res.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res.on("end", function () {
			const body = Buffer.concat(chunks);
			console.log(body.toString());
		});
	});

	req.end();
}
getContent();