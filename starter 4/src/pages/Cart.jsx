// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import CartItem from "../components/CartItem";




// const Cart = () => {

//   const {cart} = useSelector((state) => state);
//   console.log("Printing Cart");
//   console.log(cart);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect( () => {
//     setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
//   }, [cart])

//   return (
//     <div>
//   {
//     cart.length > 0  ? 
//     (<div>


//       <div>
//         {
//           cart.map( (item,index) => {
//             return <CartItem key={item.id} item={item} itemIndex={index} />
//           } )
//         }
//       </div>

//       <div>

//         <div>
//           <div>Your Cart</div>
//           <div>Summary</div>
//           <p>
//             <span>Total Items: {cart.length}</span>
//           </p>
//         </div>

//         <div>
//           <p>Total Amount: ${totalAmount}</p>
//           <button>
//             CheckOut Now
//           </button>
//         </div>

//       </div>


//     </div>) : 
//     (<div>
//       <h1>Cart Empty</h1>
//       <Link to={"/"}>
//         <button>
//           Shop Now
//         </button>
//       </Link>
//     </div>)
//   }
//     </div>
//   );
// };

// export default Cart;


import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price , 0));
  }, [cart]);
  
  return (
    <div className="container mx-auto py-10">
      {cart.length > 0 ? (
        <div className="flex justify-between">
          {/* Cart Items (Left Half) */}
          <div className="w-full lg:w-1/2 p-4">
            <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Cart Summary (Right Half) */}
          <div className="w-full lg:w-1/3 p-6 bg-gray-100 rounded-lg shadow-lg h-fit">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <p className="text-lg mb-4">
              <span className="font-semibold">Total Items:</span> {cart.length}
            </p>
            <p className="text-xl font-bold text-gray-800 mb-6">
              Total Amount: ${totalAmount.toFixed(2)}
            </p>
            <button className="w-full py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-300">
              Check Out Now
            </button>
          </div>
        </div>
      ) : (
        // Empty Cart Case
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-3xl font-bold text-gray-700 mb-6">Your Cart is Empty</h1>
          <p className="text-lg text-gray-500 mb-10">Looks like you haven't added anything yet!</p>
          <Link to="/">
            <button className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
