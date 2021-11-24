import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ onSubmit }) {
    const [actualStep, setActualStep] = useState(0);
    const [colletedData, setData] = useState({});

    useEffect(() => {
        if (actualStep === forms.length - 1) {
            onSubmit(colletedData);
        }
    });

    const dataCollector = (data) => {
        setData({ ...colletedData, ...data });
        next();
    };

    const next = () => {
        setActualStep(actualStep + 1);
    };

    const forms = [
        <DadosUsuario
            onSubmit={dataCollector}
        />,
        <DadosPessoais
            onSubmit={dataCollector}
        />,
        <DadosEntrega onSubmit={dataCollector} />,
        <Typography variant="h5" align="center">Obrigado pelo Cadastro</Typography>
    ];

    return <>
        <Stepper activeStep={actualStep}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {forms[actualStep]}
    </>;
}

export default FormularioCadastro;