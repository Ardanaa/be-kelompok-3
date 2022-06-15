const authService = require("../services/authService");

// ------------------------- Auth Register ------------------------- //

const handleRegister = async (req, res) => {
    const { name, email, password } = req.body;

    const { status, status_code, message, data} = await authService.handleRegister({
        name,
        email,
        password,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Auth Register ------------------------- //

module.exports = { handleRegister };