const request = require('supertest');
const app = require('./hotel'); // path to your app file



describe('Hotel API', () => {
    it('should list all hotels', async () => {
        const res = await request(app)
            .get('/hotels');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('length');
    });

    it('should create a new hotel', async () => {
        const res = await request(app)
            .post('/hotels')
            .send({
                id: '1',
                name: 'Test Hotel',
                city: 'Test City'
            });
        expect(res.statusCode).toEqual(201);
    });

    // Add more tests for other endpoints
});