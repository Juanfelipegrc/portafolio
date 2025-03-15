import React, { useState } from 'react'
import * as motion from 'motion/react-client'
import { Link } from 'react-router';

export const ProjectCard = ({image, title, tecnologies, desc}) => {

    const [cardClicked, setCardClicked] = useState({validation: false, card: ''});
    const [isClosing, setIsClosing] = useState(false);

    const descCut = desc.slice(0, 300);

    

    const onClose = () => {
        setIsClosing(true);

        setTimeout(() => {
            setCardClicked({validation: false, card: ''});
            setIsClosing(false);
        }, 200);
    }


    const getBgColor = (tecnology) => {

        let bgColor = ''; 

       switch (tecnology) {
        case 'React':
            bgColor = 'bg-blue-600';
            break;
        case 'JS':
            bgColor = 'bg-yellow-500';
            break;
        case 'Tailwind CSS':
            bgColor = 'bg-blue-400';
            break;
        case 'CSS':
            bgColor = 'bg-fuchsia-600';
            break;
        case 'Bootstrap':
            bgColor = 'bg-violet-700';
            break;
       
        default:
            break;
       }

       return bgColor;
    }

  return (
    <>
    
        <motion.div
                layout
                transition={{
                    layout: { duration: 0.2, ease: 'easeInOut' }
                  }}
                className={`bg-neutral-900 col-span-12 md:col-span-4 lg:col-span-4 flex flex-col gap-3 ${cardClicked.validation && cardClicked.card === title && !isClosing? 'fixed top-0 left-0 w-screen h-screen z-[1000] rounded-none p-10' : isClosing? 'bottom-4 w-auto h-auto' : 'rounded-4xl p-6'} `}
            >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="1.5rem" 
                viewBox="0 -960 960 960" 
                width="1.5rem" 
                className={`${cardClicked.validation? 'mt-8' : 'hidden'}`}
                onClick={onClose}
                fill="#fff">
                    <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/>
            </svg>
            <img 
                src={image} 
                alt="Austronaut logo" 
                className='w-16' 
            />
            <h2 className='text-white text-xl font-semibold'>{title}</h2>
            <p className='text-white text-sm'>{desc.length > 300 && !cardClicked.validation? `${descCut}...` : desc}</p>
            <div className='flex items-center gap-2'>
                {
                    tecnologies.map((tecnology, index) => {

                        const bgColor = getBgColor(tecnology);

                        return(
                            <span
                                key={index} 
                                className={`py-1 px-2 rounded-xl ${bgColor} text-white text-xs `}
                        
                            >
                                {tecnology}
                            </span>
                        )
                        
                    })
                }
            </div>

            <span 
                className={`${cardClicked.validation? 'hidden' : 'text-blue-500 p-1 hover:underline cursor-none'}`}
                onClick={() => setCardClicked({validation: true, card: title})}
            >
                See more →
            </span>
            

        </motion.div>
    
    </>
  )
}

