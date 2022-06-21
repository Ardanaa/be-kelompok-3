const { Products } = require("../models");

class ProductsRepository {

    // ------------------------- Handle Get All Product (Repository) ------------------------- //
    
    static async handleGetAllProducts({ name, category, isPublish, isSold }){

        const query = {
            where: {},
            like: {},
        };

        if (name) {
            query.like = { ...query.like, name }
        }

        if (category) {
            query.where = { ...query.where, category }
        }

        if (isPublish) {
            query.where = { ...query.where, isPublish }
        }

        if (isSold) {
            query.where = { ...query.where, isSold }
        }

        const handleGetAllProducts = await Products.findAll(query);

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