import Footer from "components/Footer";
import Navbar from "components/Navbar";

const BlogPage = () => {
    return (
        <>
            <div className="page-cont">
                <Navbar activePage='blog'/>
            </div>
            <Footer/>
        </>

    )
}

export default BlogPage