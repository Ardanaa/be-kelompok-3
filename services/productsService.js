const productsRepository = require("../repositories/productsRepository");

class ProductsService {

    // ------------------------- Handle Get All Product (Service) ------------------------- //

    static async handleGetAllProducts({ name, category, isPublish, isSold }) {

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
                    get_all_product: handleGetAllProducts,
                },
            };
        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    get_all_product: null,
                },
            };
        }
    }

    // ------------------------- End Handle Get All Product (Service) ------------------------- //



    // ------------------------- Handle Get Product By Id (Service) ------------------------- //

    static async handleGetProductById({ id }) {

        try {
            const getProductById = await productsRepository.handleGetProductById({ id });

            return {
                status: true,
                status_code: 200,
                message: "Success get product by id.",
                data: {
                    product_by_id: getProductById,
                },
            };

        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    product_by_id: null,
                },
            };
        }
    }

    // ------------------------- End Handle Get Product By Id (Service) ------------------------- //




    // ------------------------- Handle Create Product (Service) ------------------------- //

    static async handleCreateProduct({
        user_id,
        name,
        price,
        category,
        description,
        picture,
        isPublish,
        isSold }) {

        try {

            // ------------------------- Payload Validation ------------------------- //

            if (!name) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Name wajib diisi!",
                    data: {
                        created_product: null,
                    },
                };
            }

            if (!price) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Price wajib diisi!",
                    data: {
                        created_product: null,
                    },
                };
            }

            if (!category) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Category wajib diisi!",
                    data: {
                        created_product: null,
                    },
                };
            }

            if (!description) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Description wajib diisi!",
                    data: {
                        created_product: null,
                    },
                };
            }

            if (!picture.length) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Picture wajib diisi!",
                    data: {
                        created_product: null,
                    },
                };
            }

            if (picture.length >= 5) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Picture maksimal 4!",
                    data: {
                        created_product: null,
                    },
                };
            }

            if (isPublish === null) {
                return {
                    status: false,
                    code_status: 400,
                    message: "isPublish wajib diisi!",
                    data: {
                        created_product: null,
                    }
                }
            };

            if (isSold === null) {
                return {
                    status: false,
                    code_status: 400,
                    message: "isSold wajib diisi!",
                    data: {
                        created_product: null,
                    }
                }
            };

            const handleCreatedProduct = await productsRepository.handleCreateProduct({
                user_id,
                name,
                price,
                category,
                description,
                picture,
                isPublish,
                isSold
            });

            return {
                status: true,
                status_code: 201,
                message: "Produk baru berhasil dibuat!",
                data: {
                    created_product: handleCreatedProduct,
                },
            };
        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    created_product: null,
                },
            };
        }
    }

    // ------------------------- End Handle Create Product (Service) ------------------------- //


    // ------------------------- Handle Update Product (Service) ------------------------- //

    static async handleUpdateProductById({
        id,
        user_id,
        name,
        price,
        category,
        description,
        picture,
        isPublish }) {

        try {
            const getProductById = await productsRepository.handleGetProductById({ id });

            if (getProductById.user_id == user_id) {
                const updatedProductById = await productsRepository.handleUpdateProductById({
                    id,
                    name,
                    price,
                    category,
                    description,
                    picture,
                    isPublish,
                });

                return {
                    status: true,
                    status_code: 200,
                    message: "Product updated successfully",
                    data: {
                        updated_product: updatedProductById,
                    },
                };

            } else {
                return {
                    status: false,
                    status_code: 401,
                    message: "Resource Unauthorized",
                    data: {
                        updated_product: null,
                    },
                }
            }
        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    updated_product: null,
                },
            };
        }
    }

    // ------------------------- End Handle Update Product (Service) ------------------------- //


    // ------------------------- Handle Delete Product (Service) ------------------------- //

    static async handleDeleteProductById({ id, user_id }) {
        try {
            const getProductById = await productsRepository.handleGetProductById({ id });

            if (getProductById.user_id == user_id) {
                const deletedProductById = await productsRepository.handleDeleteProductById({
                    id,
                });

                return {
                    status: true,
                    status_code: 200,
                    message: "Product deleted successfully",
                    data: {
                        deleted_product: deletedProductById,
                    },
                };
            } else {
                return {
                    status: false,
                    status_code: 401,
                    message: "Resource Unauthorized",
                    data: {
                        deleted_product: null,
                    },
                }
            }
        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    deleted_product: null,
                },
            };
        }
    }

    // ------------------------- End Handle Delete Product (Service) ------------------------- //

};

module.exports = ProductsService;