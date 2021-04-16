import app from '../../server';
import supertest from 'supertest';
import mongoose from 'mongoose';

beforeEach((done) => {
  mongoose.connect(
    process.env.MONGO_TEST_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done()
  );
});

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done());
  });
});

test('GET /api/:message', async () => {
  await supertest(app)
    .get('/api/hello')
    .expect(200)
    .then((response) => {
      expect(response.body).toBe('Here is your message: hello');
    });
});
