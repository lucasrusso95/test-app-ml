const DOMAIN = 'https://api.mercadolibre.com';

const endpoints = {
    getSearchItems: (term) => `${DOMAIN}/sites/MLA/search?q=${term}`,
    getProductDetails: (id) => `${DOMAIN}/items/${id}`,
    getProductDescription: (id) => `${DOMAIN}/items/${id}/description`,
    getCurrencyDetails: (currency_id) => `${DOMAIN}/currencies/${currency_id}`
};

export default endpoints;