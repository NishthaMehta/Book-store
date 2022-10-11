const db= require('../config/database')

exports.createProduct = async (req, res) => {
    const { name, images, author, amount } = req.body;
    const { rows } = await db.query(
      "INSERT INTO products (name, author,images, amount) VALUES ($1, $2, $3)",
      [name, author,images, amount]
    );
  
    res.status(201).send({
      message: "Product added successfully!",
      body: {
        product: { name, author,images,amount }
      },
    });
};
  exports.listAllProducts = async (req, res) => {
    const response = await db.query('SELECT * FROM products ORDER BY name ASC');
    res.status(200).send(response.rows);
};

exports.findProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM products WHERE productid = $1', [productId]);
    res.status(200).send(response.rows);
}

exports.updateProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, author, amount } = req.body;
  
    const response = await db.query(
      "UPDATE products SET name = $1, author = $2, images = $3, amount = $4 WHERE productId = $5",
      [name, author,images, amount,productId]
    );
  
    res.status(200).send({ message: "Product Updated Successfully!" });
  };

  exports.deleteProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    await db.query('DELETE FROM products WHERE productId = $1', [
      productId
    ]);
  
    res.status(200).send({ message: 'Product deleted successfully!', productId });
  };