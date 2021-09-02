const https = require("https")

//const data = JSON.stringify({});

const authKey = ''
const userID = '612e25b67de9b000044b9459'
const stoneID = '612f43e879ce050004a0447c'
const state = 1

const params = new URLSearchParams({
    switchState: '0',
});
const query = params.toString();

const options = {
    hostname: 'cloud.crownstone.rocks',
    path: '/api/Stones/' + stoneID + '/setSwitchStateRemotely?' + query,
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': authKey
    },
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


console.log(options)
console.log(params)
console.log(query)
//console.log(data)
//req.write(data)
req.end();