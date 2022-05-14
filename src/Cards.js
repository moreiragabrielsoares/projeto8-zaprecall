import React from "react";


export default function Cards(props) {

    

    function Card (props) {
        
        
        function changeState (numQuestion, deckShuffle, SetDeckShuffle) {

            const newArr = [... deckShuffle];
            newArr[numQuestion].state = "showQuestion";
            SetDeckShuffle(newArr);
        }
        
        switch (props.state) {
            case "card":
                return  <div className="contentCard" onClick={() => changeState(props.numQuestion, props.deckShuffle, props.SetDeckShuffle)}>
                            <div>Pergunta {props.numQuestion + 1}</div>
                            <ion-icon name="play-outline"></ion-icon>
                        </div>

            case "showQuestion":
                return  <QuestionCard question={props.question} numQuestion={props.numQuestion} deckShuffle={props.deckShuffle} SetDeckShuffle={props.SetDeckShuffle} />

            case "showAnswer":
                return  <AnswerCard answ={props.answer} numQuestion={props.numQuestion} deckShuffle={props.deckShuffle} SetDeckShuffle={props.SetDeckShuffle} numAnswers={props.numAnswers} SetNumAnswers={props.SetNumAnswers} iconsBottom={props.iconsBottom} SetIconsBottom={props.SetIconsBottom} numAnswersNotRemember={props.numAnswersNotRemember} SetNumAnswersNotRemember={props.SetNumAnswersNotRemember}/>

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

        function changeState (numQuestion, deckShuffle, SetDeckShuffle) {
            
            const newArr = [... deckShuffle];
            newArr[numQuestion].state = "showAnswer";
            SetDeckShuffle(newArr);
        }

        return (
            <div className="questionCard" onClick={() => changeState(props.numQuestion, props.deckShuffle, props.SetDeckShuffle)}>
                <div>{props.question}</div>
                <ion-icon name="repeat-outline"></ion-icon>
            </div>
        )
    }



    function AnswerCard (props) {
        
        
        function changeStateNotRemember (numQuestion, deckShuffle, SetDeckShuffle, numAnswers, SetNumAnswers, iconsBottom, SetIconsBottom, numAnswersNotRemember, SetNumAnswersNotRemember) {
            
            const newArr = [... deckShuffle];
            newArr[numQuestion].state = "showAnswerNotRemember";
            SetDeckShuffle(newArr);

            const num = numAnswers;
            SetNumAnswers(num + 1);

            const newArrIcons = [... iconsBottom];
            newArrIcons.push({classIcon:"iconAnswerNotRemember", typeIcon:"close-circle"});
            SetIconsBottom(newArrIcons);

            const aux = numAnswersNotRemember;
            SetNumAnswersNotRemember(aux + 1);
        }

        function changeStateAlmost (numQuestion, deckShuffle, SetDeckShuffle, numAnswers, SetNumAnswers, iconsBottom, SetIconsBottom) {
            
            const newArr = [... deckShuffle];
            newArr[numQuestion].state = "showAnswerAlmost";
            SetDeckShuffle(newArr);

            const num = numAnswers;
            SetNumAnswers(num + 1);

            const newArrIcons = [... iconsBottom];
            newArrIcons.push({classIcon:"iconAnswerAlmost", typeIcon:"help-circle"});
            SetIconsBottom(newArrIcons);
        }

        function changeStateRemember (numQuestion, deckShuffle, SetDeckShuffle, numAnswers, SetNumAnswers, iconsBottom, SetIconsBottom) {
            
            const newArr = [... deckShuffle];
            newArr[numQuestion].state = "showAnswerRemember";
            SetDeckShuffle(newArr);

            const num = numAnswers;
            SetNumAnswers(num + 1);

            const newArrIcons = [... iconsBottom];
            newArrIcons.push({classIcon:"iconAnswerRemember", typeIcon:"checkmark-circle"});
            SetIconsBottom(newArrIcons);
        }
        
        
        return (
            <div className="answerCard">
                <div className="answerText">{props.answ}</div>
                <div className="answerContainer">
                    <div className="notRememberOption" onClick={() => changeStateNotRemember(props.numQuestion, props.deckShuffle, props.SetDeckShuffle, props.numAnswers, props.SetNumAnswers, props.iconsBottom, props.SetIconsBottom, props.numAnswersNotRemember, props.SetNumAnswersNotRemember)}> 
                        <div>Não lembrei</div>
                    </div>
                    <div className="almostOption" onClick={() => changeStateAlmost(props.numQuestion, props.deckShuffle, props.SetDeckShuffle, props.numAnswers, props.SetNumAnswers, props.iconsBottom, props.SetIconsBottom)}>
                        <div>Quase não lembrei</div>
                    </div>
                    <div className="rememberOption" onClick={() => changeStateRemember(props.numQuestion, props.deckShuffle, props.SetDeckShuffle, props.numAnswers, props.SetNumAnswers, props.iconsBottom, props.SetIconsBottom)}>
                        <div>Zap!</div>
                    </div>
                </div>
            </div>
        )
    }




    return (
        <>
            {props.deckShuffle.map((question , index) => <Card numQuestion={index} question={question.qn} answer={question.answ} state={question.state} deckShuffle={props.deckShuffle} SetDeckShuffle={props.SetDeckShuffle} numAnswers={props.numAnswers} SetNumAnswers={props.SetNumAnswers} iconsBottom={props.iconsBottom} SetIconsBottom={props.SetIconsBottom} numAnswersNotRemember={props.numAnswersNotRemember} SetNumAnswersNotRemember={props.SetNumAnswersNotRemember}/>)}
        </>
    )

}