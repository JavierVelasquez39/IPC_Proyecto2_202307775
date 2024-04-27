import { Input , Button} from "@nextui-org/react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import useUserStore from "../hooks/userStore";
import Swal from 'sweetalert2';

export default function Login() {
    const setUser = useUserStore((state) => state.setUser);
    const [formData, setFormData] = useState({ email:"", password:"" });
    const [redirectPath, setRedirectPath] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Aquí se realiza la petición a la API
    
        try {
            const response = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                alert("Error en la petición");
                throw new Error("Error en la petición");
            }
            const data = await response.json();
            Swal.fire({
                title: "¡Inicio de sesión exitoso!",
                text: "¡Bienvenido!",
                icon: "success",
                timer: 5000, // Tiempo en que se cierra el mensaje
                showConfirmButton: false, // Oculta el botón de confirmación
            }).then(() => { // Esta función se ejecuta cuando se cierra el mensaje
                
                setUser(data?.name);
    
                // Almacenar el token de autenticación en el almacenamiento local
                localStorage.setItem('authToken', data.token);            
    
                if (data?.type == "admin") {
                    setRedirectPath("/admin");
                } else {
                    setRedirectPath("/foro"); // Redirigir a los usuarios a la página de foros
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    if (redirectPath) {
        return <Navigate to = {redirectPath} />;
    }

    return (
        <main className="flex justify-center flex-col items-center h-screen bg-gray-900 p-4 rounded-lg">
            <div className="my-8">
                <h1 className="font-bold text-3xl text-teal-500">Iniciar Sesión</h1>
            </div>
            <div>
                <form
                 onSubmit={handleSubmit} 
                 className="flex gap-8 justify-center items-center"    
                >
                    <Input 
                        type="number"
                        label="Código"
                        name="codigo"
                        value={formData.codigo}
                        onChange={handleChange} 
                        autoComplete="off"
                    />
                    <Input
                    type="password"
                    label="Contraseña"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    />
                    <Button type="submit" color="success">
                        Login
                    </Button>

                </form>
            </div>
        </main>
    )
}