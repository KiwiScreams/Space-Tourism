import { NavLink } from "react-router-dom"
import "./CrewHeader.css"
function CrewHeader() {
    return (
        <>
            <header className="crew-header">
                <nav>
                    <ul className="flex">
                        <li><NavLink to="hurley" className={({ isActive }) => isActive ? "active crew-" : "crew-"
                        }>O</NavLink></li>
                        <li><NavLink to="shuttleworth" className={({ isActive }) => isActive ? "active crew-" : "crew-"
                        }>O</NavLink></li>
                        <li><NavLink to="glover" className={({ isActive }) => isActive ? "active crew-" : "crew-"
                        }>O</NavLink></li>
                        <li><NavLink to="ansari" className={({ isActive }) => isActive ? "active crew-" : "crew-"
                        }>O</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default CrewHeader