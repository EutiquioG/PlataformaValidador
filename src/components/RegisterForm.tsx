import { useState } from "react";

interface FormData {
    nombre: string;
    email: string;
    password: string;
    confirmPassword: string;
}

function RegisterForm() {
    const [formData, setFormData] = useState<FormData>({
        nombre: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<any>({});

    const validate = (name: string, value: string) => {
        let error = "";

        switch (name) {
            case "nombre":
                if (value.length < 3)
                    error = "El nombre debe tener mínimo 3 caracteres.";
                break;

            case "email":
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!regex.test(value))
                    error = "Correo inválido.";
                break;

            case "password":
                if (value.length < 8)
                    error = "Mínimo 8 caracteres.";
                break;

            case "confirmPassword":
                if (value !== formData.password)
                    error = "Las contraseñas no coinciden.";
                break;
        }

        setErrors({ ...errors, [name]: error });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
        validate(name, value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (Object.values(errors).every((err) => err === "")) {
            alert("Usuario registrado correctamente ✅");
        } else {
            alert("Hay errores en el formulario ❌");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Crear Cuenta</h2>

            <input name="nombre" placeholder="Nombre" onChange={handleChange} />
            <span>{errors.nombre}</span>

            <input name="email" placeholder="Correo" onChange={handleChange} />
            <span>{errors.email}</span>

            <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} />
            <span>{errors.password}</span>

            <input type="password" name="confirmPassword" placeholder="Confirmar Contraseña" onChange={handleChange} />
            <span>{errors.confirmPassword}</span>

            <button type="submit">Registrarse</button>
        </form>
    );
}

export default RegisterForm;