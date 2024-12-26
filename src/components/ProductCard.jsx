import img from "../assets/Images/Keyboard.png"

export default function ProductCard({ product }) {
  return (
    <div className="relative w-60 bg-white p-4 border rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={img}
          // alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
         (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">

          </span>
        )
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-700 truncate">{product.name}</h3>
        <div className="flex justify-center items-center gap-2 mt-2">
          <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
          <span className="text-xl font-bold text-red-500">{product.price}</span>
        </div>
      </div>



      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md font-medium transition-colors duration-300 hover:bg-blue-600">
        Add to Cart
      </button>

      {/* Hover Effect: Quick View */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center text-white font-semibold text-lg opacity-0 transition-all duration-300 hover:bg-opacity-60 hover:opacity-100">
          Quick View */}
    </div>

  );
}




