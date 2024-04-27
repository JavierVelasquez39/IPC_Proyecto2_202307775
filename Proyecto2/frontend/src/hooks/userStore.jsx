import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create
  (persist((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    }),
    {
        id: 'user-storage',
        codigo: 'user-storage',
        name: 'user-storage',
        apellidos: 'user-storage',
        genero: 'user-storage',
        facultad: 'user-storage',
        carrera: 'user-storage',
        email: 'user-storage',
        password: 'user-storage',
        type: 'user-storage',
    })
); 
export default useUserStore;

