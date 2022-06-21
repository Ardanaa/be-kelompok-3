const productsService = require("../services/productsService");

// ------------------------- Handle Get All Product (Controller) ------------------------- //

const handleGetAllProducts = async (req, res) => {

    const { name, category, isPublish, isSold } = req.query;

    const { status, status_code, message, data } = await productsService.handleGetAllProducts({
        name, 
        category, 
        isPublish, 
        isSold
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}

// ------------------------- End Handle Get All Product (Controller) ------------------------- //


// ------------------------- Handle Create Product (Controller) ------------------------- //

const handleCreateProduct = async (req, res) => {

    const {
        name,
        price,
        category,
        description,
        isPublish,
    } = req.body;

    const user_id = req.user.id;

    const { status, status_code, message, data } = await productsService.handleCreateProduct({
        user_id,
        name,
        price,
        category,
        description,
        picture: req.uploaded_picture,
        isPublish,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}

// ------------------------- End Handle Create Product (Controller) ------------------------- //

module.exports = { handleCreateProduct, handleGetAllProducts };