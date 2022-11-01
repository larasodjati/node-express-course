const express = require('express');
const app = express();
//importing data from data.js
const {products} = require('./data')
//set up http method by default (using GET)
app.get('/', (req, res) =>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
})

app.get('/api/products', (req, res) =>{
//creating new array
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return{id, name, image}
    })
    res.json(newProducts);
})
//app.get('/api/products/1', (req, res) =>{
    //in order to get the single product use find method
        //const singleProduct = products.find((product) => product.id === 1);
        //res.json(singleProduct);
    //})
//set up route parameter if we have hundreds/thousands items and want to access without hard code
app.get('/api/products/:productID', (req, res) =>{
    //console.log(req);
    //console.log(req.params);
        const {productID} = req.params;
        const singleProduct = products.find(
            (product) => product.id === Number(productID));
        //if we can't find what we're looking for
        if(!singleProduct){
            return res.status(404).send('Product does not exist');
        }  
        
        return res.json(singleProduct);
    })

app.get('/api/products/:productID/reviews/:reviewID',(req, res) => {
    console.log(req.params);
    res.send('hello world');
})
//combine query with other products
app.get('/api/v1/query', (req, res) =>{
    //console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];

if(search){
    sortedProducts = sortedProducts.filter((product) => {
        return product.name.startsWith(search)
    })
}
if(limit){
    sortedProducts = sortedProducts.slice(0, Number(limit))
}
    if(sortedProducts.length < 1){
        //res.status(200).send('no products mathced your search');
        return res.status(200).json({sucess: true, data:[]});
    }
    res.status(200).json(sortedProducts);
   
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})