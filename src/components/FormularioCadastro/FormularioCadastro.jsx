import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import { useState } from "react";

function FormularioCadastro({onSubmit, validateText, validateDocument}) {
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [document, setDocument] = useState('');
    const [promotion, setPromotion] = useState(true);
    const [newsLetr, setNewsLetr] = useState(true);
    const [errors, setErrors] = useState({
        name: {
            valid: true,
            text: ''
        },
        surName: {
            valid: true,
            text: ''
        },
        document: {
            valid: true,
            text: ''
        }
    });

    const _isRequiredName = (ev) => {
        ev.stopPropagation();
        const checkValid = validateText(name);
        setErrors({
            ...errors,
            name: checkValid
        });
    };

    const _handlerName = (ev) => {
        ev.stopPropagation();
        setName(ev.target.value);
    };

    const _isRequiredSurName = (ev) => {
        ev.stopPropagation();
        const checkValid = validateText(surName);
        setErrors({
            ...errors,
            surName: checkValid
        });
    };

    const _handlerSurname = (ev) => {
        ev.stopPropagation();
        setSurName(ev.target.value);
    };

    const _validateDocument = (ev) => {
        ev.stopPropagation();
        const checkValid = validateDocument(document);
        setErrors({
            ...errors,
            document: checkValid
        });
    };

    const _handlerDocument = (ev) => {
        ev.stopPropagation();
        setDocument(ev.target.value);
    };

    const _handlerPromotion = (ev) => {
        ev.stopPropagation();
        setPromotion(ev.target.checked);
    };

    const _handlerNewsLetr = (ev) => {
        ev.stopPropagation();
        setNewsLetr(ev.target.checked);
    };

    const _submitForm = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        onSubmit({name, surName, document, promotion, newsLetr});
    };

    return (
        <form onSubmit={_submitForm}>
            <TextField
                id="name"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
                value={name}
                onBlur={_isRequiredName}
                error={!errors.name.valid}
                helperText={errors.name.text}
                onChange={_handlerName}
            />
            <TextField
                id="surname"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
                value={surName}
                onBlur={_isRequiredSurName}
                error={!errors.surName.valid}
                helperText={errors.surName.text}
                onChange={_handlerSurname}
            />
            <TextField
                id="document"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
                value={document}
                onBlur={_validateDocument}
                error={!errors.document.valid}
                helperText={errors.document.text}
                onChange={_handlerDocument}
            />

            <FormControlLabel
                label="Promoções"
                control={<Switch name="promotion" color="primary" checked={promotion} onChange={_handlerPromotion} />}
            />
            <FormControlLabel
                label="Novidades"
                control={<Switch name="newsletr" color="primary" checked={newsLetr} onChange={_handlerNewsLetr} />}
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

export default FormularioCadastro;