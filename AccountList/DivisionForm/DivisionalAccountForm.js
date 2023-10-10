import React from 'react';
import {
    TextField,
    Button,
    Combobox,
    Alert
} from "@sbsdevit/def-web-components";
import { useDivisionForm } from './hook';

const DivisionalAccountForm = ({ generalAccounts, handleCancel }) => {
    const { form, handleFieldValueChange, submitForm, success, error } = useDivisionForm();

    return (
        <form className="py-3 px-4 space-y-4">
            {success &&
                <Alert
                    fullWidth
                    message={success}
                    type="success"
                />
            }

            {error.server &&
                <Alert
                    message={error.server}
                    type="danger"
                    fullWidth
                />
            }

            <Combobox
                fullWidth
                placeholder="Compte"
                label={"Compte OHADA"}
                optionKeys={["name", "numero"]}
                options={generalAccounts?.map(ac => ({ ...ac, intitule: ac.name, name: ac.numero + " " + ac.name }))}
                value={form.compte?.name}
                size="small"
                error={error.compte ? true : false}
                helperText={error.compte}
                onChange={(val) => handleFieldValueChange("compte", val)}
                textFieldProps={{
                    size: "small",
                    placeholder: "Numéro ou intitulé du compte"
                }}
            />

            <div className='bg-primaryLight border border-gray2 rounded-lg p-3 space-y-4'>
                <div className="flex gap-3 ">
                    <TextField
                        label={"Préfix"}
                        size="small"
                        disabled
                        variant="outlined"
                        placeholder="Compte"
                        required
                        value={form.prefix}
                    />

                    <TextField
                        label={"Numéro"}
                        size="small"
                        fullWidth
                        variant="outlined"
                        placeholder="Numéro"
                        required
                        error={error.numero ? true : false}
                        helperText={error.numero}
                        value={form.numero}
                        onChange={(e) => handleFieldValueChange("numero", e)}

                    />
                </div>
                <TextField
                    size="small"
                    fullWidth
                    label={"Intitulé du compte"}
                    variant="outlined"
                    placeholder="Intitulé"
                    required
                    error={error.intitule ? true : false}
                    helperText={error.intitule}
                    value={form.intitule}
                    onChange={(e) => handleFieldValueChange("intitule", e)}
                />
            </div>
            <div className=" flex justify-end gap-3 text-right mt-2">
                <Button
                    size="small"
                    type="primary"
                    variant="outlined"
                    onClick={handleCancel}
                >
                    Fermer
                </Button>
                <Button
                    size="small"
                    type="primary"
                    className={" bg-primary text-white"}
                    onClick={submitForm}
                >
                    Enregistrer
                </Button>


            </div>
        </form>
    );
};

export default DivisionalAccountForm;