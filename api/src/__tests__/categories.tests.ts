import express from 'express';
import { Categories } from "../entity/Categories";
import request from 'supertest';

const app = express();

describe('GET /categories', () => {
    it('should return all categories', () => {
        request(app)
            .get('/categories')
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(Categories);
            });
    });
});
