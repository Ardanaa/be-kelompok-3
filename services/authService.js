const usersRepository = require("../repositories/usersRepository");
const bcrypt = require("bcrypt");
const SALT_ROUND = 10;

class AuthService {

    // ------------------------- Auth Register ------------------------- //

    static async register({ name, email, password }) {

        // ------------------------- Payload Validation ------------------------- //

        if (!name) {
            return {
                status: false,
                status_code: 400,
                message: "Nama wajib diisi!",
                data: {
                    registered_user: null,
                },
            };
        }

        if (!email) {
            return {
                status: false,
                status_code: 400,
                message: "Email wajib diisi!",
                data: {
                    registered_user: null,
                },
            };
        }

        if (!password) {
            return {
                status: false,
                status_code: 400,
                message: "Password wajib diisi!",
                data: {
                    registered_user: null,
                },
            };
        } else if ( password.length < 8 ) {
            return {
                status: false,
                status_code: 400,
                message: "Password minimal 8 karakter!",
                data: {
                    registered_user: null,
                },
            };
        }

        const getUserByEmail = await usersRepository.getUserByEmail({ email });

        if (getUserByEmail) {
            return {
                status: false,
                status_code: 400,
                message: "Email sudah digunakan!",
                data: {
                    registered_user: null,
                },
            };
        } else {
            const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
            const createdUser = await usersRepository.createNewUser({
                name,
                email,
                password: hashedPassword
            });

            return {
                status: true,
                status_code: 201,
                message: "Berhasil mendaftarkan user!",
                data: {
                    registered_user: createdUser,
                },
            };
        }
    }

    // ------------------------- End Auth Register ------------------------- //
};

module.exports = AuthService;