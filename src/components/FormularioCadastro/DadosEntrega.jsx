import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

function DadosEntrega({ onSubmit }) {
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    const _submitForm = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        onSubmit({ cep, address, number, state, city });
    };

    const _handlerCEP = (ev) => {
        ev.stopPropagation();
        setCep(ev.target.value);
    };

    const _handlerAddress = (ev) => {
        ev.stopPropagation();
        setAddress(ev.target.value);
    };

    const _handlerNumber = (ev) => {
        ev.stopPropagation();
        setNumber(ev.target.value);
    };

    const _handlerState = (ev) => {
        ev.stopPropagation();
        setState(ev.target.value);
    };

    const _handlerCity = (ev) => {
        ev.stopPropagation();
        setCity(ev.target.value);
    };

    return (
        <form onSubmit={_submitForm}>
            <TextField
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
                value={cep}
                onChange={_handlerCEP}
            />
            <TextField
                id="address"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                value={address}
                onChange={_handlerAddress}
            />
            <TextField
                id="number"
                label="Número"
                type="number"
                variant="outlined"
                margin="normal"
                value={number}
                onChange={_handlerNumber}
            />
            <TextField
                id="state"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
                value={state}
                onChange={_handlerState}
            />
            <TextField
                id="city"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                value={city}
                onChange={_handlerCity}
            />

            <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
            >Finalizar Cadastro
            </Button>
        </form>
    );
}

export default DadosEntrega;