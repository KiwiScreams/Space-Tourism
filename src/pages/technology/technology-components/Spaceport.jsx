import spaceport from "../../../assets/technology/image-spaceport-portrait.jpg"
function Spaceport() {
    return (
        <>
            <div className="containi flex">
                <div className="text-container">
                    <h4 className="heading-4">THE TERMINOLOGY…</h4>
                    <h1 className="heading-3">SPACEPORT</h1>
                    <p className="body-text">A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
                </div>
                <div className="image-containi image-contain">
                    <img src={spaceport} alt="" />
                </div>
            </div>
        </>
    )
}
export default Spaceport