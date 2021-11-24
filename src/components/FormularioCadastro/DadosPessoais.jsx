import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import { useState, useContext } from "react";
import Validates from "../../contexts/validates";

function DadosPessoais({ onSubmit }) {
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

    const validate = useContext(Validates);
    const _isRequiredName = (ev) => {
        ev.stopPropagation();
        const checkValid = validate.text(name);
        setErrors({
            ...errors,
            name: checkValid
        });
    };

    const _isRequiredSurName = (ev) => {
        ev.stopPropagation();
        const checkValid = validate.text(surName);
        setErrors({
            ...errors,
            surName: checkValid
        });
    };

    const _validateDocument = (ev) => {
        ev.stopPropagation();
        const checkValid = validate.document(document);
        setErrors({
            ...errors,
            document: checkValid
        });
    };

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

    const _handlerPromotion = (ev) => {
        ev.stopPropagation();
        setPromotion(ev.target.checked);
    };

    const _handlerNewsLetr = (ev) => {
        ev.stopPropagation();
        setNewsLetr(ev.target.checked);
    };

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
        if (_isValid()) onSubmit({ name, surName, document, promotion, newsLetr });
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
            >Próximo
            </Button>
        </form>
    );
}

export default DadosPessoais;