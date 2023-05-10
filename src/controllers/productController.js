import ProductManager from "../managers/productManager.js";

export const getProducts = async  (req, res) =>
{
    const manager = new ProductManager();

    const products = await manager.find();
    res.send({ status: 'success', products });
};
export const getProductById = async (req, res) =>
{
    const { id } = req.params;
    
    const manager = new ProductManager();
    
    const product = await manager.getOne(id);
    res.send({ status: 'success', product });
};

export const addProduct = async (req, res) =>
{
  const manager = new ProductManager();
  const student = await manager.create(req.body);

  res.send({ status: 'success', product, message: 'Product created.' })
};

export const updateProductById = async (req, res) =>
{
  const { id } = req.params;

  const manager = new ProductManager();

  const result = await manager.updateOne(id, req.body);

  res.send({ status: 'success', result, message: 'Product updated.' })
};

export const deleteProductById = async (req, res) =>
{
  const { id } = req.params;

  const manager = new ProductManager();

  const product = await manager.deleteOne(id);
  res.send({ status: 'success',product, message: 'Product deleted.' })
};