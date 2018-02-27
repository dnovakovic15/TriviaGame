var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app.js');
var should = chai.should();
var assert = chai.assert;

var terminalQ = require('../questions/terminalQuestions.js');


chai.use(chaiHttp);

describe('Server Running', function() {
  it('Should output 200', function(done) {
    chai.request(server)
      .get('')
      .end(function(err, res){
        assert.equal(res.status, 200)
        done();
      });
  })

  // it('Should output third question', function(done) {
  //   chai.request(server)
  //     .get('/algorithms/0')
  //     .end(function(err, res){
  //       assert.equal(terminalQ[2], res.text)
  //       done();
  //     });
  // })

//   it('Should output 1 + 2 = 3', function(done) {
//     chai.request(server)
//       .get('/multiply/1/2')
//       .end(function(err, res){
//         assert.equal(res.text, 2)
//         done();
//       });
//   })

});