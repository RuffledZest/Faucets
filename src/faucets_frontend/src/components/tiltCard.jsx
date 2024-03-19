import { useRef, useState } from "react";
import { motion } from "framer-motion";
// import { FiMousePointer } from "react-icons/fi";

import PropTypes from 'prop-types';


const Card = () => {
    let quotes = [
        "“We live in a world where we grow enough food to feed everyone, yet one-third of all food produced is wasted.”",
        "“End hunger, achieve food security and improved nutrition and promote sustainable agriculture.” ",
        "“Food waste is not a victimless crime. Its time for us all to take responsibility for the food we chuck in the bin.” ",
        "“There is food for everyone on this planet, but not everyone eats.”",
    ];
    let speakers = [
        "José Graziano da Silva",
        "SDG Goal 2",
        "Tristram Stuart",
        "Carlo Petrini",
    ];
    const ROTATION_RANGE = 32.5;
    const HALF_ROTATION_RANGE = 32.5 / 2;
    
        const TiltCard = ({ quote,speaker }) => {
            const ref = useRef(null);

            const [rotateX, setRotateX] = useState(0);
            const [rotateY, setRotateY] = useState(0);

            const handleMouseMove = (e) => {
                if (!ref.current) return;

                const rect = ref.current.getBoundingClientRect();

                const width = rect.width;
                const height = rect.height;

                const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
                const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

                const rY = mouseX / width - HALF_ROTATION_RANGE;
                const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

                setRotateX(rX);
                setRotateY(rY);
            };

            const handleMouseLeave = () => {
                if (!ref.current) return;
                setRotateX(0);
                setRotateY(0);
            };

            return (
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                    animate={{
                        rotateX,
                        rotateY,
                    }}
                    className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-cyan-500 via-white to-violet-900"
                >
                    <div
                        style={{
                            transform: "translateZ(75px)",
                            transformStyle: "preserve-3d",
                            backgroundImage: "url('./Picture23112q.png')",
                            backgroundPosition: "center",
                            backgroundSize:"cover",
                            backgroundRepeat: "no-repeat",
                            // backdropFilter: "blur(20px)",
                        }}
                        className="absolute inset-4 grid place-content-center rounded-xl bg-black  shadow-lg px-4 " 
                    >
                        {/* <FiMousePointer
                            style={{
                                transform: "translateZ(75px)",
                            }}
                            className="mx-auto text-4xl"
                        /> */}
                        <p
                            style={{
                                transform: "translateZ(50px)",
                            }}
                            className="text-center text-xl   bg-clip-text text-transparent bg-gradient-to-br from-cyan-200 via-white to-red-400"
                        >
                            {quote}
                        </p>
                        <br/>
                        <div className="h-6">

                        </div>
                        <p>
                            <span className="text-amber-400 ">{speaker}</span>
                        </p>
                    </div>
                </motion.div>
            );
        };
        TiltCard.propTypes = {
            quote: PropTypes.string.isRequired,
            speaker: PropTypes.string.isRequired,
          };

        return (
            <div id="quotes" className="flex px-4 py-2 items-center justify-between">
                {quotes.map((quote, index) => (
                    <TiltCard key={index} quote={quote} speaker={speakers[index]} />
                ))}
                
            </div>
        );
        
    };
    
    
      





export default Card;