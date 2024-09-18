// Formulario registro del usuario

import Datos from '../form/Datos';
import Password from '../form/Password';
import ButtonSubmit from '../form/ButtonSubmit';

export default function Form(){
    
    const handleSubmit = () => {
        confirm("Bienvenido Usuario")
    }; 
    
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>DATOS A COMPLETAR</legend>
                <Datos />
                <Password />
                <ButtonSubmit />
            </fieldset>
        </form>
    )
}
