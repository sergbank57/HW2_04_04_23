function findProduct(products) {
    let expensiveProduct = null;
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      if (!expensiveProduct || product.price > expensiveProduct.price) {
        expensiveProduct = product;
      }
    }
  
    return expensiveProduct;
  }
//   пример
  const products = [
    { name: 'Avocado', price: 100 },
    { name: 'Banane', price: 200 },
    { name: 'Citrone', price: 50 },
    { name: 'Mango', price: 250 },
    { name: 'Clemantin', price: 150 },
  ];
  
  console.log(findProduct(products));
  