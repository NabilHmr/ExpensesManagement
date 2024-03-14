import express from 'express';
import { Categories } from "../entity/Categories";
import request from 'supertest';
import { User } from '../entity/User';

const app = express();

describe('GET /users', () => {
    it('should return all users', () => {
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(User);
            });
    });
});


describe('POST /users', () => {
    it('should create a new user', () => {
        request(app)
            .post('/users')
            .send({ firstName: 'Corentin', lastName : 'STD', email : 'test@gmail.com'})
            .set('Accept', 'application/json')
            .expect(201)
            .then((response) => {
                expect(response.body).toContain({ firstName: 'Corentin', lastName : 'STD', email: 'test@gmail.com'})
            });
    });
});
//TODO
// describe('PUT /users/:id ', () => {
//     it('should modify a user', (done) => { // Ajout de "done" pour notifier Jest lorsque le test est terminé
//         request(app)
//             .get('/users/1')
//             .then((response) => {
//                 const userId = response.body.id; // Capturer l'ID de l'utilisateur
//                 return request(app) // Utiliser return pour chaîner les appels de requête
//                     .put(`/users/${userId}`) // Utiliser l'ID pour faire la requête PUT
//                     .send({ // Envoyer les données à modifier
//                         firstName: response.body.firstName,
//                         lastName: 'SAINT-DIZIER',
//                         email: response.body.email
//                     })
//                     .set('Accept', 'application/json')

//             })
//             .then((response) => {
//                 expect(response.body.firstName).not.toEqual('Corentin'); // Vérifier que le prénom a été modifié
//                 expect(response.body.lastName).toEqual('SAINT-DIZIER'); // Vérifier que le nom de famille a été modifié
//                 expect(response.body.email).not.toEqual('test@gmail.com'); // Vérifier que l'e-mail reste le même
//                 done(); // Appeler done() pour indiquer que le test est terminé
//             })
//             .catch((error) => done(error)); // Gérer les erreurs en appelant done() avec l'erreur
//             .expect(200); // Attendre que la requête soit terminée
//     });
// });