import { useContext } from "react";
import { Route, RouterContext } from "../router/RouterContext";

export const TopNavigation = () => {
    const {updateRoute } = useContext(RouterContext);

    const handleClick = (route: Route) => {
        window.history.pushState({}, '', route);
        updateRoute(route);
    }

    return <>
        <ul>
            <li><a onClick={() => handleClick('/')}>Home</a></li>
            <li><a onClick={() => handleClick('transition')}>Transition</a></li>
            <li><a onClick={() => handleClick('action')}>Action</a></li>
            <li><a onClick={() => handleClick('use-action-state')}>useActionState</a></li>
        </ul>
    </>
}
