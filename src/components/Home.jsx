import img from '../assets/Images/Frame 560.png'

const SidebarWithBanner = () => {
    return (
        <div className="flex gaa] justify-around">
            <div className="w-56 -100 p-4 border-r-2 border-gray-300">
                <ul className="space-y-4 text-gray-700">
                    <li className="font-medium hover:text-blue-500 cursor-pointer">Woman's Fashion</li>
                    <li className="font-medium hover:text-blue-500 cursor-pointer">Men's Fashion</li>
                    <li className="font-medium hover:text-blue-500 cursor-pointer">Electronics</li>
                    <li className="font-medium hover:text-blue-500 cursor-pointer">Home & Lifestyle</li>
                    <li className="font-medium hover:text-blue-500 cursor-pointer">Medicine</li>
                    <li className="font-medium hover:text-blue-500 cursor-pointer">Sports & Outdoor</li>
                    <li className="font-medium hover:text-blue-500 cursor-pointer">Baby's & Toys</li>
                    <li className="font-medium hover:text-blue-500 cursor-pointer">Groceries & Pets</li>
                    <li className="font-medium hover:text-blue-500 cursor-pointer">Health & Beauty</li>

                </ul>
            </div>
            <div id='imagegediv'>
                <img className='mt-6' src={img} />
            </div>
        </div>

    )
}

export default SidebarWithBanner