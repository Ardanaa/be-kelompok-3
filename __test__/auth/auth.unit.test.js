const authController = require("../../controllers/authController");
const models = require("../../models");

describe("Auth unit test", () => {

    describe('Successful Operation', () => {

        describe('handleRegister', () => {
            it('should be returning status code 201 and return the new created user', async () => {
                const mReq = { body: { name: "sanlokaja", email: "sanlokaja@example.com", password: "sanlokaja1234" } };
                const mRes = { status: jest.fn().mockReturnThis(), message: jest.fn().mockReturnThis(), data: jest.fn().mockReturnThis() };
                await authController.handleRegister(mReq, mRes);

                expect(mRes.status).toBeCalledWith(201);
                models.Users.destroy({ where: { name: "sanlokaja", email: "sanlokaja@example.com" } });
            });
        });

        describe('handleLogin', () => {
            it('should be returning status code 201 and return the acess token', async () => {
                const mReq = { body: { email: "sanlokaja@example.com", password: "sanlokaja1234" } };
                const mRes = { status: jest.fn().mockReturnThis(), message: jest.fn().mockReturnThis(), data: jest.fn().mockReturnThis() };
                await authController.handleLogin(mReq, mRes);

                expect(mRes.status).toBeCalledWith(201);
            });
        });

    });
});