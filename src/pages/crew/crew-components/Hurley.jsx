import person from "../../../assets/crew/image-douglas-hurley.png"
function Hurley() {
    return (
        <>
            <div className="contain flex">
                <div className="text-container">
                    <h4 className="heading-4">Commander</h4>
                    <h1 className="heading-3">Douglas Hurley</h1>
                    <p className="body-text">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                </div>
                <div className="image-contain">
                    <img src={person} alt="" />
                </div>
            </div>
        </>
    )
}
export default Hurley