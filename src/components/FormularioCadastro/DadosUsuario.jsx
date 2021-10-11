import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

function DadosUsuario({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const _submitForm = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        onSubmit({ email, password });
    };

    const _handlerEmail = (ev) => {
        ev.stopPropagation();
        setEmail(ev.target.value);
    };

    const _handlerPassword = (ev) => {
        ev.stopPropagation();
        setPassword(ev.target.value);
    };

    return (
        <form onSubmit={_submitForm}>
            <TextField
                id="email"
                label="email"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
                value={email}
                onChange={_handlerEmail}
            />
            <TextField
                id="password"
                label="senha"
                type="password"
                required
                variant="outlined"
                margin="normal"
                fullWidth
                value={password}
                onChange={_handlerPassword}
            />

            <Button
                variant="contained"
                color="primary"
                type="submit"
            >Cadastrar
            </Button>
        </form>
    );
}

export default DadosUsuario;