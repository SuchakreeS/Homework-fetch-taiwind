import ProductItem from './ProductItem';


function ProductList({ products }) {
  return (
    <div className='w-3xl'>
      
      {products.map((item) => (
        <ProductItem 
          key={item.id} 
          product={item} 
        />
      ))}
    </div>
  );
}

export default ProductList;