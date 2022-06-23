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



    // ------------------------- Handle Get Product By Id (Repository) ------------------------- //
    
    static async handleGetProductById({ id }) {
        const getProductById = await Products.findOne({
            where: { id },
        });

        return getProductById;
    }


    // ------------------------- End Handle Get Product By Id (Repository) ------------------------- //



    // ------------------------- Handle Create Product (Repository) ------------------------- //
    
    static async handleCreateProduct({
        user_id,
        name,
        price,
        category,
        description,
        picture,
        isPublish,
        isSold
    }) {
        const handleCreatedProduct = Products.create({
            user_id,
            name,
            price,
            category,
            description,
            picture,
            isPublish,
            isSold
        });

        return handleCreatedProduct;
    }
    
    
    // ------------------------- End Handle Create Product (Repository) ------------------------- //


    // ------------------------- Handle Update Product (Repository) ------------------------- //

    static async handleUpdateProductById({ id, name, price, category, description, picture,isPublish }) {
        const handleUpdatedProductById = await Products.update({
            name,
            price,
            category,
            description,
            picture,
            isPublish,
        },
            {where: { id } }
        );
    
        return handleUpdatedProductById;
    }

    // ------------------------- End Handle Update Product (Repository) ------------------------- //


    // ------------------------- Handle Delete Product (Repository) ------------------------- //

    static async handleDeleteProductById({ id }) {
        const handleDeletedProductById = await Products.destroy({where: { id }});
    
        return handleDeletedProductById;
    } 

    // ------------------------- End Handle Delete Product (Repository) ------------------------- //


};

module.exports = ProductsRepository;