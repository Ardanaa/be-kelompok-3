const transactionsService = require("../services/transactionsService");

// ------------------------- Handle Create Transaction (Controller) ------------------------- //

const handleCreateTransaction = async (req, res, next) => {

    const { product_id, owner_id, requestedPrice, isAccepted, isRejected, isOpened } = req.body;

    const user_id = req.user.id;

    const { status, status_code, message, data } = await transactionsService.handleCreateTransaction({
        user_id,
        owner_id,
        product_id,
        requestedPrice,
        isAccepted,
        isRejected,
        isOpened
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Create Transaction (Controller) ------------------------- //

module.exports = { handleCreateTransaction };