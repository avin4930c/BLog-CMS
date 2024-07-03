import AddBlogForm from "../components/addBlogForm";
import BlogMain from "../components/blogMain";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

function MainPage() {
    return (
        <>
            <NavBar />
            <BlogMain />
            <Footer backgroundColor="bg-white" />
        </>
    )
}

export default MainPage