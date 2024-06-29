import React, { useContext } from 'react';
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AddBlogButton = () => {
  const {authToken} = useContext(AuthContext);
  return (
    <section>
      <div className='flex justify-center py-5 text-lg'>
        <Link to="/addBlog">
          <button disabled={!authToken} className={`flex items-center ${authToken? 'bg-yellow-300 border-yellow-300 hover:bg-yellow-400 hover:border-yellow-400 focus:ring-yellow-500 active:bg-yellow-500 active:border-yellow-500' : 'bg-gray-300 border-gray-300 hover:bg-gray-400 hover:border-gray-400 focus:ring-gray-500 active:bg-gray-500 active:border-gray-500' }  border-2  rounded-lg px-4 py-2 text-gray-800  focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-150 ease-in-out`}>
            { authToken && "Add Blog"} {!authToken && "Login to Add Blog"} <FaPlus className='ml-2' />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default AddBlogButton;