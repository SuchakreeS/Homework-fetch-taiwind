import { useState, useEffect } from 'react';
import ProductList from './ProductList';

function App() {

  const [products, setProducts] = useState([]);
  
  const [filtered, setFiltered] = useState([]);
  
  const [currentCat, setCurrentCat] = useState('All');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);
  const handleFilter = (cat) => {
    setCurrentCat(cat);
    if (cat === 'All') {
      setFiltered(products); 
    } else {
  
      const result = products.filter((item) => item.category === cat);
      setFiltered(result);
    }
  };

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  return (
    <div className='mx-auto'>
      <h1 className='text-3xl mb-2 font-bold text-center mb-8'>Products Fetch & Filter</h1>
        <div className='flex justify-center'>
        {categories.map((cat) => (
          <button className='border-2 p-3 bg-gray-600' key={cat} onClick={() => handleFilter(cat)}>
            {cat}
          </button>
        ))}
      </div>
      <p className='mb-4 mt-3 text-2xl text-center'><strong>Current Category</strong> : {currentCat} , Amount: {filtered.length}</p>
      <ProductList products={filtered} />
    </div>
  );
}

export default App;