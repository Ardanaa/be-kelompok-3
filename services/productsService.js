const productsRepository = require("../repositories/productsRepository");

class ProductsService{

    // ------------------------- Handle Get All Product (Service) ------------------------- //

    static async handleGetAllProducts({ name, category, isPublish, isSold }){
        
        try {
            const handleGetAllProducts = await productsRepository.handleGetAllProducts({
                name, 
                category, 
                isPublish, 
                isSold
            });

            return {
                status: true,
                status_code: 200,
                message: "Produk berhasil ditampilkan!",
                data: {
                    handle_get_all_product: handleGetAllProducts,
                },
            };
        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handle_get_all_product: null,
                },
            };
        }
    }

    // ------------------------- End Handle Get All Product (Service) ------------------------- //
    
    
    // ------------------------- Handle Create Product (Service) ------------------------- //

    static async handleCreateProduct({ 
        user_id, 
        name, 
        price, 
        category, 
        description, 
        picture, 
        isPublish }) {
        
        try {

            // ------------------------- Payload Validation ------------------------- //

            if (!name) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Name wajib diisi!",
                    data: {
                        handle_created_product: null,
                    },
                };
            }
    
            if (!price) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Price wajib diisi!",
                    data: {
                        handle_created_product: null,
                    },
                };
            }
    
            if (!category) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Category wajib diisi!",
                    data: {
                        handle_created_product: null,
                    },
                };
            }
    
            if (!description) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Description wajib diisi!",
                    data: {
                        handle_created_product: null,
                    },
                };
            }
    
            if (!picture.length) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Picture wajib diisi!",
                    data: {
                        handle_created_product: null,
                    },
                };
            }
    
            if (picture.length >= 5) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Picture maksimal 4!",
                    data: {
                        handle_created_product: null,
                    },
                };
            }
    
            const handleCreatedProduct = await productsRepository.handleCreateProduct({
                user_id,
                name,
                price,
                category,
                description,
                picture,
                isPublish
            });
    
            return {
                status: true,
                status_code: 201,
                message: "Produk baru berhasil dibuat!",
                data: {
                    handle_created_product: handleCreatedProduct,
                },
            };
        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handle_created_product: null,
                },
            };
        }
    }

    // ------------------------- End Handle Create Product (Service) ------------------------- //
};

module.exports = ProductsService;