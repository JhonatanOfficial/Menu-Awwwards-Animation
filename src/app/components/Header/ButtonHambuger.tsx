"use client"

import { useState } from "react"
import { motion, MotionConfig } from "framer-motion"
import { useMenu } from "@/app/contexts/MenuContext"
import { ItemNav } from "./ItemNav"


export const ButtonHambuger = () => {

    const { active, setActive } = useMenu()

    return (
        <MotionConfig transition={{ duration: .2, delay: .1 }}>
            <button onClick={() => setActive(!active)} className="flex relative w-[2.3rem] h-[.8rem]">
                <motion.div
                    animate={
                        active ? {
                            rotate: "-45deg",
                            top: "50%",
                            y: "-50%",
                            background: "#000"
                        } : {
                            rotate: "0",
                            top: "0",
                            y: "0",
                            background: "#F1EBC9"
                        }
                    }
                    className="absolute h-[.125rem] w-full bg-primary-color"></motion.div>

                <motion.div
                    animate={
                        active ? {
                            rotate: "45deg",
                            bottom: "50%",
                            y: "50%",
                            background: "#000"
                        } : {
                            rotate: "0",
                            bottom: "0",
                            y: "0",
                            background: "#F1EBC9"
                        }
                    }
                    className="absolute h-[.125rem] w-full bg-primary-color bottom-0">
               
                    </motion.div>
            </button>
        </MotionConfig>
    )
}
