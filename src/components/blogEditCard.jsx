import { Link } from "react-router-dom";
import dateFormatter from "./dateFormatter";

function BlogEditCard({ data }) {
    const formattedDate = dateFormatter({ inputDate: data.time_stamp });

    return (
        <div className="w-full border-2 rounded-lg flex flex-col xl:flex-row bg-violet-50 p-4 shadow-lg">
            <div className="w-full xl:w-1/4 flex justify-center items-center mb-4 xl:mb-0">
                <img className="max-h-40 rounded-lg object-cover" src={data.imgUrl} alt="Special Pork Meat" />
            </div>
            <div className="w-full xl:w-1/3 px-4 flex flex-col items-center xl:items-start justify-center">
                <h2 className="text-2xl xl:text-3xl font-bold text-center xl:text-left mb-2">{data.title}</h2>
                <p className="text-center xl:text-left text-gray-600">{data.category} - {data.time_read} min read - {formattedDate}</p>
            </div>
            <div className={`w-full xl:w-1/6 flex items-center justify-center xl:justify-start px-4 ${data.published ? "text-green-600" : "text-red-500"} mb-4 xl:mb-0`}>
                <span className="font-semibold">{data.published ? "Published" : "Unpublished"}</span>
            </div>
            <div className="w-full xl:w-1/3 flex items-center justify-center xl:justify-end px-4 space-x-4">
                <Link to={`/editBlog/${data._id}`} className="w-full xl:w-auto">
                    <button className="w-full xl:w-auto px-6 py-2 text-lg text-white bg-yellow-500 border border-yellow-600 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition duration-300 ease-in-out">
                        Edit Blog
                    </button>
                </Link>
                <Link to={`http://localhost:5173/blog/${data._id}`} className="w-full xl:w-auto">
                    <button className="w-full xl:w-auto px-6 py-2 text-lg text-white bg-blue-500 border border-blue-600 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-300 ease-in-out">
                        View Blog
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default BlogEditCard;