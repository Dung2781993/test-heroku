var express = require('express');
var parser = require('body-parser');
var express = require('express');
var parser = require('body-parser');
var app = express();
var reload = require('reload');
var dataFile = require('./data/request.json');
var requestData = require('./data/request.json');

var app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.post('/', function (req, res) {
    if (Object.keys(req.body).length) {
        r = { "response": [] };
        // loop through the payload
        for (index in req.body.payload) {
            data = req.body.payload[index];

            if ((! data.image ) || (! data.image.showImage)) {
                continue ;
            }

            if (! data.drm) {
                continue ;
            }

            if (! data.episodeCount) {
                continue ;
            }

            m = { "title": data.title, "slug": data.slug, "image": data.image.showImage };
            r.response.push(m);
        }

        res.send(JSON.stringify(r));
    }
    else {
        error = { "error": "Could not decode request: JSON parsing failed" };
        res.status(400);
        res.send(JSON.stringify(error));
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
