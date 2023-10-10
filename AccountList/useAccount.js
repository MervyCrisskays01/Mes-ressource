import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccountLoadding,
  getAccounts,
  selectAllAccounts,
} from "../../app/redux/reducers/account";

export const useAccountList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const accounts = useSelector(selectAllAccounts);

  const filterAccounts = () =>
    accounts.filter(
      (account) =>
        account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        account.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filteredAccounts = filterAccounts();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const loading = useSelector(getAccountLoadding);

  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);

  return {
    accounts,
    loading: loading,
    handleChange,
    filteredAccounts,
  };
};
