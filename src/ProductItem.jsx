function ProductItem({ product }) {
  return (
    <div className="lg:w-1/4 px-2 mb-6">
      <div className="flex flex-col h-full bg-slate-900 rounded-xl shadow-lg shadow-indigo-900/40">
      <div className="bg-white p-6 flex justify-center items-center h-48">
        <img className="object-contain h-full" src={product.image} alt={product.title} width="100" />
        </div>

      <div className="p-4 flex flex-col flex-grow:1 text-center ">
        <h2 className="text-sm font-semibold text-indigo-300 uppercase tracking-wider"><strong>Title :</strong> {product.title}</h2>
        <div className="pt-3 mt-auto flex justify-between items-center">
        <p className="text-xs text-slate-400 line-clamp-2 italic"><strong>Description :</strong> {product.description}</p>
        <p className="text-lg font-bold text-white"><strong>Price :</strong> {product.price}$</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProductItem