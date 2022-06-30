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

            // if (!isAccepted) {
            //     return {
            //         status: false,
            //         status_code: 400,
            //         message: "isAccepted wajib diisi!",
            //         data: {
            //             created_transaction: null,
            //         },
            //     };
            // }

            // if (!isRejected) {
            //     return {
            //         status: false,
            //         status_code: 400,
            //         message: "isRejected wajib diisi!",
            //         data: {
            //             created_transaction: null,
            //         },
            //     };
            // }

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

};

module.exports = TransactionsService;