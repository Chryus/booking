import app from '../../server';
import supertest from 'supertest';

test('GET /api/:message', async () => {
  await supertest(app)
    .get('/api/hello')
    .expect(200)
    .then((response) => {
      expect(response.body).toBe('Here is your message: hello');
    });
});
