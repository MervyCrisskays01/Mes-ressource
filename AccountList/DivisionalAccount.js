import React, { useState } from 'react';
import LoadingSpinner from "../../component/Loading/LoadingSpinner";
//valida

import DataTable from "react-data-table-component";
import {
    Text,
    TextField,
    Button,
    Modal
} from "@sbsdevit/def-web-components";

import { useDivisionalAccount } from "./hookDivisionalAccount";
import DivisionalAccountForm from './DivisionForm/DivisionalAccountForm';

const DivisionalAccount = ({ open, onClose }) => {
    const [newAccount, setNewAccount] = useState(false);
    const { comptes, columns, generalAccounts, loadding } = useDivisionalAccount();

    return (
        <Modal
            open={open}
            onClose={onClose}
            title="Liste des comptes divisionnaires"
            position="right"
        >
            <div className="w-full rounded-lg divide-y divide-gray2">
                {newAccount &&
                    <DivisionalAccountForm
                        handleCancel={() => setNewAccount(false)}
                        generalAccounts={generalAccounts}
                    // validationData={validationData}
                    />
                }

                <div className="py-5 px-4">
                    <div className="flex items-center gap-4 mb-5">

                        <TextField
                            variant="outlined"
                            fullWidth
                            size="small"
                            placeholder="Rechercher un compte"
                            suffix={(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            )}
                        />

                        {!newAccount &&

                            <Button
                                size="small"
                                type="default"
                                fullWidth
                                className="flex items-center gap-2 w-full md:w-fit"
                                onclick={() => setNewAccount(!newAccount)}
                            >
                                {newAccount ?
                                    <span className={"flex items-center gap-1"}>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                        </svg>


                                        <span>Fermer</span>
                                    </span>
                                    :
                                    <span className={"flex items-center gap-1"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>



                                        <span>Nouveau</span>
                                    </span>}

                            </Button>
                        }
                    </div>
                    {loadding ?
                        <div className="flex justify-center py-10">
                            <LoadingSpinner size="medium" />
                        </div> :
                        <>
                            {comptes &&
                                <div className="border border-gray2 rounded-lg">
                                    <DataTable
                                        columns={columns}
                                        data={comptes}
                                        dense
                                        pagination
                                        noDataComponent={
                                            <div className='w-full flex justify-center items-center min-h-[200px]'>

                                                <div className='w-full p-5 flex flex-col items-center gap-3 justify-center'>

                                                    <Text type="gray3">Aucune donnée pour le moment.</Text>

                                                </div>


                                            </div>
                                        }
                                    />
                                </div>
                            }
                        </>}

                </div>
            </div>
        </Modal>
    );
}

export default DivisionalAccount;