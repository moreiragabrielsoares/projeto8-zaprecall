

export default function Bottom(props) {
    return (
        <>
            <div className="bottomRoot">
                <div className="bottomContainer">
                    <div className="result">{props.numAnswers}/{props.deckLength} CONCLUÍDOS</div>
                    <div className="iconContainer">
                        {props.iconsBottom.map((icon) => <div className={icon.classIcon}> <ion-icon name={icon.typeIcon}></ion-icon> </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}