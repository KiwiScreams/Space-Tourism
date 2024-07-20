import vehicle from "../../../assets/technology/image-launch-vehicle-portrait.jpg"
function Vehicle() {
    return (
        <>
            <div className="containi flex">
                <div className="text-container">
                    <h4 className="heading-4">THE TERMINOLOGY…</h4>
                    <h1 className="heading-3">LAUNCH VEHICLE</h1>
                    <p className="body-text">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                </div>
                <div className="image-containi image-contain">
                    <img src={vehicle} alt="" />
                </div>
            </div>
        </>
    )
}
export default Vehicle