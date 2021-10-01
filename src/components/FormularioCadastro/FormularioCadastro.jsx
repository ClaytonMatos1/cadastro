import { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ onSubmit, validateText, validateDocument }) {
    const [actualStep, setActualStep] = useState(0);
    const forms = [
        <DadosUsuario onSubmit={next} />,
        <DadosPessoais
        onSubmit={next}
        validateText={validateText}
        validateDocument={validateDocument}
        />,
        <DadosEntrega
        onSubmit={onSubmit}
        />
    ];

    function next(params) {
        setActualStep(actualStep + 1);
    };

    return <>{ forms[actualStep] }</>;
}

export default FormularioCadastro;