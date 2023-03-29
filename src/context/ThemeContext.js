import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const [themee, setThemee] = useState( true);

	return (
		<ThemeContext.Provider
			value={{
				themee,
				setThemee,
			}}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;