import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const TitleFlip = ({ text = "" }) => {
    // const text = "Vamsi Chokkapu".split("");

    return (
        <div className="flex flex-col md:flex-row gap-4">
            {text.split(" ")?.map((word) => {
                return <div className="flex justify-center">
                    {word.split("").map((el, i) => (
                        <AnimatePresence key={i}>
                            <motion.div
                                key={`${i}-key`}
                                initial={{ opacity: 0, rotateY: 90 }}
                                animate={{ opacity: 1, rotateY: 0 }}
                                // exit={{ opacity: 0, rotateY: isFlipped ? 180 : 0 }}
                                transition={{ duration: 2 }}
                                className=""
                            >
                                {/* Front of the card */}
                                <motion.span
                                    className="text-7xl md:text-8xl font-extrabold lg:text-8xl text-green-400"
                                >
                                    <p>{el}</p>
                                </motion.span>

                                {/* Back of the card */}
                                {/* <motion.div
                            className="w-full h-full bg-red-500 absolute backface-hidden rotate-y-180 flex justify-center items-center text-red"
                        >
                            <p>{el}</p>
                        </motion.div> */}
                            </motion.div>
                        </AnimatePresence>
                    ))}
                </div>
            })}
        </div>
    );

}

export default TitleFlip;