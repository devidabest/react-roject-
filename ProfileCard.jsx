import { IoIosMore } from "react-icons/io";  
import React from "react";  
import Image from "../assets/image.jpeg"; // Adjust path to go up one directory to reach 'assets'  

export default function Profile() {  
  return (  
    <div className="flex items-center w-full p-4 bg-gray-100 rounded-md shadow-md">  
      {/* Profile Image */}  
      <img  
        src={Image} // Use the imported image here  
        alt="Profile picture"  
        className="w-16 h-16 rounded-full object-cover"  
      />  

      {/* Profile Details */}  
      <div className="flex flex-col ml-4">  
        <h1 className="text-lg font-semibold text-gray-800">Amine</h1>  
        <p className="text-sm text-gray-600">amine@gmail.com</p>  
      </div>  

      {/* More Icon */}  
      <IoIosMore className="ml-auto text-2xl text-gray-500 cursor-pointer hover:text-gray-700" />  
    </div>  
  );  
}