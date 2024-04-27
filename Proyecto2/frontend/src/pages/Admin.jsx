import { useEffect, useState } from "react";
import Post from "../components/Post";
import useUserStore from "../hooks/userStore";
import FileUploader from "../components/FileUploader";
import DataTable from "../components/DataTable";

export default function AdminPage() {
    const user = useUserStore((state) => state.user);
    const [posts, setPosts] = useState([]);
    const [jsonData, setJsonData] = useState([]);

    const handleDataLoad = async (data) => {
        setJsonData(data);
        console.log('Data to send:', data);  // Agrega esta línea
        try {
            const response = await fetch('http://localhost:3000/api/users/bulk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const message = await response.text();
                console.error('Error message from server:', message);  // Agrega esta línea
                throw new Error('Error al enviar los datos al backend');
            }

            alert('Datos enviados al backend exitosamente');
        } catch (error) {
            console.error(error);
            alert('Error al enviar los datos al backend');
        }
    }

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

    return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 p-4 rounded-lg gap-10 overflow-auto pb-10">
        <h1 className="font-bold text-lg text-teal-500">Administrador - {user}</h1>
        <section className="flex flex-col gap-8 justify-center items-center p-6 bg-gray-800 rounded-md m-4">
            <h2 className="font-bold text-teal-500 text-2xl mb-4">Subir archivo</h2>
            <FileUploader onDataLoad={handleDataLoad} />
            <p className="text-white text-lg mb-4">Usuarios cargados:</p>
            <DataTable data={jsonData} />
        </section>
        <p>Estos son los posts:</p>
        {
            posts.map((post) => (
                <Post 
                    key={post._id}
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