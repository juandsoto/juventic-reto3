import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {

	const [isAdmin, setIsAdmin] = useState(true);

	return (
		<LoginContext.Provider value={{
			isAdmin,
			setIsAdmin
		}}>
			{children}
		</LoginContext.Provider>
	);
};

export const useLoginContext = () => {
	return useContext(LoginContext);
};

export { LoginContext, LoginProvider };