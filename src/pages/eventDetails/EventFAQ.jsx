import React from 'react'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';

function EventFAQ() {
    return (
        <section
            className="h-auto  max-md:h-auto  overflow-hidden pt-[2rem] max-md:pt-3" >
            <div className="max-w-screen-xl mx-auto p-4">
            <h1 className="text-3xl mb-8 max-md:text-3xl text-center font-semibold text-slate-900 dark:text-white">Frequently Asked Questions</h1>

                <Accordion>
                    <AccordionPanel>
                        <AccordionTitle>Question 1</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Answer 1
                            </p>
                            
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Question 2</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Answer 2
                            </p>
                        </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                        <AccordionTitle>Question 3</AccordionTitle>
                        <AccordionContent>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Answer 3
                            </p>
                            
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
        </section>

    );
}


export default EventFAQ