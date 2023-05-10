import ProductMongooseDao from "../daos/productMongooseDao.js";

class ProductsManager
{

    constructor()
    {
        this.productDao = new ProductMongooseDao;
    }

    async getProducts() // getAll, find, list, getStudents
    {
        return this.productDao.find();
    }

    async addProduct(product)
    {
        const findCode = this.productDao(products => products.code === product.code); 
        if(findCode)
        {
            return `El codigo de producto ${product.code} ya esta en uso`;
        }
        else
        {
            const product = await this.productDao.create(data);
            return product
        }    
    }

    async getProductById(id)
    {
        return this.productDao.getOne(id);
    }

    async deleteProductById (id)
    {
      return this.productDao.deleteOne(id);
    }

    async updateProductById(id, data)
    {
      return this.productDao.updateOne(id, data);
    }
};


export default ProductsManager