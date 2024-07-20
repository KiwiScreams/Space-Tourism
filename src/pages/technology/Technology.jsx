import "./Technology.css"
import ground from "../../assets/technology/background-technology-desktop.jpg"
import { Outlet } from "react-router"
import TechnologyHeader from "../../components/Technology/TechnologyHeader"
function Technology() {
    return (
        <>
            <section className="technology">
                <img src={ground} alt="" />
            </section>
            <h3 className="heading-5 h3-destination"><span>03</span>SPACE LAUNCH 101</h3>
            <div className="box">
                <TechnologyHeader />
                <Outlet />
            </div>
        </>
    )
}
export default Technology