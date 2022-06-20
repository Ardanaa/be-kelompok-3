const { Products } = require("../models");

class ProductsRepository {

    // ------------------------- Handle Create Product (Repository) ------------------------- //
    
    static async handleCreateProduct({
        product_id,
        name,
        price,
        category,
        description,
        picture,
        isPublish,
    }) {
        const handleCreatedProduct = Products.create({
            product_id,
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