import { createContext, useState } from "react"

export type Route = '/' | 'transition' | 'action' | 'use-action-state';

type RouterHandle = {
    route: Route,
    updateRoute: (route: Route) => void;
}

type RouterProps = {
    children: React.ReactNode,
}

const defaultValue: RouterHandle = {
    route: '/',
    updateRoute: () => {},
}

export const RouterContext = createContext<RouterHandle>(defaultValue);

export const Router = ({ children }: RouterProps) => {
    
    const [route, setRoute] = useState<Route>('/');

    const routerHandle: RouterHandle = {
        route: route,
        updateRoute: (route: Route) => setRoute(route),
    }


    return (
        <RouterContext.Provider value={routerHandle}>
            {children}
        </RouterContext.Provider>
    )
}
