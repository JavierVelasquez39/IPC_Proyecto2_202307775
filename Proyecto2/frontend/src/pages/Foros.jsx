import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Post from "../components/Post";
import {Button} from "@nextui-org/react";

export default function AdminPage() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const getPosts = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/posts/get");
            if (!response.ok) {
                alert("Error en la petición");
                throw new Error("Error en la petición");
            }

            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    console.log(posts);

    const handleNewPost = () => {
        navigate('/foro/nuevo');
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen overflow-auto bg-gray-900 p-4 rounded-lg gap-10">
            <h1 className="text-teal-500 text-4xl font-bold">Bienvenido a USocial</h1>
            <p>Actúa con respeto y responsabilidad, ¡disfruta de este espacio!</p>
            <Button colorScheme="teal-500" variant="ghost" onClick={handleNewPost}>Crear nuevo post</Button>
        {
            posts.map((post) => (
                <Post 
                    key={post.id}
                    name={post.name}
                    email={post.email}
                    text={post.text}
                    category={post.category}
                    image={post.image}
                />
            ))
        }
        </main>
    );
}