const usersService = require("../services/usersService");


// ------------------------- Handle Get All Users ------------------------- //

const handleGetAllUsers = async (req, res) => {
    
    const { status, status_code, message, data} = await usersService.handleGetAllUsers();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}

// ------------------------- End Handle Get All Users ------------------------- //



// ------------------------- Handle Update Users ------------------------- //

const handleUpdateUsers = async (req, res, next) => {

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

module.exports = { handleUpdateUsers, handleGetAllUsers };