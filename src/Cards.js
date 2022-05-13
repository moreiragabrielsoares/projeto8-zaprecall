import React from "react";


export default function Cards() {

    const [deckReact, SetdeckReact] = React.useState([
        {qn: "O que é JSX?", answ:"Uma extensão de linguagem do JavaScript"}, 
        {qn: "O React é ______", answ:"uma biblioteca JavaScript para construção de interfaces"}, 
        {qn: "Componentes devem iniciar com ______.", answ:"letra maiúscula"}, 
        {qn: "Podemos colocar ______ dentro do JSX.", answ:"expressões"}, 
        {qn: "O ReactDOM nos ajuda ______", answ:"interagindo com a DOM para colocar componentes React na mesma"}, 
        {qn: "Usamos o npm para ______", answ:"gerenciar os pacotes necessários e suas dependências"}, 
        {qn: "Usamos props para ______", answ:"passar diferentes informações para componentes"}, 
        {qn: "Usamos estado (state) para ______", answ:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]);


    function Card (props) {
        
        const [showCard, SetShowCard] = React.useState("card");
        
        return (
            <>
            { showCard === "card" ?
                <div className="contentCard" onClick={() => SetShowCard("question")}>
                    <div>Pergunta {props.numQuestion + 1}</div>
                    <ion-icon name="play-outline"></ion-icon>
                </div> :
                <QuestionCard question={props.question}/>
            }
            </>
        )
    }


    function QuestionCard (props) {
        return (
            <div className="questionCard">
                <div>{props.question}</div>
                <ion-icon name="repeat-outline"></ion-icon>
            </div>
        )
    }

    return (
        <>
            {deckReact.map((question , index) => <Card numQuestion={index} question={question.qn}/>)}
        </>
    )

}