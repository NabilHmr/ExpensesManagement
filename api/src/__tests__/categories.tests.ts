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
            .then((response) => {
                expect(response.body).toEqual(Categories);
            });
    });
});

describe('POST /categories', () => {
    it('should create a new category', () => {
        request(app)
            .post('/users')
            .send({ category_type: 'CREDIT', category_name : 'Salary' })
            .set('Accept', 'application/json')
            .expect(201)
            .then((response) => {
                expect(response.body).toContain({ category_type: 'CREDIT', category_name : 'Salary'})
            });
    });
});

