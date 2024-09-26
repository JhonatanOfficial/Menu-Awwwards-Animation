"use client"

import { logo } from "@/app/assets"
import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion, MotionConfig } from "framer-motion"
import { ButtonHambuger } from "./ButtonHambuger"
import { useMenu } from "@/app/contexts/MenuContext"
import Link from "next/link"
import { ItemNav } from "./ItemNav"

export const Header = () => {

    const { active, setActive } = useMenu()

    const item_nav = [
        { title: "Home", href: "/" },
        { title: "Works", href: "/" },
        { title: "About", href: "/" },
        { title: "Contact", href: "/" },
        { title: "Résumé", href: "/" },
    ]

    return (
        <>

            <header className="w-full py-[1.25rem] p-[1rem] lg:px-[6rem] flex justify-between items-center absolute left-0 right-0 z-[999]">
                <div>
                    <Image src={logo} alt="Logo" width={58} height={58} />
                </div>

                <div >
                    <ButtonHambuger />
                </div>
            </header>

            <AnimatePresence>
                {active && (
                    <MotionConfig transition={{ duration: .5, ease: [.03,.72,.59,.84] }}>
                        <div className="fixed inset-0 flex z-[50]">
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "100%" }}
                                className="w-2/4 bg-[#f1ebc9b5] backdrop-blur-[3rem]">

                            </motion.div>
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "100%" }}
                                exit={{ height: 0 }}
                                className="w-2/4 bg-primary-color-normal-opacity">

                                <div className="px-[6rem] py-[4.5rem] h-screen flex items-end ">
                                    <ItemNav />
                                </div>

                            </motion.div>
                        </div>
                    </MotionConfig>
                )}
            </AnimatePresence>
        </>
    )
}