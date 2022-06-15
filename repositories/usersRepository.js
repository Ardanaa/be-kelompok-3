const { Users } = require("../models");

class UsersRepository {

    // ------------------------- Get User By Email  ------------------------- //

    static async getUserByEmail({ email }) {
        const getUser = await Users.findOne({
            where: {
                email: email
            }
        });

        return getUser;
    }

    // ------------------------- End Get User By Email  ------------------------- //


    // ------------------------- Register User  ------------------------- //
    
    static async createNewUser({ name, email, password }) {
        const createdUser = Users.create({
            name,
            email,
            password
        });

        return createdUser;
    }
    
    // ------------------------- EndRegister User  ------------------------- //
    
}

module.exports = UsersRepository;