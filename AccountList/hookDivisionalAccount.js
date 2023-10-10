import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllAccounts } from "../../app/redux/reducers/generalAccounts";
import { getDivisionalAccountLoadding, selectAllDivisionalAccount, getDivisionalAccount } from "../../app/redux/reducers/divisionalAccount";
import { axios } from 'container/axios';



export const useDivisionalAccount = () => {
    const dispatch = useDispatch();
    const [selectedAccount, setSelectedAccount] = useState(null);
    const generalAccounts = useSelector(selectAllAccounts);
    const comptes = useSelector(selectAllDivisionalAccount)
    const loadding = useSelector(getDivisionalAccountLoadding)

    const columns = [
        {
            name: "Numéro",
            selector: (row) => row.numero,
        },
        {
            name: "Intitulé",
            grow: 3,
            selector: (row) => row.name,
        }
    ];


    const handleAccountChange = (val) => {
        setSelectedAccount(val);
    }

    const accountSelected = (setPrefix, setIntitule) => {
        const numberCount = (number) => {
            let numberString = number.toString();
            let numberCharacters = numberString.length
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


        useEffect(() => {
            for (let property in selectedAccount) {
                if (property === "numero") {

                    setPrefix(selectedAccount[property] + numberCount(selectedAccount[property]))
                }
                if (property === "name") {

                    setIntitule(selectedAccount[property])
                }

            }
        }, [selectedAccount])
    }

    const validationData = (url, prefix, numero, setError, setNumeroError, setSuccess, setOhadaAccountError) => {
        // const url = '';


        if (prefix === null || prefix === "") {
            setError("Veillez choisir Compte OHADA")
            setOhadaAccountError(true)
        } else {
            setError("")
            setOhadaAccountError(false)
            if (numero === null || numero === "") {
                setError("Veillez saisir le numéro du compte")
                setNumeroError(true)
            } else {
                setError("")
                setNumeroError(false)
                if (intitule === null || intitule === "") {
                    setError("Veillez saisir l'intitulé du compte")
                    setIntituleError(true)
                } else {
                    setError("")
                    setIntituleError(false)

                    const comptes = prefix + numero
                    const data = { "numero": comptes, "name": intitule };

                    axios.post(url, data)
                        .then(response => {
                            setSuccess("Votre compte est enregistré avec succès")
                        })
                        .catch(error => {
                            setError("Votre compte n'a pas pu être enregistré")
                            console.log(error)
                        });

                }

            }

        }
    }


    useEffect(() => {
        dispatch(getDivisionalAccount());
    }, [dispatch]);

    return { loadding, comptes, columns, generalAccounts, handleAccountChange, selectedAccount, accountSelected, validationData }
}

