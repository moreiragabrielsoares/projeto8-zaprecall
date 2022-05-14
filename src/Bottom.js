

export default function Bottom(props) {
    return (
        <>
            <div className="bottomRoot">
                <div className="bottomContainer">
                    <div>{props.numAnswers}/{props.deckLength} CONCLUÍDOS</div>
                </div>
            </div>
        </>
    )
}