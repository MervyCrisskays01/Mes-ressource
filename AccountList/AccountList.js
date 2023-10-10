import React, { useState, useEffect } from "react";
import { Card, Text, Button, TextField } from "@sbsdevit/def-web-components";
import Classes from "../../component/Accordio/PlanComptable/Classes";
import { useAccountList } from "./useAccount";
import LoadingSpinner from "../../component/Loading/LoadingSpinner";
import DivisionalAccount from "./DivisionalAccount";

const AccountList = () => {
  const { accounts, loading, filteredAccounts, handleChange } =
    useAccountList();
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <div className="min-h-[85vh] w-full p-5 flex flex-col gap-4 max-w-7xl mx-auto">
      {/* The header */}
      <div className="flex flex-wrap md:items-center justify-between gap-2 sticky top-[20px] md:top-0 z-10">
        <div>
          <Text size={"large"} type="primary"  fontWeight={"bold"}>
            Plan comptable
          </Text>
          <Text size="small" className="text-gray4 " element={"p"}>
            La liste des compte conforme à l'OHADA.
          </Text>
        </div>
      </div>

      <Card className="w-full rounded-t-xl px-5 py-4 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <Text
            size="small"
            className="text-gray4 "
            element={"p"}
            fontWeight="bold"
          >
            La liste des comptes.
          </Text>
          <Button
            size="small"
            type="default"
            fullWidth
            className="flex items-center gap-2 w-full md:w-fit"
            onclick={toggleModal}
          >
            <span className={"flex items-center gap-1"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <span>Comptes divisionnaires</span>
            </span>
          </Button>
        </div>

        {modalOpen && (
          <DivisionalAccount open={modalOpen} onClose={toggleModal} />
        )}

        <div className="flex items-center gap-4">
          <TextField
            variant="outlined"
            fullWidth
            size="small"
            placeholder="Rechercher un compte"
            suffix={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            }
            onChange={handleChange}
          />
        </div>
        <div className="overflow-x-auto relative border border-gray2 rounded-lg">
          <ul className="w-full bg-gray1 text-primary font-bold mb-3 flex gap-3 flex-row p-4">
            <li className="basis-1/6  ">Numéro</li>
            <li className="basis-1/6 ">Intitulé</li>
          </ul>

          {loading ? (
            <div className="flex justify-center py-10">
              <LoadingSpinner size="medium" />
            </div>
          ) : filteredAccounts.length === 0 ? (
            <div className="w-full p-5 flex flex-col items-center gap-3 justify-center bg-primaryLight">
              <Text type="gray3">Aucune donnée pour l'instant.</Text>
            </div>
          ) : (
            <div className="cursor-pointer capitalize">
              {filteredAccounts.map((item) => (
                <>
                  <Classes
                    name={item.description?.toLowerCase()}
                    numero={item.name}
                    rubriques={item.rubriques}
                    id={item.id}
                  />
                </>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default AccountList;
