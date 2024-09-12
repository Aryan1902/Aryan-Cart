
// import {FcDeleteDatabase} from "react-icons/fc"
// import { useDispatch } from "react-redux";
// import { remove } from "../redux/Slices/CartSlice";
// import { toast } from "react-hot-toast";

// const CartItem = ({item, itemIndex}) => {
//   const dispatch = useDispatch();

//   const removeFromCart = () => {
//     dispatch(remove(item.id));
//     toast.success("Item Removed");
//   }

//   return (
//     <div>

//       <div>

//         <div>
//           <img src={item.image} />
//         </div>
//         <div>
//           <h1>{item.title}</h1>
//           <h1>{item.description}</h1>
//           <div>
//             <p>{item.price}</p>
//             <div
//             onClick={removeFromCart}>
//               <FcDeleteDatabase/>
//             </div>
//           </div>

//         </div>


//       </div>

//     </div>
//   );
// };

// export default CartItem;


// import { FcDeleteDatabase } from "react-icons/fc";
// import { useDispatch } from "react-redux";
// import { remove } from "../redux/Slices/CartSlice";
// import { toast } from "react-hot-toast";

// const CartItem = ({ item, itemIndex }) => {
//   const dispatch = useDispatch();

//   const removeFromCart = () => {
//     dispatch(remove(item.id));
//     toast.success("Item Removed");
//   };

//   return (
//     <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4">
//       <div className="flex items-center">
//         <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
//         <div className="ml-4">
//           <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
//           <p className="text-sm text-gray-500 mt-1">{item.description}</p>
//           <p className="text-md font-bold text-green-600 mt-2">${item.price}</p>
//         </div>
//       </div>

//       <div
//         className="cursor-pointer hover:bg-red-100 p-2 rounded-full transition-all duration-300"
//         onClick={removeFromCart}
//       >
//         <FcDeleteDatabase size={24} />
//       </div>
//     </div>
//   );
// };

// export default CartItem;


// import { FcDeleteDatabase } from "react-icons/fc";
// import { useDispatch } from "react-redux";
// import { remove } from "../redux/Slices/CartSlice";
// import { toast } from "react-hot-toast";

// const CartItem = ({ item, itemIndex }) => {
//   const dispatch = useDispatch();

//   const removeFromCart = () => {
//     dispatch(remove(item.id));
//     toast.success("Item Removed");
//   };

//   return (
//     <div className="w-full mb-6">
//       <div className="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg">
//         <div className="flex items-center">
//           <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
//           <div className="ml-6">
//             <h1 className="text-xl font-bold text-gray-900">{item.title}</h1>
//             <p className="text-sm text-gray-600 mt-1">{item.description}</p>
//             <p className="text-md font-bold text-green-600 mt-2">${item.price}</p>
//           </div>
//         </div>

//         <div
//           className="cursor-pointer hover:bg-red-100 p-3 rounded-full transition-all duration-300"
//           onClick={removeFromCart}
//         >
//           <FcDeleteDatabase size={28} />
//         </div>
//       </div>

//       {/* Separator Line */}
//       <div className="my-6">
//         <hr className="border-t-2 border-gray-200" />
//       </div>
//     </div>
//   );
// };

// export default CartItem;


import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="w-full mb-6">
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white shadow-lg rounded-lg">
        {/* Image and Content */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-32 h-32 sm:w-24 sm:h-24 object-cover rounded-lg mb-4 sm:mb-0"
          />

          {/* Content */}
          <div className="ml-0 sm:ml-6 text-center sm:text-left">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h1>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            <p className="text-lg font-bold text-green-600 mt-2">${item.price}</p>
          </div>
        </div>

        {/* Delete Icon */}
        <div
          className="mt-4 sm:mt-0 cursor-pointer hover:bg-red-100 p-2 sm:p-3 rounded-full transition-all duration-300"
          onClick={removeFromCart}
        >
          <FcDeleteDatabase size={28} />
        </div>
      </div>

      {/* Separator Line */}
      <div className="my-4 sm:my-6">
        <hr className="border-t-2 border-gray-200" />
      </div>
    </div>
  );
};

export default CartItem;
