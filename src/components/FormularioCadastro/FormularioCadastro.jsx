import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import { useState } from "react";

function FormularioCadastro() {
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [document, setDocument] = useState('');

    const _handlerName = (ev) => {
        ev.stopPropagation();
        setName(ev.target.value);
    };

    const _handlerSurname = (ev) => {
        ev.stopPropagation();
        setSurName(ev.target.value);
    };

    const _handlerDocument = (ev) => {
        ev.stopPropagation();
        setDocument(ev.target.value);
    };

    return (
        <form onSubmit={(ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            console.log(name, surName, document);
        }}>
            <TextField id="name" label="Nome" variant="outlined" margin="normal" fullWidth value={name} onChange={_handlerName} />
            <TextField id="surname" label="Sobrenome" variant="outlined" margin="normal" fullWidth value={surName} onChange={_handlerSurname} />
            <TextField id="document" label="CPF" variant="outlined" margin="normal" fullWidth value={document} onChange={_handlerDocument} />

            <FormControlLabel label="Promoções" control={<Switch name="promotion" color="primary" defaultChecked />} />
            <FormControlLabel label="Novidades" control={<Switch name="newsletr" color="primary" defaultChecked />} />

            <Button
                variant="contained"
                color="primary"
                type="submit"
            >Cadastrar
            </Button>
        </form>
    );
}

export default FormularioCadastro;