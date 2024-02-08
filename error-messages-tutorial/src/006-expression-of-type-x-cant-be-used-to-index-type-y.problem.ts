const productPrices = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice = (productName: keyof typeof productPrices) => {
  return productPrices[productName];
};


/* or can declare types for productPrices 

  Record<string, number>
*/