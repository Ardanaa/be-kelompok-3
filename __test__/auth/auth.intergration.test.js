// const request = require("supertest");
// const models = require("../../models");
// const app = require("../../index");

// describe("Auth intergration test", () => {

//     describe('Successful Operation', () => {

//         describe('POST /v1/auth/login', () => {
//             it('should be returning status code 201 and return the acess token ', (done) => {
//                 const credentials = {
//                     email: "sanlokaja@example.com",
//                     password: "sanlokaja1234",
//                 }

//                 request(app)
//                     .post("/v1/auth/login")
//                     .send(credentials)
//                     .expect(201, done);
//             });
//         });

//         describe('POST /v1/auth/register', () => {
//             it('should be returning status code 201 and return the new created user', (done) => {
//                 const register = {
//                     name: "sanlokaja",
//                     email: "sanlokaja@example.com",
//                     password: "sanlokaja1234",
//                 };

//                 request(app)
//                     .post("/v1/auth/register")
//                     .send(register)
//                     .expect(201)
//                     .end(() => {
//                         models.Users.destroy({
//                             where: {
//                                 name: "sanlokaja",
//                                 email: "sanlokaja@example.com"
//                             },
//                         });
//                         done();
//                     })
//             });
//         });

//     });
// });