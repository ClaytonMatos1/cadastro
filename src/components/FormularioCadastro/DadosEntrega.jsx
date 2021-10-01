import { Button, TextField } from "@material-ui/core";

function DadosEntrega({ onSubmit }) {
    const _submitForm = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        onSubmit({});
    };

    return (
        <form onSubmit={_submitForm}>
            <TextField
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
            />
            <TextField
                id="address"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                id="number"
                label="Número"
                type="number"
                variant="outlined"
                margin="normal"
            />
            <TextField
                id="state"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
            />
            <TextField
                id="city"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
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