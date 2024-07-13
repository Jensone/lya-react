import { NavLink } from "react-router-dom";
import Message from "./icons/MessageIcon";

export default function Nav() {
    return (
        <nav className="flex w-full justify-between items-center">
            <NavLink to="/" className="text-2xl font-semibold text-slate-700">
                <h1>lya</h1>
            </NavLink>
            <NavLink to="/messages" className="">
                <Message />
            </NavLink>
        </nav>
    );
}
