import "./Crew.css"
import ground from "../../assets/crew/background-crew-desktop.jpg"
import { Outlet } from "react-router"
import CrewHeader from "../../components/Crew/CrewHeader"
function Crew() {
    return (
        <>
        <section className="crew">
            <img src={ground} alt="" />
        </section>
            <h3 className="heading-5 h3-destination"><span>02</span>Meet your crew</h3>
            <Outlet/>
            <CrewHeader/>
            
        </>
    )
}
export default Crew