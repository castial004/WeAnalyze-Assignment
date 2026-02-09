import { FaHeart, FaBookmark } from "react-icons/fa6";
export function Userbar() {
    return (
        <>
            <div className="container mx-auto sticky top-16 z-10 bg-white py-2">
                <div className="flex items-center gap-4">
                    <img
                        src="https://i.pravatar.cc/40?img=1"
                        alt="Danny Amacher"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-gray-900">Danny Amacher</span>
                        <span className="text-green-600 font-medium">Available for work</span>
                        <button className="text-gray-500 hover:text-gray-700 cursor-pointer">Follow</button>
                    </div>
                    <div className="flex-grow" />

                    <div className="w-10 h-10 flex items-center justify-center cursor-pointer  rounded-full  transition">
                        <FaHeart className="text-black hover:text-gray-500 text-lg" />
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center cursor-pointer transition">
                        <FaBookmark className="text-black hover:text-gray-500 text-lg" />
                    </div>

                    <button className="bg-black text-white rounded-full px-5 py-3 hover:bg-gray-800 hover:cursor-pointer">
                        Work with me
                    </button>
                </div>
            </div>
        </>
    );
}
