const { Transactions } = require("../models");

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

};

module.exports = TransactionRepository;