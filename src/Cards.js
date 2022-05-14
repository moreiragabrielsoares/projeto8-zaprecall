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
        console.log(showCard);
        
        
        switch (showCard) {
            case "card":
                return  <div className="contentCard" onClick={() => SetShowCard("showQuestion")}>
                            <div>Pergunta {props.numQuestion + 1}</div>
                            <ion-icon name="play-outline"></ion-icon>
                        </div>

            case "showQuestion":
                return  <QuestionCard question={props.question} function={SetShowCard}/>

            case "showAnswer":
                return  <AnswerCard answ={props.answer} function={SetShowCard}/>

            case "showAnswerNotRemember":
                return  <div className="answerNotRemember">
                            <div>Pergunta {props.numQuestion + 1}</div>
                            <ion-icon name="close-circle"></ion-icon>
                        </div>
            
            case "showAnswerAlmost":
                return  <div className="answerAlmost">
                            <div>Pergunta {props.numQuestion + 1}</div>
                            <ion-icon name="help-circle"></ion-icon>
                        </div>

            case "showAnswerRemember":
                return  <div className="answerRemember">
                            <div>Pergunta {props.numQuestion + 1}</div>
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
        }  

    }


    function QuestionCard (props) {
        return (
            <div className="questionCard" onClick={() => props.function("showAnswer")}>
                <div>{props.question}</div>
                <ion-icon name="repeat-outline"></ion-icon>
            </div>
        )
    }

    function AnswerCard (props) {
        return (
            <div className="answerCard">
                <div className="answerText">{props.answ}</div>
                <div className="answerContainer">
                    <div className="notRememberOption" onClick={() => props.function("showAnswerNotRemember")}> 
                        <div>Não lembrei</div>
                    </div>
                    <div className="almostOption" onClick={() => props.function("showAnswerAlmost")}>
                        <div>Quase não lembrei</div>
                    </div>
                    <div className="rememberOption" onClick={() => props.function("showAnswerRemember")}>
                        <div>Zap!</div>
                    </div>
                </div>
            </div>
        )
    }




    return (
        <>
            {deckReact.map((question , index) => <Card numQuestion={index} question={question.qn} answer={question.answ}/>)}
        </>
    )

}