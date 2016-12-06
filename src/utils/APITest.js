var agent = require("superagent")

console.log('postProcess')

agent.post('http://localhost:3000/api/Processes')
    .send({
        id: 2,
        name: 'testProcess',
        definition: {}
    })
    .set('Accept', 'application/json')
    .end(function (err, res) {
        if (err || !res.ok) {
            console.error(err);
        } else {
            console.log('yay got ' + JSON.stringify(res.body));
        }
    })
