import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import useUserStore from "../hooks/userStore";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #1a202c;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 300px;
  margin: auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #38b2ac;
  color: white;
  cursor: pointer;
`;

const Error = styled.p`
  color: red;
`;

const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  animation: ${slideIn} 0.5s ease-in-out;
`;

export default function NuevoForo({ setPosts }) {
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [anonymous, setAnonymous] = useState(false);
    const [error, setError] = useState(null);
    const user = useUserStore();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('User not loaded');
            return;
        }

        const body = {
            description,
            userCode: user.codigo,
            category,
            image, 
            anonymous,
        };

        try {
            const response = await fetch('http://localhost:3000/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }

            const newPost = await response.json();

            if (typeof setPosts === 'function') {
                setPosts(prevPosts => [...prevPosts, newPost]);
            }

            Swal.fire({
                title: "¡Post creado con éxito!",
                text: "",
                icon: "success",
                timer: 5000,
                showConfirmButton: false,
            }).then(() => {
                setTimeout(() => {
                    navigate('/foro');
                }, 2000);
            });
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input as="textarea" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción del post" required />
                <Input as="select" value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Selecciona una categoría</option>
                    <option value="Anuncio Importante">Anuncio Importante</option>
                    <option value="Divertido">Divertido</option>
                    <option value="Académico">Académico</option>
                    <option value="Variedad">Variedad</option>
                </Input>
                <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
                <label>
                    Publicar de forma anónima
                    <Input type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />
                </label>
                <Button type="submit">Publicar</Button>
                {error && <Error>{error}</Error>}
            </Form>
        </Container>
    );
}