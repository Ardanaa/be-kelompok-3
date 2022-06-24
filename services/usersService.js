const usersRepository = require("../repositories/usersRepository");

class UsersServive {

    // ------------------------- Handle Get All Users ------------------------- //

    static async handleGetAllUsers(){
        
        const handleGetAllUsers = await usersRepository.handleGetAllUsers();

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan semua data users",
            data: {
                handle_get_all_users: handleGetAllUsers,
            },
        };
    }

    // ------------------------- End Handle Get All Users ------------------------- //



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