const usersService = require("../services/usersService");


// ------------------------- Handle Update Users ------------------------- //

const handleUpdateUsers = async (req, res) => {

    const { id } = req.params;
    const { name, city, address, phoneNumber } = req.body;

    const { status, status_code, message, data} = await usersService.handleUpdateUsers({
        id,
        name,
        city,
        address,
        phoneNumber,
        picture: req.uploaded_picture,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

// ------------------------- End Handle Update Users ------------------------- //

module.exports = { handleUpdateUsers };