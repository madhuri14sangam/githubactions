const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const server = require('./server');

test('GET / endpoint validation suite', async (t) => {
    
    await t.test('should return a 200 OK status code', async () => {
        const response = await request(server).get('/');
        assert.strictEqual(response.status, 200);
    });

    await t.test('should return application/json content header', async () => {
        const response = await request(server).get('/');
        assert.match(response.headers['content-type'], /json/);
    });

    await t.test('should deliver the Hello World message object', async () => {
        const response = await request(server).get('/');
        assert.deepStrictEqual(response.body, { message: "Hello World from Node.js!" });
    });
});
