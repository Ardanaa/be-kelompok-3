const transactionsRepository = require("../repositories/transactionsRepository");

class TransactionsService {

    // ------------------------- Handle Create Transaction (Service) ------------------------- //

    static async handleCreateTransaction({ 
        user_id, 
        product_id, 
        owner_id,  
        requestedPrice, 
        isAccepted, 
        isRejected,
        isOpened 
    }) {

        try {

            // ------------------------- Payload Validation ------------------------- //

            if (!product_id) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Product Id wajib diisi!",
                    data: {
                        created_transaction: null,
                    },
                };
            }

            if (!owner_id) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Owner Id wajib diisi!",
                    data: {
                        created_transaction: null,
                    },
                };
            }

            if (!requestedPrice) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Requested Pice wajib diisi!",
                    data: {
                        created_transaction: null,
                    },
                };
            }

            if (!isOpened) {
                return {
                    status: false,
                    status_code: 400,
                    message: "isOpened wajib diisi!",
                    data: {
                        created_transaction: null,
                    },
                };
            }

            const createdTransaction = await transactionsRepository.handleCreateTransaction({
                user_id,
                product_id,
                owner_id,
                requestedPrice,
                isAccepted,
                isRejected,
                isOpened
            });

            return {
                status: true,
                status_code: 201,
                message: "Transaksi baru berhasil dibuat",
                data: {
                    created_transaction: createdTransaction,
                },
            };

        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    created_transaction: null,
                },
            };
        };
    };

    // ------------------------- End Handle Create Transaction (Service) ------------------------- //


    // ------------------------- Handle Get Transaction By User Id (Service) ------------------------- //

    static async handleGetTransactionByUserId({ id }){
        try {

            const getTransactionByUserId = await transactionsRepository.handleGetTransactionByUserId({ id });

            return {
                status: true,
                status_code: 200,
                message: "Data transaksi berhasil didapatkan",
                data: {
                    get_transaction_user: getTransactionByUserId,
                },
            };

        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    get_transaction_user: null,
                },
            };
        }
    }

    // ------------------------- End Handle Get Transaction By User Id (Service) ------------------------- //



    // ------------------------- Handle Get Transaction By Owner Id (Service) ------------------------- //

    static async handleGetTransactionByOwnerId({ id }){
        try {

            const getTransactionByOwnerId = await transactionsRepository.handleGetTransactionByOwnerId({ id });

            return {
                status: true,
                status_code: 200,
                message: "Data transaksi berhasil didapatkan",
                data: {
                    get_transaction_owner: getTransactionByOwnerId,
                },
            };

        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    get_transaction_owner: null,
                },
            };
        }
    }

    // ------------------------- End Handle Get Transaction By Owner Id (Service) ------------------------- //



    // ------------------------- Handle Update Transaction By Id (Service) ------------------------- //
    
    static async handleUpdateTransactionById({
        id, 
        user_id,
        isAccepted, 
        isRejected,
        isOpened 
    }) {

        try {

            const getTransactionById = await transactionsRepository.handleGetTransactionById({ id });

            if (getTransactionById.owner_id == user_id){
                const updatedTransaction = await transactionsRepository.handleUpdateTransactionById({
                    id, 
                    user_id,
                    isAccepted, 
                    isRejected,
                    isOpened 
                });

                return {
                    status: true,
                    status_code: 200,
                    message: "Transaksi berhasil diubah",
                    data: {
                        updated_transaction: updatedTransaction,
                    },
                };
            }else{
                return{
                    status: false,
                    status_code: 401,
                    message: "Resource Unauthorized",
                    data:{
                        updated_transaction: null,
                    },
                }
            }

        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    updated_transaction: null,
                },
            };
        }

    }
    
    // ------------------------- End Handle Update Transaction By Id (Service) ------------------------- //
};

module.exports = TransactionsService;