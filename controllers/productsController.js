const productsService = require("../services/productsService");

// ------------------------- Handle Create Product (Controller) ------------------------- //

const handleCreateProduct = async (req, res) => {

    const {
        name,
        price,
        category,
        description,
        isPublish,
    } = req.body;

    const product_id = req.user.id;

    const { status, status_code, message, data } = await productsService.handleCreateProduct({
        product_id,
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

module.exports = { handleCreateProduct };