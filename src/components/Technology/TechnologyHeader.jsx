import "./TechnologyHeader.css"
import { NavLink } from "react-router-dom"
function TechnologyHeader() {
    return (
        <>
            <header className="Tech-header">
                <nav>
                    <ul className="flex">
                        <li><NavLink to="vehicle" className={({ isActive }) => isActive ? "active-num crew-" : "crew-"
                        }>1</NavLink></li>
                        <li><NavLink to="spaceport" className={({ isActive }) => isActive ? "active-num crew-" : "crew-"
                        }>2</NavLink></li>
                        <li><NavLink to="capsule" className={({ isActive }) => isActive ? "active-num crew-" : "crew-"
                        }>3</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default TechnologyHeader