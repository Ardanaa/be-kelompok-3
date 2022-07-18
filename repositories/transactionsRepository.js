const { Transactions, Products, Users } = require("../models");

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


    // ------------------------- Handle Get Transaction By Id (Repository) ------------------------- //

    static async handleGetTransactionById({ id }) {
        
        const query = {
            where: {},
            include: [{
                model: Products,
                attributes: ["name", "category", "price", "picture"] 
            },{
                model: Users,
                attributes: ["name", "city", "picture"]
            }]
        };

        if (id) {
            query.where = { ...query.where, id }
        }

        const getTransactionByOwnerId = await Transactions.findOne(query);

        return getTransactionByOwnerId;
    };

    // ------------------------- End Handle Get Transaction By Id (Repository) ------------------------- //


    // ------------------------- Handle Get Transaction By User Id (Repository) ------------------------- //

    static async handleGetTransactionByUserId({ id }){
        
        const query = {
            where: {},
            include: [{
                model: Products,
                attributes: ["name", "category", "price", "picture"] 
            }]
        };

        if (id) {
            query.where = { ...query.where, user_id: id }
        }

        const getTransactionByUserId = await Transactions.findAll(query);

        return getTransactionByUserId;
    };

    // ------------------------- End Handle Get Transaction By User Id (Repository) ------------------------- //



    // ------------------------- Handle Get Transaction By Owner Id (Repository) ------------------------- //

    static async handleGetTransactionByOwnerId({ id, isAccepted }){
        
        const query = {
            where: {},
            include: [{
                model: Products,
                attributes: ["name", "category", "price", "picture"] 
            },{
                model: Users,
                attributes: ["name", "city", "picture"]
            }]
        };

        if (id) {
            query.where = { ...query.where, owner_id: id }
        }

        if (isAccepted) {
            query.where = { ...query.where, isAccepted }
        }

        const getTransactionByOwnerId = await Transactions.findAll(query);

        return getTransactionByOwnerId;
    };

    // ------------------------- End Handle Get Transaction By Owner Id (Repository) ------------------------- //


    
    // ------------------------- Handle Update Transaction By Id (Repository) ------------------------- //

    static async handleUpdateTransactionById({
        id, 
        user_id,
        isAccepted, 
        isRejected ,
        isOpened
    }){

        const updatedTransaction = await Transactions.update({
            isAccepted, 
            isRejected,
            isOpened 
        }, {
            where: { id },
        });

        return updatedTransaction;
    }

    // ------------------------- End Handle Update Transaction By Id (Repository) ------------------------- //
};

module.exports = TransactionRepository;