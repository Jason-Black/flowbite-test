import React from 'react'

import { Button, Checkbox, Label, Modal, Navbar, TextInput } from "flowbite-react";
import { useState } from "react";

const Header = () => {
  return (
    <div>Header
        <Navbar >Top NavBar</Navbar>
        <div className='flex flex-wrap gap-2'>
        <Button>Click Me</Button>
        <Button outline gradientDuoTone="purpleToBlue">
        Purple to Blue
      </Button><Checkbox />
      </div>
    </div>
  )
}

export default Header