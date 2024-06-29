import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function BlogCard({ data }) {
    return (
        <Link to={`/blog/1`}>
            <div className="blog-card bg-pink-500 max-w-sm">
                <div>
                    <img className="max-h-[200px]" src={data.blogImg} alt="Luffy with Meat" />
                </div>
                <div className="px-2">
                    <p id="blog-category" className="py-2 pb-1">{data.blogCategory}</p>
                    <h1 id="blog-title" className="text-2xl font-bold">{data.blogTitle}</h1>
                    <p id="blog-time" className="text-sm pt-2 pb-1 font-semibold">2min read</p>
                    <p id="blog-desc" className="text-lg text leading-tight pb-3 pt-0">{data.blogDesc}</p>
                    <p id="blog-date" className="text-base">17th Jul 2024</p>
                    <div className="edit-button my-2">
                        <button className=" w-full px-5 py-2.5 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 ease-in-out transform hover:scale-105">
                            Edit Blog
                        </button>
                    </div>

                </div>

            </div>
        </Link>
    )
}

export default BlogCard