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
    
    // ------------------------- End Register User  ------------------------- //


    // ------------------------- Update User (Complete Account Info)  ------------------------- //
    
    static async handleUpdateUsers({ id, name, city, address, phoneNumber, picture }) {

        const updatedUser = await Users.update({
            name,
            city,
            address,
            phoneNumber,
            picture,
        }, {
            where: { id },
        });

        return updatedUser;
        
    }

    // ------------------------- End Update User (Complete Account Info)  ------------------------- //
    
}

module.exports = UsersRepository;