"use client"

import { useContext, createContext, useState } from "react";

type ContextProps = {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const context = createContext<ContextProps | null>(null)

interface MenuProviderProps {
    children: React.ReactNode
}

export const MenuProvider = ({ children }: MenuProviderProps) => {

    const [active, setActive] = useState(false)

    return (
        <context.Provider value={{ active, setActive }}>
            {children}
        </context.Provider>
    )
}

export const useMenu = () => {
    const menuContext = useContext(context)

    if (!menuContext) {
        throw Error("O elemento pai precisar estar envolvido com o MenuProvider")
    }

    return menuContext
}