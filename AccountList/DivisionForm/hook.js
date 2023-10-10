import { useEffect, useState } from "react";
import { axios } from 'container/axios';

const initialForm = {
    numero: "",
    intitule: "",
    prefix: "",
    compte: null
}
export const useDivisionForm = () => {
    const [form, setForm] = useState({
        ...initialForm
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState({});

    const handleFieldValueChange = (field, e) => {
        let val = e?.target?.value;
        if (field === "compte") {
            val = e;
        }

        setForm({ ...form, [field]: val });
    }

    const numberCount = (number) => {
        let numberString = number.toString();
        let numberCharacters = numberString.length;
        if (numberCharacters === 1) {
            return "000"
        } else if (numberCharacters === 2) {
            return "00"
        } else if (numberCharacters === 3) {
            return "0"
        } else if (numberCharacters >= 4) {
            return ""
        }
    }

    const submitForm = () => {
        const url = 'api/accounting/compte-divisionnaires';
        // validationData(prefix, numero, setError, setNumeroError,setOhadaAccountError, setSuccess, url)
        let valid = true;
        let error = {};
        const required = ["compte", "numero", "intitule"];
        Object.keys(form).forEach(key => {
            if (required.some(r => r === key) && (form[key] === "" || !form[key])) {
                valid = false;
                error[key] = "Ce champ est obligatoire";
            }
        });

        if (!valid) {
            setError(error);
            return;
        }

        const comptes = form.prefix + form.numero;
        const data = { "numero": comptes, "name": form.intitule };

        axios.post(url, data)
            .then(res => {
                if (res) {
                    setSuccess("Votre compte est enregistré avec succès");
                    setForm({ ...initialForm });
                }
            })
            .catch(error => {
                setError({ server: "Votre compte n'a pas pu être enregistré" });
                console.log(error);
            });
    }

    useEffect(() => {
        if (form.compte?.numero) {
            setForm({
                ...form,
                prefix: form.compte.numero + numberCount(form.compte.numero),
                intitule: form.compte.intitule
            });
        }
    }, [form.compte]);

    return {
        handleFieldValueChange,
        submitForm,
        error,
        success,
        form
    }
}