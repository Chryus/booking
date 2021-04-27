import app from '../../server';
import User from '../../models/userModel.js';
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

test('POST /api/users', async () => {
  const data = {
    name: 'Jasper',
    email: 'user.password@test.com',
    password: 'honk'
  };

  await supertest(app)
    .post('/api/users')
    .send(data)
    .expect(201)
    .then(async (res) => {
      // Check the response
      expect(res.body.name).toBe(data.name);
      expect(res.body.email).toBe(data.email);
      expect(res.body.token).toBeTruthy();

      // Check the data in the database
      const user = await User.findOne({ _id: res.body._id });
      expect(user).toBeTruthy();
      expect(user.name).toBe(data.name);
      expect(user.email).toBe(data.email);
      expect(user.password).toBeTruthy();
    });
});
