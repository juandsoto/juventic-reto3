import React, { useEffect } from 'react';

const Error = () => {

	useEffect(() => {
		window.scrollTo({ top: true });
	}, []);

	return (
		<>
			<h1>Error Page</h1>
		</>
	);
};

export default Error;
