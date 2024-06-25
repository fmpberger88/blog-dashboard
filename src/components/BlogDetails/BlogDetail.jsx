import { useParams, Link } from "react-router-dom";
import styles from "./BlogDetail.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogById } from "../../api.jsx";
import defaultImage from '/default_image.webp'
import Loading from "../Loading/Loading.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";


const BlogDetails = () => {
    const { blogId } = useParams();

    const { data, error, isLoading } = useQuery({
        queryKey: ['blog', blogId],
        queryFn: () => fetchBlogById(blogId),
    })

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <ErrorMessage message={error.message} />
    }

    return (
        <div className={styles.blogContainer}>
            <h1 className={styles.blogTitle}>{data.title}</h1>
            <span className={styles.author}>{data.author.first_name} {data.author.family_name}</span>
            <span className={styles.published}>Published on: {new Date(data.createdAt).toLocaleDateString()}</span>
            {data.image ?
                <img
                    src={data.image}
                    alt={data.title}
                    className={styles.blogImage}
                /> :
                <img
                    src={defaultImage}
                    alt="Default Image"
                    className={styles.blogImage}
                />}
            <p className={styles.content}>{data.content}</p>
            <span className={styles.views}>Views: {data.views}</span>
            <Link className={styles.backLink} to="/blogs">Back</Link>
        </div>
    );
};

export default BlogDetails;