import { user } from "@nextui-org/react";

export let posts = [
    {
        id: 1,
        description: "Descripción del post",
        userCode: "12345678",
        category: "Divertido",
        image: "https://i.pinimg.com/originals/31/32/49/3132494956f70ed0d3855586ffa87b62.png", 
        anonymous: false,
        timestamp: new Date(),
        userid: 2,
        name: "Rodrigo",
        email: "rodriporon2@gmail.com",
        text: "Este es un post."
    },
    {
        id: 2,
        userid: 2,
        userCode: "12345679",
        name: "Rodrigo",
        category: "Categoría",
        image: "URL de la imagen",
        email: "rodriporon2@gmail.com",
        text: "Este es un nuevo post."
    }
]

posts = posts.map(post => ({
    user: {
        nombres: post.name,
        apellidos: post.apellidos,
        carrera: post.carrera,
        facultad: post.facultad,
        anonymous: post.anonymous,
    },
    category: post.category,
    description: post.description,
    image: post.image,
    createdAt: post.timestamp ? post.timestamp.toISOString() : null,
    likes: [], // Necesitas agregar los likes en tus datos actuales
    comments: [], // Necesitas agregar los comentarios en tus datos actuales
}));

export const getPosts = (req, res) => {
    return res.status(200).json(posts);
}

export const getPostsById = (req, res) => {
    const { id } = req.params;
    const post = posts.find(post => post.id === parseInt(id));

    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json(post);
}

export const createPost = (req, res) => {
    const { description, userCode, category, image, anonymous } = req.body;

    // Aquí debes validar los datos del post

    const newPost = {
        id: posts.length + 1, // Genera un nuevo ID para el post
        description,
        userCode,
        category,
        image,
        anonymous,
        timestamp: new Date(), // La fecha y hora de la publicación
    };
    posts.push(newPost);

    return res.status(200).json({ message: "Post created successfully", post: newPost });
};