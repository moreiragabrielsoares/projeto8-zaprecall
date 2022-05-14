
import React from 'react';
import PrincipalPage from './PrincipalPage';
import FrontPage from './FrontPage';



export default function App() {
    
    const deckReact =
        [{qn: "O que é JSX?", answ:"Uma extensão de linguagem do JavaScript", state:"card"}, 
        {qn: "O React é ______", answ:"uma biblioteca JavaScript para construção de interfaces", state:"card"}, 
        {qn: "Componentes devem iniciar com ______.", answ:"letra maiúscula", state:"card"}, 
        {qn: "Podemos colocar ______ dentro do JSX.", answ:"expressões", state:"card"}, 
        {qn: "O ReactDOM nos ajuda ______", answ:"interagindo com a DOM para colocar componentes React na mesma", state:"card"}, 
        {qn: "Usamos o npm para ______", answ:"gerenciar os pacotes necessários e suas dependências", state:"card"}, 
        {qn: "Usamos props para ______", answ:"passar diferentes informações para componentes", state:"card"}, 
        {qn: "Usamos estado (state) para ______", answ:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", state:"card"}
    ];

    function comparador() { 
        return Math.random() - 0.5; 
    }

    deckReact.sort(comparador);

    const [showPage, SetShowPage] = React.useState("frontpage");
    
    return (
        <>
            {(showPage === "frontpage") ? <FrontPage setShowPage={SetShowPage} /> : <PrincipalPage deckReact={deckReact}/>}
        </>
    )
}