import React, { useContext } from 'react'
import { Dimensionscontext } from '../layouts';
function tell() {
   const [height,width,standaloneornot]= useContext(Dimensionscontext)
   return (
      <div>
         Hello {
            height
         }
      </div>
   )
}

export default tell
