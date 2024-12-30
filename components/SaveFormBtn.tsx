import React from 'react'
import { Button } from './ui/button'
import { HiSaveAs } from 'react-icons/hi'

function SaveFormBtn() {
  return (
    <div>
      <Button variant={"outline"} className='gap-2'>
        <HiSaveAs calcMode={"h-4 w-6"} />
      Save
      </Button>
    </div>
  )
}

export default SaveFormBtn
