import { NavLink } from "react-router"

export const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/animals"}>Animals</NavLink>
                </li>
            </ul>
        </nav>
    )
}