var request = require('supertest');
var app = require('../index.js');

describe('GET /', function () {
  it('respond with hello world', function (done) {
    //navigate to root and check the response is "hello world"
    request(app).get('/').expect('AWS - My name is Lucas. Jenkins is the best', done);
  });
});