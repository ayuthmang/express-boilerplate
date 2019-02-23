const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Server', () => {

  describe('/GET /', () => {
    it('should run without crash', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
    });
  });

});
