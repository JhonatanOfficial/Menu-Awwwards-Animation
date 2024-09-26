import { arrowRight } from "@/app/assets";
import { useMenu } from "@/app/contexts/MenuContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const ItemNav = () => {
    const { active, setActive } = useMenu()
    const [indexHover, setIndexHover] = useState<number | null>(null)

    const item_nav = [
        { title: "Home", href: "/" },
        { title: "Services", href: "/" },
        { title: "About", href: "/" },
        { title: "Contact", href: "/" },
        { title: "pROJECTS", href: "/" },
    ]

    const changeColor = (index: number) => indexHover === index ? true : false;
    
    return (
        <div className="flex flex-col h-max w-full">
            {item_nav.map((item, index) => (
                <motion.div
                onClick={() => setActive(false)}
                    key={index} className="overflow-hidden h-max">
                    <motion.div
                    className="links-container"
                        initial={{ y: "100%" }}
                        whileInView={{ y: "0" }}
                        exit={{ y: "100%" }}
                        transition={{ duration: .6, delay: 0.01 * index, ease: [.23, 1, .32, 1] }}
                    >
                        <Link
                            onMouseEnter={() => setIndexHover(index)}
                            onMouseLeave={() => setIndexHover(null)}
                            className={`text-[6rem] uppercase flex items-center justify-between transition-all duration-[.4s] ${changeColor(index) ? "text-black" : `${indexHover !== null && "text-[#00000031]"}`}`}
                            href={item.href}>

                            {item.title}

                            <div className="overflow-hidden">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={
                                        indexHover === index ? { x: 0 } : { x: "-100%" }
                                    }
                                >
                                    <Image src={arrowRight} alt="Arrow Right" width={85} height={85} />
                                </motion.div>
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    )
}
