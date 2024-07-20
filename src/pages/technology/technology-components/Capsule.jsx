import capsule from "../../../assets/technology/image-space-capsule-portrait.jpg"
function Capsule() {
    return (
        <>
            <div className="containi flex">
                <div className="text-container">
                    <h4 className="heading-4">THE TERMINOLOGY…</h4>
                    <h1 className="heading-3">SPACE CAPSULE</h1>
                    <p className="body-text">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                </div>
                <div className="image-contain image-containi">
                    <img src={capsule} alt="" />
                </div>
            </div>
        </>
    )
}
export default Capsule