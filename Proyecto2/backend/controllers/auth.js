let users = [
    {
      id: 1,
      codigo: "12345678",
      name: "Javier Andres",
      apellidos: "Velasquez",
      genero: "Masculino",
      facultad: "Ingeniería",
      carrera: "Ingeniería en Sistemas",
      email: "javierandresvelasquez36@gmail.com",
      password: "123456",
      type: "admin",
    },
    {
      id: 2,
      codigo: "87654321",
      name: "Usuario",
      apellidos: "Prueba",
      genero: "Femenino",
      facultad: "Ciencias",
      carrera: "Biología",
      email: "usuario@gmail.com",
      password: "123456",
      type: "user",
    },
  ]


const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const login = (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user?.email === email && user.password === password);

    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({ message: "Login successful", type: user?.type, name: user?.name,});
}

export const register = (req, res) => {
    const { codigo, nombres, apellidos, genero, facultad, carrera, email, password } = req.body;

    const user = users.find(user => user.codigo === codigo || user.email === email);

    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }

    if (!passwordRegex.test(password)) {
        return res.status(400).json({ message: "Password must have at least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 special character" });
    }

    const newUser = { codigo, nombres, apellidos, genero, facultad, carrera, email, password };
    users.push(newUser);

    return res.status(200).json({ message: "User registered successfully", user: newUser });
}

