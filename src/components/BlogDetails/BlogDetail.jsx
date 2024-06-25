import {useParams, Link, useNavigate} from "react-router-dom";
import styles from "./BlogDetail.module.css";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchBlogById, deleteBlog } from "../../api.jsx";
import defaultImage from '/default_image.webp'
import Loading from "../Loading/Loading.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import {useState} from "react";
import Modal from "../Modal/Modal.jsx";



const BlogDetails = () => {
    const { blogId } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const token = localStorage.getItem('token');
    const currentUserId = localStorage.getItem('userId');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data, error, isLoading } = useQuery({
        queryKey: ['blog', blogId],
        queryFn: () => fetchBlogById(blogId),
    })


    const mutation = useMutation({
        mutationFn: () => deleteBlog(blogId, token),
        onSuccess: () => {
            queryClient.invalidateQueries('blogs');
            navigate('/blogs');
        }
    });

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <ErrorMessage message={error.message} />
    }

    const handleDelete = () => {
        mutation.mutate();
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const confirmDelete = () => {
        closeModal();
        handleDelete();
    };

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
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{__html: data.content}}
            ></div>
            <span className={styles.views}>Views: {data.views}</span>
            {data.author._id === currentUserId && (
                <button className={styles.deleteButton} onClick={openModal}>Delete Blog</button>
            )}
            <Link className={styles.backLink} to="/blogs">Back</Link>
            <Modal
                open={isModalOpen}
                title="Confirm Delete"
                message="Are you sure you want to delete this blog?"
                onClose={closeModal}
                onConfirm={confirmDelete}
            />
        </div>
    );
};

export default BlogDetails;