import person from "../../../assets/crew/image-mark-shuttleworth.png"
function Shuttleworth() {
    return (
        <>
            <div className="contain flex">
                <div className="text-container">
                    <h4 className="heading-4">Mission Specialist </h4>
                    <h1 className="heading-3">MARK SHUTTLEWORTH</h1>
                    <p className="body-text">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                </div>
                <div className="image-contain">
                    <img src={person} alt="" />
                </div>
            </div>
        </>
    )
}
export default Shuttleworth