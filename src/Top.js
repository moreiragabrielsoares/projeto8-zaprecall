import imgLogo from "./assets/img/image 1.png";

export default function Top() {
    return (
        <>
            <div className="topRoot">
                <div className="topContainer">
                    <img className="frontPageImg" src={imgLogo}/>
                    <div>ZapRecall</div>
                </div>
            </div>
        </>
    )
}