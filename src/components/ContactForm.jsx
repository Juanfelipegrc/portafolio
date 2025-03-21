import * as motion from 'motion/react-client'
import { useForm, ValidationError } from '@formspree/react'
import { AnimatePresence } from 'motion/react';
import React, { useState } from 'react'

export const ContactForm = () => {

    const [state, handleSubmit] = useForm('mrbppgej');
    const [submitValidation, setSubmitValidation] = useState(false);
    const [userHasSent, setUserHasSent] = useState(false);
    const [formKey, setFormKey] = useState(Date.now());

    const submitWithValidation = (event) => {

        event.preventDefault();

        handleSubmit(event)
        setSubmitValidation(true);
        setUserHasSent(true);

        event.target.reset();


        setTimeout(() => {
            setSubmitValidation(false);
            setFormKey(Date.now());
        }, 2000);

    }



  return (
    <>
    
        <div className='w-full h-full flex flex-col items-center'>


            {
                !submitValidation?
                <motion.div
                    key={formKey}
                    initial={!submitValidation && userHasSent? {scale: 0} : {scale: 1}}
                    animate={!submitValidation && userHasSent && {scale: 1}}
                    className='w-full'
                >
                
                    <div className='w-full flex justify-center mb-3'>
                        <h2 className='text-center text-white text-4xl font-medium'> 
                        Can <span className='text-blue-300'> Contact </span>Me By Email</h2>
                    </div>

                    <form 
                        onSubmit={submitWithValidation}
                        className='w-full h-full flex flex-col justify-center items-center gap-4'
                    >

                        <input
                            id="name"
                            type="name" 
                            name="name"
                            placeholder='name'
                            className='w-full bg-white rounded-full p-4 placeholder-black cursor-none focus:outline-0'
                        />
                        <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                            className='text-white'
                        />
                        <input
                            id="email"
                            type="email" 
                            name="email"
                            placeholder='email'
                            className='w-full bg-white rounded-full p-4 placeholder-black cursor-none focus:outline-0'
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                            className='text-white'
                        />
                        <textarea
                            id="message"
                            name="message"
                            placeholder='Message'
                            className='bg-white w-full rounded-4xl p-4 h-32 placeholder-black cursor-none focus:outline-0 resize-none'
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                            className='text-white'
                        />
                        <button className='bg-blue-400 text-white px-4 py-2 rounded-4xl cursor-none' type="submit" disabled={state.submitting}>
                            Submit
                        </button>

                    </form>
                
                </motion.div>

                :

                <AnimatePresence>
                    <div className='w-full h-full flex justify-center items-center'>
                        <motion.h2 
                            className='text-xl font-medium text-white'
                            initial={{scale: 0}}
                            animate={{scale: 1}}
                            exit={{scale: 0}}
                            transition={{duration: 0.3, ease: 'easeInOut'}}
                        >
                            Thanks For Sending
                        </motion.h2>
                    </div>
                </AnimatePresence>
            }
    

        </div>
    
    </>
  )
}
