// Datos del usuario en el formulario (Nombre, Apellido, Email, Teléfono)

export default function Datos(){
    return (
        <>
            <label htmlFor="forename">Nombre</label>
            <input type="text" id="forename" maxLength={50} required></input>
            <label htmlFor="surnarme">Apellido</label>
            <input type="text" id="surname" maxLength={50} required></input>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required></input>
            <label htmlFor="phoneNumber">Teléfono</label>
            <input type="tel" id="phoneNumber" minLength={10} maxLength={15} pattern='[0-9]{10,}' required></input>
        </>
    )
}