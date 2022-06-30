const { Transactions, Products } = require("../models");

class TransactionRepository {

    // ------------------------- Handle Create Transaction (Repository) ------------------------- //

    static async handleCreateTransaction({ 
        user_id, 
        product_id, 
        owner_id,  
        requestedPrice, 
        isAccepted, 
        isRejected,
        isOpened 
    }) {
        
        const createdTransaction = Transactions.create({
            user_id, 
            product_id, 
            owner_id,  
            requestedPrice, 
            isAccepted, 
            isRejected,
            isOpened
        });
        
        return createdTransaction;
    };

    // ------------------------- End Handle Create Transaction (Repository) ------------------------- //


    // ------------------------- Handle Get Transaction By User Id (Repository) ------------------------- //

    static async handleGetTransactionByUserId({ id }){
        
        const query = {
            where: {},
            include: [{
                model: Products,
                attributes: ["name", "category", "price", "picture"]
            }]
        }

        if (id) {
            query.where = { ...query.where, user_id: id }
        }

        const getTransactionByUserId = await Transactions.findAll(query);

        return getTransactionByUserId;
    }

    // ------------------------- End Handle Get Transaction By User Id (Repository) ------------------------- //
};

module.exports = TransactionRepository;