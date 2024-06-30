import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AddBlogButton from "./addBlogButton";
import BlogEditCard from "./blogEditCard";
import LoadingComponent from "./loadingComponent";

function BlogMain() {
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/blog`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    setBlogData(data);
                    setLoading(false);
                } else {
                    console.error('Error fetching data');
                }
            } catch (error) {
                console.error('Network error:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return (<LoadingComponent />);
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold py-4">Published Blogs</h1>
                <AddBlogButton />
            </div>
            <section className="py-7 bg-gray-100">
                <div className="container mx-auto px-4 xl:max-w-[70%] md:max-w-[80%]">
                    <div className="flex flex-wrap justify-center gap-5">
                        {blogData.map((data, index) => {
                            return (
                                <BlogEditCard key={index} data={data} />
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogMain;