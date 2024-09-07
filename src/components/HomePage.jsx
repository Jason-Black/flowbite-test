import { Accordion, AccordionPanel } from 'flowbite-react';
import {useState} from 'react'

const HomePage = () => {

    const LOGO ='assets/logo-home.png';
    const [omenModal, setOpenModal] = useState(false);

  return (
    <>
    <div className='component'>HomePage
      <h1>Accordion</h1>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>Item 1</Accordion.Title>
          <Accordion.Content>
            <p className='mb-2'>
              This is the text for item 1
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Item 2</Accordion.Title>
          <Accordion.Content>
            <p className='mb-2'>
              This is the text for item 2
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Item 3</Accordion.Title>
          <Accordion.Content>
            <p className='mb-2'>
              This is the text for item 3
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      
      
      </div> 
    </>
  )
}

export default HomePage