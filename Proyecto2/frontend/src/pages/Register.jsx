import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
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

const facultiesAndCareers = {
    facultad1: ['Sistemas', 'Quimica', 'Industrial', 'Civil', 'Electrónica'],
    facultad2: ['Medico cirujano', 'Veterinario', 'Odontologo'],
    facultad3: ['Arquitectura', 'Diseño grafico', 'Diseño de interiores'],
    facultad4: ['Admin. de empresas', 'Economia', 'Auditoria'],
    facultad5: ['Periodismo', 'Pubilicidad', 'Locucion'],
};

export default function Register() {
    const [code, setCode] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [faculty, setFaculty] = useState('');
    const [career, setCareer] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Aquí deberías validar los datos del formulario

        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    codigo: code,
                    nombres: firstName,
                    apellidos: lastName,
                    genero: gender,
                    facultad: faculty,
                    carrera: career,
                    email: email,
                    password: password,
                    type: "user", 
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }

            Swal.fire({
                title: "¡Registro exitoso!",
                text: "¡Bienvenido!",
                icon: "success",
                timer: 5000, // Cierra el mensaje después de 5000 milisegundos (5 segundos)
                showConfirmButton: false, // Oculta el botón de confirmación
            }).then(() => { // Esta función se ejecuta cuando se cierra el mensaje
                setIsRegistered(true);
            });
        } catch (error) {
            setError(error.message);
        }
    };

    if (isRegistered) {
        return <Navigate to="/login" />;
    }

    return (
        <Container> 
            <Form onSubmit={handleSubmit}>
            <Input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Código USAC/ Carnet" required />
            <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Nombres" required />
            <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Apellidos" required />
            <Input as="select" value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">Selecciona tu género</option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
            </Input>
            <Input as="select" value={faculty} onChange={(e) => setFaculty(e.target.value)} required>
                <option value="">Selecciona tu facultad</option>
                <option value="facultad1">Ingeniería</option>
                <option value="facultad2">Medicina</option>
                <option value="facultad3">Arquitectura</option>
                <option value="facultad4">Ciencias económicas</option>
                <option value="facultad5">Ciencias de la comunicación</option>
            </Input>
            <Input as="select" value={career} onChange={(e) => setCareer(e.target.value)} required>
                <option value="">Selecciona tu carrera</option>
                {facultiesAndCareers[faculty]?.map(careerOption => (
                    <option key={careerOption} value={careerOption}>{careerOption}</option>
                ))}
            </Input>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" required />
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
            <Button type="submit">Registrarse</Button>
            {error && <Error>{error}</Error>}
        </Form>
        </Container> 
    );
}