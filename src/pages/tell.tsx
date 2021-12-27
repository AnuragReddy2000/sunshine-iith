import React, { useContext } from 'react'
import { Dimensionscontext } from '../layouts';
import {UserContext} from '../layouts'
function tell() {
   const {user,signinwithGoogle,signout}=useContext(UserContext)
   const [height,width,standaloneornot]= useContext(Dimensionscontext)
   return (
      <div>
         Hello {user?user.displayName:''}
      </div>
   )
}

export default tell
