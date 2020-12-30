import React from 'react';
import GlobalStyles from './GlobalStyles';

import Landing from './pages/Landing';

const App: React.FC = () => {
    return (
        <>
            <Landing />
            <GlobalStyles />
        </>
    );
}

export default App;
