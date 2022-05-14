
import Cards from './Cards';



export default function Content(props) {

    
    return (
        <>
            <div className="contentRoot">
                <div className="contentContainer">
                    <Cards deckShuffle={props.deckShuffle} SetDeckShuffle={props.SetDeckShuffle} numAnswers={props.numAnswers} SetNumAnswers={props.SetNumAnswers} iconsBottom={props.iconsBottom} SetIconsBottom={props.SetIconsBottom}/>
                </div>
            </div>
        </>
    )
}