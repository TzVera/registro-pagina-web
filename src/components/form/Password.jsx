// Datos relacionados a la contraseña del usuario (Contraseña, Confirmar contraseña)

export default function Password(){
    return (
        <>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" required></input>
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input type="password" id="confirmPassword" required></input>
        </>
    )
}




