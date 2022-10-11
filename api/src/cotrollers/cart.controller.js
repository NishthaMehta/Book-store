const db= require('../config/database')

exports.addToCart = async (req, res) => {
    const { productid,quantity } = req.body;
    const { rows } = await db.query(
      "INSERT INTO carts (productId,quantity ) VALUES ($1, $2)",
      [productid,quantity ]
    );
  
    res.status(201).send({
      message: "Added to cart successfully!",
      body: {
        product: { productid,quantity  }
      },
    });
};
  exports.listAllCart = async (req, res) => {
    const response = await db.query('SELECT * FROM carts');
    res.status(200).send(response.rows);
};

// exports.findProductById = async (req, res) => {
//     const productId = parseInt(req.params.id);
//     const response = await db.query('SELECT * FROM products WHERE productid = $1', [productId]);
//     res.status(200).send(response.rows);
// }

exports.updateCartById = async (req, res) => {
    const cartId = parseInt(req.params.id);
    const { quantity  } = req.body;
  
    const response = await db.query(
      "UPDATE carts SET quantity = $1 WHERE cartId = $2",
      [quantity, cartId ]
    );
  
    res.status(200).send({ message: "Cart Updated Successfully!" });
  };

  exports.removeFromCart = async (req, res) => {
    const cartId = parseInt(req.params.id);
    await db.query('DELETE FROM carts WHERE cartId = $1', [
      cartId
    ]);
  
    res.status(200).send({ message: 'Product deleted successfully!', cartId });
  };