import { Button, TextField } from "@material-ui/core";
import { useContext, useState } from "react";
import Validates from "../../contexts/validates";
import UseErrors from "../../hooks/useErrors";

function DadosUsuario({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const validate = useContext(Validates);
    const [errors, validatePassword] = UseErrors(validate);

    const _isValid = () => {
        for (let field in errors) {
            if (!errors[field].valid) {
                return false;
            }
        }
        return true;
    };

    const _submitForm = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (_isValid()) onSubmit({ email, password });
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
                name="password"
                label="senha"
                type="password"
                required
                variant="outlined"
                margin="normal"
                fullWidth
                value={password}
                onBlur={validatePassword}
                error={!errors.password.valid}
                helperText={errors.password.text}
                onChange={_handlerPassword}
            />

            <Button
                variant="contained"
                color="primary"
                type="submit"
            >Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;