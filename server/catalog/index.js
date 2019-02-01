import express from 'express';
import axios from 'axios';
import author from './author';
import endpoints from '../endpoints';

const router = express.Router();

const prepareItem = async (result) => {

    const { 
        id,
        title, 
        currency_id,
        price: amount,
        thumbnail, 
        pictures,
        condition, 
        shipping: { free_shipping }
    } = result;

    let picture = thumbnail;

    if(pictures && pictures.length > 0) {
        picture = pictures[0].secure_url;
    }

    const { data: dataCurrency } = await axios.get(endpoints.getCurrencyDetails(currency_id));

    let price = {
        amount,
        currency: dataCurrency.symbol,
        decimals: dataCurrency.decimal_places
    };

    return { 
        id,
        title, 
        price,
        picture,
        condition, 
        free_shipping
    }; 

}   

// I used a limit as parameter to get a specific number of results:
const associateProducts = async (query, limit) => {
    try {
        
        const { data: dataProducts } = await axios.get(endpoints.getSearchItems(query));

        const { results, filters } = dataProducts;

        let categories = [];
        
        if(filters.length > 0) {
            categories = filters.find(filter => filter.id === 'category').values[0];
            categories = categories.path_from_root.map(path => path.name);
        }

        let jsonFormatted = { 
            author,
            categories 
        };

        const itemsMap = results.slice(0, limit).map(prepareItem);

        return Promise.all(itemsMap).then((items) => {
            jsonFormatted.items = items;
            return jsonFormatted;
        });

    } catch(err){
        console.error(err) 
    }
}

const associateProduct = async (id) => {
    try {
        
        const { data: dataProduct } = await axios.get(endpoints.getProductDetails(id));

        const { sold_quantity } = dataProduct;

        let item = await prepareItem(dataProduct);

        const { data: dataDescription } = await axios.get(endpoints.getProductDescription(id));

        const { plain_text: description } = dataDescription;

        item.sold_quantity = sold_quantity;
        item.description = description;
        
        return { author, item };

    } catch(err){
        console.error(err) 
    }
}

router.get('/items', (req, res) => {

    const { q: query, limit } = req.query;

    associateProducts(query, limit).then(response => res.send(response));
    
});

router.get('/items/:id', (req, res) => {
    
    const { id } = req.params;

    associateProduct(id).then(response => res.send(response));

});

export default router;
