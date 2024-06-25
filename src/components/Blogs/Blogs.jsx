import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../../api.jsx";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import styles from "./Blogs.module.css";
import defaultImage from '/default_image.webp'

const Blogs = () => {

    const { data, error, isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: fetchBlogs,
    })

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <ErrorMessage message={error.message} />;
    }

    return(
        <div className={styles.blogsContainer}>
            {data.map((blog) => (
                <div key={blog._id} className={styles.blogsCard}>
                    <h2 className={styles.blogsTitle}><Link to={`/blog/${blog._id}`}>{blog.title}</Link></h2>
                    {blog.image ? <img src={blog.image} alt={blog.alt} className={styles.blogsImage} /> : <img src={defaultImage} alt="default Image" className={styles.blogsImage} />}
                </div>
            ))}
        </div>
    );
};

export default Blogs;