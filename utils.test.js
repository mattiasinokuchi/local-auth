const request = require('supertest');
const app = require('./server').app;

it('Request for homepage responds with status 200', (done) => {
  request(app)
  .get('/')
  .expect(200)
  .end(done);
});

it('Login with correct username/password directs to /profile', (done) => {
  request(app)
  .post('/login')
  .send({
    username: 'sov',
    password: 'rum'
  })
  .expect('Location', '/profile')
  .end(done);
});

it('Login with wrong username/password directs to /', (done) => {
  request(app)
  .post('/login')
  .send({
    username: 'bad',
    password: 'rum'
  })
  .expect('Location', '/')
  .end(done);
});

it('Register with new username directs to /profile', (done) => {
  request(app)
  .post('/register')
  .send({
    username: Date.now(),
    password: 'rum'
  })
  .expect('Location', '/profile')
  .end(done);
});

it('Register with existing username directs to /', (done) => {
  request(app)
  .post('/register')
  .send({
    username: 'sov',
    password: 'rum'
  })
  .expect('Location', '/')
  .end(done);
});
