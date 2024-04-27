import './Home.css'
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <main className='h-screen flex justify-center items-center bg-gray-900'>
  <div className='flex flex-col justify-center items-center bg-gray-800 p-4 rounded-lg'>
    <header className="mb-3">
      <h1 className='text-center font-bold text-4xl text-teal-500'>USocial</h1>
      <div className='flex justify-center'>
        <img src="https://cdn-icons-png.flaticon.com/512/3201/3201767.png" alt="Logo del foro" 
        className='w-1/3 h-auto max-w-xs'/>
      </div>
      <p className='text-center'>
        Bienvenido al foro.
      </p>
    </header>
    <section className= 'flex flex-col items-center my-4'>
      <div className='flex flex-col items-center mb-2'>
        <h2 className='font-bold'>Contacto de soporte</h2>
        <p>javierandresvelasquez36@gmail.com</p>
      </div>
      <div className="flex gap-5 my-5">
        <Link to="/login">
          <Button color="primary">Iniciar sesión</Button>
        </Link>
        <Link to="register">
          <Button color="secondary">Registrarse</Button>
        </Link>
        
      </div>
    </section>
    <footer className="flex gap-6 mt-2">
      <p>Javier Andrés Velásquez Bonilla</p>
      <p>202307775</p>
    </footer>
  </div>
</main>
  );
}
