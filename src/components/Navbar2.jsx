import { FaMagnifyingGlass } from "react-icons/fa6";

export function Navbar2() {
  return (
    <nav className="flex bg-white py-5 gap-4 items-center pl-10 sticky top-0 z-20 h-16">
      <h1 className="text-3xl italic font-bold hover:cursor-pointer">Dribble</h1>

      
      <div className="flex bg-gray-200 rounded-full w-120 items-center px-2 hover:bg-white hover:outline-2 hover:outline-pink-100">
        <input
          className="bg-transparent px-3 py-2 outline-none"
          placeholder="What are we looking for?"
        />
        <div className="flex ml-auto">
          <select className="outline-none bg-transparent mr-2 hover:text-gray-600 w-15">
            <option>Shots</option>
            <option>Designer</option>
            <option>Services</option>
          </select>

          <div className="w-10 h-10 my-1 bg-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-400">
            <FaMagnifyingGlass className="text-white text-lg" />
          </div>
        </div>
      </div>


      <div className="flex gap-10 ml-10">
        <div className="relative group">
          <button className="font-bold hover:text-gray-800 cursor-pointer transition">
            Explore<select></select>
          </button>


          <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-10">
            <ul className="flex flex-col">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Community</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Events</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Resources</li>
            </ul>
          </div>
        </div>


        <div className="relative group">
          <button className="font-bold hover:text-gray-800 cursor-pointer transition">
            Hire Talent <select></select>
          </button>
          <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200">
            <ul className="flex flex-col">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Post Resume</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Job Listings</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tips & Guides</li>
            </ul>
          </div>
        </div>

        <div className="relative group">
          <button className="font-bold hover:text-gray-800 cursor-pointer transition">
            Get Hired <select></select>
          </button>
          <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200">
            <ul className="flex flex-col">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Post Resume</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Job Listings</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tips & Guides</li>
            </ul>
          </div>
        </div>
        <div className="relative group">
          <button className="font-bold hover:text-gray-800 cursor-pointer transition">
            Community <select></select>
          </button>
          <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200">
            <ul className="flex flex-col">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Post Resume</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Job Listings</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tips & Guides</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ml-auto mr-17 flex gap-2">
        <button className="rounded-full px-5 py-3 hover:text-gray-700 hover:cursor-pointer font-bold">
          Signup
        </button>
        <button className="bg-black text-white rounded-full px-5 py-3 hover:bg-gray-800 hover:cursor-pointer font-bold">
          Login
        </button>
      </div>
    </nav>
  );
}
