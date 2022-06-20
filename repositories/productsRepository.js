const { Products } = require("../models");

class ProductsRepository {

    // ------------------------- Handle Get All Product (Repository) ------------------------- //
    
    static async handleGetAllProducts(){
        const handleGetAllProducts = await Products.findAll();

        return handleGetAllProducts;
    }

    // ------------------------- End Handle Get All Product (Repository) ------------------------- //


    // ------------------------- Handle Create Product (Repository) ------------------------- //
    
    static async handleCreateProduct({
        user_id,
        name,
        price,
        category,
        description,
        picture,
        isPublish,
    }) {
        const handleCreatedProduct = Products.create({
            user_id,
            name,
            price,
            category,
            description,
            picture,
            isPublish
        });

        return handleCreatedProduct;
    }
    
    
    // ------------------------- End Handle Create Product (Repository) ------------------------- //


};

module.exports = ProductsRepository;