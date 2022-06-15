const usersRepository = require("../repositories/usersRepository");

class UsersServive {

    // ------------------------- Handle Update Users ------------------------- //

    static async handleUpdateUsers({ id, name, city, address, phoneNumber, picture }) {

        const updatedUser = await usersRepository.handleUpdateUsers({
            id,
            name,
            city,
            address,
            phoneNumber,
            picture
        });

        return {
            status: true,
            status_code: 200,
            message: "User berhasil melengkapi info akun!",
            data: {
                updated_user: updatedUser,
            },
        };
    }

    // ------------------------- End Handle Update Users ------------------------- //

}

module.exports = UsersServive;