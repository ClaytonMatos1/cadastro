import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

function App() {
    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
            <FormularioCadastro />
        </Container>
    );
}

export default App;
