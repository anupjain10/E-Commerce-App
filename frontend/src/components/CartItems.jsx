import minus_icon from "../assets/minus.png";
import all_Product from "../assets/all_Product";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { cartItem, removeFromCart, getTotalCartAmount, getTotalCartItem } =
    useContext(ShopContext);

  const navigate = useNavigate();

  const SHIPPING_FEE = 20;

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const totalMRP = getTotalCartAmount();
  const totalItems = getTotalCartItem();
  const shipping = totalItems > 0 ? SHIPPING_FEE : 0;
  const totalAmount = totalMRP + shipping - discount;

  const applyPromo = () => {
    if (promoCode.toLowerCase() === "save10") {
      setDiscount(10);
      toast.success("Promo applied! $10 discount");
    } else {
      toast.error("Invalid promo code");
    }
  };

  const handleSubmit = () => {
    if (totalItems === 0) {
      toast.error("Cart is empty!");
      return;
    }
    toast.success("Order placed successfully", {autoClose:1500});
    setTimeout(()=>{
      navigate("/");
    }, 1700)
   ;
  };

  return (
    <div className="max-w-6xl mx-auto my-16 px-4">
      {/* Table Header */}
      <ul className="hidden sm:grid-cols-[1fr_2fr_1fr_1fr_1fr] gap-4 text-lg font-semibold text-gray-700 py-4 border-b">
        <li>Product</li>
        <li>Title</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Remove</li>
      </ul>

      {/* Cart Items */}
      <div className="space-y-4 mt-4 p-4">
        {all_Product?.map((item) => {
          if (cartItem[item.id] > 0) {
            return (
              <div
                key={item.id}
                className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center py-4 px-2 bg-white rounded-lg shadow-sm border"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-lg hidden sm:block"
                />

                <p className="font-medium">{item.name}</p>
                <p className="font-semibold">${item.new_price}</p>

                <div className="ml-5 flex items-center">
                  <span className="h-10 w-10 flex items-center justify-center border rounded-md text-lg">
                    {cartItem[item.id]}
                  </span>
                </div>

                <img
                  onClick={() => removeFromCart(item.id)}
                  src={minus_icon}
                  alt="Remove item from cart"
                  className="h-5 w-5 ml-8 cursor-pointer opacity-70 hover:opacity-100 transition"
                />
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Summary Section */}
      <div className="p-4 flex flex-col lg:flex-row justify-between mt-16 gap-10">
        {/* Price Details */}
        <div className="bg-white border rounded-lg p-6 w-full max-w-md shadow">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Price Details
          </h1>

          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Total MRP</p>
              <p>${totalMRP}</p>
            </div>

            <div className="flex justify-between">
              <p>Shipping</p>
              <p>${shipping}</p>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-green-600">
                <p>Discount</p>
                <p>- ${discount}</p>
              </div>
            )}

            <div className="h-px bg-gray-300"></div>

            <div className="flex justify-between text-lg font-semibold">
              <p>Total Amount</p>
              <p>${totalAmount}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={totalItems === 0}
            aria-disabled={totalItems === 0}
            className={`w-full mt-6 h-12 text-white font-semibold rounded-full transition ${
              totalItems === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            PLACE ORDER
          </button>
        </div>

        {/* Promo Section */}
        <div className="bg-white border rounded-lg p-6 w-full max-w-md shadow">
          <p className="text-gray-600">Have a promo code?</p>

          <input
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="w-full h-11 px-4 mt-3 border bg-gray-100 rounded-md outline-none"
          />

          <button
            onClick={applyPromo}
            className="w-full mt-4 h-11 bg-gray-900 text-white rounded-md font-medium hover:bg-black/80 transition"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
