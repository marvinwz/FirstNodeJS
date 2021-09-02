const https = require("https")

const data = JSON.stringify({});

const authKey = ''

const options = {
    hostname: 'cloud.crownstone.rocks',
    path: '/api/users/me',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': authKey
    }
}
//request
const req = https.request(options, (res) => {
        var body = [];

        console.log("Status code: ", res.statusCode)

        res.on('data', function (chunk) {
            body += chunk;
        })

        res.on('end', function (chunk) {
            console.log("Body :", JSON.parse(body));
        })
    })
    .on("error", function (err) {
        console.log("Error: " + err.message);
    })
req.write(data)
req.end();