import person from "../../../assets/crew/image-victor-glover.png"
function Glover() {
    return (
        <>
            <div className="contain flex">
                <div className="text-container">
                    <h4 className="heading-4">PILOT</h4>
                    <h1 className="heading-3">Victor Glover</h1>
                    <p className="body-text">Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
                </div>
                <div className="image-contain">
                    <img src={person} alt="" />
                </div>
            </div>
        </>
    )
}
export default Glover