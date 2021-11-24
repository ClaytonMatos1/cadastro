import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto';
import './App.css';
import { validateDocument, validatePassword, validateText } from './models/Cadastro';
import Validates from './contexts/validates';

import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

function App() {
    const _onSend = (data) => {
        console.log(data);
    };

    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
            <Validates.Provider value={{ document: validateDocument, password: validatePassword, text: validateText }}>
                <FormularioCadastro
                    onSubmit={_onSend}
                />
            </Validates.Provider>
        </Container>
    );
}

export default App;
