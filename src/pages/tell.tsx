import React, { useContext } from 'react'
import { Dimensionscontext } from '../layouts';
import {UserContext} from '../layouts'
function tell() {
   const {user,signinwithGoogle,signout}=useContext(UserContext)
   const [height,width,standaloneornot]= useContext(Dimensionscontext)
   return (
      <div>
         Hello {user?user.displayName:''}
         <button onClick={signout}>Sign out</button>
      </div>
   )
}

export default tell
