import { product } from '../servers/schema.js';

export const getProducts = (req, res) => {
	try {
		product.find({}, (err, products) => {
			if (err) {
				res.status(400).send('not found');
			} else {
				res.status(200).send(products);
				// req.body;
			}
		});
	} catch (err) {
		res.status(404).send(err);
	}
};
export const getProductById = (req, res) => {
	try {
		const productId = req.body.id;

		product.findById({ _id: productId },  (err, products)=> {
			if (err) {
				res.status(400).send('not found');
			} else {
				res.status(200).send(products);
			}
		});
	} catch (err) {
		res.status(404).send(err);
	}
};
export const getProductByActive = async (req, res) => {
    try {
        const productActive = req.query;
        const active = await product.find({ isActive: true })
        res.status(200).json({
            status: 'OK', results: active.length,
            data: {
                active,
            }
        })
    } catch (err) {
        res.status(404).send(err);
    }

};
export const postProduct = async (req, res) => {
    try {
        const productPost = await product.create(req.body)
        res.send(productPost);
    } catch (err) {
        res.status(404).send(err)
    }
};
export const getProductByPrice = async (req, res) => {
    try {
        const { price } = req.query;
        const active = await product.find({ price: { $lt: price.lt, $gt: price.gt } })
        res.status(200).json({
            status: 'OK', results: active.length,
            data: {
                active,
            }
        })
    } catch (err) {
        res.status(404).send(err);
    }
};
export const patchProduct = async (req, res) => {
    try {
        const { id } = req.body.id;
        const active = req.body.isActive;

        const price = req.body.price;
        const edit = await product.findOneAndUpdate({ _id: id },
            { isActive: active, price: price },
            (err, results) => {
                if (err) {
                res.status(404).send('not found');
                } else {
                    res.status(201).send(`${results} item changed`)
            }
        })
    } catch (error) {
        res.status(404).send(err);
    }
}
export const deleteItem = async (req, res) => {
    try {
        const { id } = req.body.id;
        const deleteProduct = product.findByIdRemove({ _id: id }, (err, results) => {
            if (err) {
                res.status(404).send('error to delete');
            } else {
                res.status(200).send(`${results} item deleted`)
            }
        })
    } catch (err) {
        res.status(404).send(err)
    }
};
export const deleteAll = async (req, res) => {
    try {
        product.deleteMany((err, results) => {
            if (err) {
                res.status(404).send('error to delete')
            } else {
                res.status(200).send('all items are deleted')
            }
        })
    } catch (err) {
        res.status(404).send(err)
        
    }
};


