// createPost.js

let posts = [
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
];

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