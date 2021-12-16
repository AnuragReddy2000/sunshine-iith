import React, { useContext } from 'react'
import { useContextHook } from '../components/provider/Context'
import { Dimensionscontext } from '../layouts';
function tell() {
   const { user, signinwithGoogle, signout } = useContextHook();
   const [height,width,standaloneornot]= useContext(Dimensionscontext)
   return (
      <div>
         Hello {
            signinwithGoogle.toString()
         }
      </div>
   )
}

export default tell
