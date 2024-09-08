import { useContext } from "react";
import { Transitions } from "../pages/Transitions";
import { RouterContext } from "../router/RouterContext";

export const Outlet = () => {
    const { route } = useContext(RouterContext);

    switch (route) {
        case '/':
            return <h1>Home</h1>
        case 'transition':
            return <Transitions />
        case 'action':
            return <h1>Action</h1>
        case 'use-action-state':
            return <h1>useActionState</h1>
        default:
            return <h1>Page Not Found</h1>
    }
}