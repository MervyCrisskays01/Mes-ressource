<div className="flex items-center gap-4">
          {/* <TextField
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
          /> */}
        </div>




 //account list filtering
  const filterAccounts = () =>
    accounts.filter(
      (account) =>
        account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        account.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  const filteredAccounts = filterAccounts();