import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

function App() {
    const _onSend = (data) => {
        console.log(data);
    };

    const _validateText = (text) => {
        if (!text.length) {
            return {
                valid: false,
                text: 'Campo obrigatório'
            }
        } else {
            return {
                valid: true,
                text: ''
            }
        }
    };

    const _validateDocument = (num) => {
        if (num.length !== 11) {
            return {
                valid: false,
                text: 'CPF deve ter 11 dígitos'
            }
        } else {
            return {
                valid: true,
                text: ''
            }
        }
    };

    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
            <FormularioCadastro
                onSubmit={_onSend}
                validateText={_validateText}
                validateDocument={_validateDocument}
            />
        </Container>
    );
}

export default App;
