import React from 'react'
import * as motion from 'motion/react-client'
import { Link } from 'react-router';

export const ProjectCard = ({image, title, tecnologies, desc}) => {



    const descCut = desc.slice(0, 300);


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
                initial={{scale: 0, y: 50}}
                animate={{scale: 1, y: 0}}
                transition={{duration: 0.6, ease: 'easeIn'}}
                viewport={{once: true}}
                className='bg-neutral-900 rounded-4xl p-6 col-span-12 md:col-span-4 lg:col-span-4 hover:scale-105 transition-all duration-500 flex flex-col gap-3'
            >
            <img 
                src={image} 
                alt="Austronaut logo" 
                className='w-16' 
            />
            <h2 className='text-white text-xl font-semibold'>{title}</h2>
            <p className='text-white text-sm'>{desc.length > 300? `${descCut}...` : desc}</p>
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

            <Link className='text-blue-500 hover:underline cursor-none'>See more →</Link>
            

        </motion.div>
    
    </>
  )
}
