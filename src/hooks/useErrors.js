import { useState } from "react";

function UseErrors(validate) {
    const [errors, setErrors] = useState({ password: { valid: true, text: ''} })
    function validatePassword (ev) {
        ev.stopPropagation();
        const { name, value } = ev.target;
        const checkValid = validate[name](value);
        setErrors({
            ...errors,
            password: checkValid
        });
    };

    return [errors, validatePassword];
}

export default UseErrors;
