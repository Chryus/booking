import app from '../server';
import supertest from 'supertest';

test('GET /api/:message', async () => {
  await supertest(app)
    .get('/api/yes-kween')
    .expect(200)
    .then((response) => {
      \;

      // Check data
      expect(response.body).toBe('yes-kween');
    });
});
