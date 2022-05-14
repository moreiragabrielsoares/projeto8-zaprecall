import imgSadFace from "./assets/img/sad.png";
import imgPartyFace from "./assets/img/party.png";


export default function Bottom(props) {
    
    
    function verifyEndGame (numAnswers, deckLength, numAnswersNotRemember) {

        if (numAnswers !== deckLength) {
            return;
        }

        if (numAnswers === deckLength && numAnswersNotRemember === 0) {
            return <div className="resultContainer">
                        <div className="titleContainer">
                            <img src={imgPartyFace}/>
                            <span>Parabéns</span>
                        </div>
                        <div className="resultText">Você não esqueceu de nenhum flashcard!</div>
                    </div>;
        } else {
            return <div className="resultContainer">
                        <div className="titleContainer">
                            <img src={imgSadFace}/>
                            <span>Putz...</span>
                        </div>
                        <div className="resultText">Ainda faltam alguns...Mas não desanime!</div>
                    </div>;
        }

    }
    


    
    
    return (
        <>
            <div className="bottomRoot">
                <div className="bottomContainer">
                    
                    
                    {verifyEndGame(props.numAnswers, props.deckLength, props.numAnswersNotRemember)}


                    <div className="result">{props.numAnswers}/{props.deckLength} CONCLUÍDOS</div>
                    <div className="iconContainer">
                        {props.iconsBottom.map((icon) => <div className={icon.classIcon}> <ion-icon name={icon.typeIcon}></ion-icon> </div>)}
                    </div>

                </div>
            </div>
        </>
    )
}