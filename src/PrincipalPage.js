
import React from "react";

import Top from './Top';
import Content from './Content';
import Bottom from './Bottom';


export default function PrincipalPage(props) {
    
    const [deckShuffle, SetDeckShuffle] = React.useState(props.deckReact);

    const deckLength = props.deckReact.length;

    const [numAnswers, SetNumAnswers] = React.useState(0);
    
    
    return (
        <>
            <div className="principalPageRoot">
                <Top />
                <Content deckShuffle={deckShuffle} SetDeckShuffle={SetDeckShuffle} numAnswers={numAnswers} SetNumAnswers={SetNumAnswers}/>
                <Bottom deckLength={deckLength} numAnswers={numAnswers}/>
            </div>
        </>
    )
}