

export default function FrontPage(props) {

    function closeFrontPage () {
        props.setShowPage("principalPage");
    }
    
    return (
        <>
            <div className="frontPageRoot">
                <div className="frontPageContainer">
                    <img className="frontPageImg" src="img/image 1.png"/>
                    <div>ZapRecall</div>
                    <button onClick={closeFrontPage}>Iniciar Recall!</button>
                </div>
            </div>
        </>
    )

}