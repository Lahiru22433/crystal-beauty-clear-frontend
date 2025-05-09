import { Link } from "react-router-dom";

export default function Header() {
  return(
    <header className="w-full h-[70px] flex justify-center items-center bg-gray-200">
      <div className=" w-[500px] h-full flex justify-evenly items-center text-pink-400 text-xl">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/rewiews">Reviews</Link>
      </div>
      
    </header>
  )
}