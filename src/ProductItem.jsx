function ProductItem({ product }) {
  return (
    <div className="flex-col border-2 border-gray-400  mb-2.5">
      <div>
        <img className="flex-col mx-auto mt-3 mb-3" src={product.image} alt={product.title} width="100" />
      </div>

      <div className="flex-col text-center mb-3">
        <h2><strong>Title :</strong> {product.title}</h2>
        <p><strong>Description :</strong> {product.description}</p>
        <p><strong>Price :</strong> {product.price}$</p>
      </div>
    </div>
  );
}

export default ProductItem