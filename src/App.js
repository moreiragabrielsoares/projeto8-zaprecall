
import React from 'react';
import PrincipalPage from './PrincipalPage';
import FrontPage from './FrontPage';



export default function App() {
    
    const [showPage, SetShowPage] = React.useState("frontpage");
    
    return (
        <>
            {(showPage === "frontpage") ? <FrontPage setShowPage={SetShowPage} /> : <PrincipalPage />}
        </>
    )
}