const usersRepository = require("../repositories/usersRepository");

class UsersServive {

    // ------------------------- Handle Get All Users ------------------------- //

    static async handleGetAllUsers() {

        const handleGetAllUsers = await usersRepository.handleGetAllUsers();

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan semua data users",
            data: {
                get_all_users: handleGetAllUsers,
            },
        };
    };

    // ------------------------- End Handle Get All Users ------------------------- //


    // ------------------------- Handle Get User By Id ------------------------- //

    static async handleGetUserById({ id }) {
        const handleGetUserById = await usersRepository.handleGetUserById({ id });

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan data user berdasarkan id",
            data: {
                user_by_id: handleGetUserById,
            },
        };
    };

    // ------------------------- End Handle Get User By Id ------------------------- //


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
    };

    // ------------------------- End Handle Update Users ------------------------- //



    // ------------------------- Handle Delete Users ------------------------- //

    static async handleDeleteUsers({ id }) {

        const handleGetUserById = await usersRepository.handleGetUserById({ id });

        if (handleGetUserById.id == id) {

            const deletedUsers = await usersRepository.handleDeleteUsers({ id });

            return {
                status: true,
                status_code: 200,
                message: "User berhasil di hapus",
                data: {
                    deleted_users: deletedUsers,
                },
            };
        } else {
            return {
                status: true,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    deleted_users: null,
                },
            };
        }
    }

    // ------------------------- End Handle Delete Users ------------------------- //



    // ------------------------- Handle Get Product By User Id ------------------------- //

    static async handleGetProductByUserId({ id, isSold }) {
        try {
            const handleGetProductByUserId = await usersRepository.handleGetProductByUserId({ id, isSold });

            return {
                status: true,
                status_code: 200,
                message: "Success Get Product By User Id",
                data: {
                    product_user_id: handleGetProductByUserId,
                },
            };
        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    product_user_id: null,
                },
            };
        };
    };

    // ------------------------- End Handle Get Product By User Id ------------------------- //

};

module.exports = UsersServive;