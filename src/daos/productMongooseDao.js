import ProductSchema from "../models/productSchema.js";

class ProductMongooseDao
{
  async getProducts() 
  {
    const productsDocument = await ProductSchema.find();

    return productsDocument.map(document => ({
        id: document._id,
        name: document.name,
        description: document.description,
        thumbnail: document.thumbnail,
        price: document.price,
        code: document.code,
        stock: document.stock,
        category: document.category,
    }));
}

  async getproductById(id) 
  {
    const productDocument = await ProductSchema.findOne({ _id: id });

    return {
        id: productDocument._id,
        name: productDocument.name,
        description: productDocument.description,
        thumbnail: productDocument.thumbnail,
        price: productDocument.price,
        code: productDocument.code,
        stock: productDocument.stock,
        category: productDocument.category,
    }
  }

  async addproduct(data)
  {
    const productDocument = await ProductSchema.create(data);

    return {
        id: productDocument._id,
        name: productDocument.name,
        description: productDocument.description,
        thumbnail: productDocument.thumbnail,
        price: productDocument.price,
        code: productDocument.code,
        stock: productDocument.stock,
        category: productDocument.category,
    }
  }

  async updateProductById(id, data)
  {
    const productDocument = await ProductSchema.findOneAndUpdate({ _id: id }, data, { new: true});

    return {
        id: productDocument._id,
        name: productDocument.name,
        description: productDocument.description,
        thumbnail: productDocument.thumbnail,
        price: productDocument.price,
        code: productDocument.code,
        stock: productDocument.stock,
        category: productDocument.category,
    }
  }

  async deleteProductById(id)
  {
    return productSchema.deleteOne({ _id: id });
  }
}

export default ProductMongooseDao