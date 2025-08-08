import React, { createContext, useState } from 'react'
export const UserDatacontext = createContext()


const UserContext = ({children}) => {

    const [user, setuser] = useState({
         fullname:{
        firstName:'',
        lastName:''
      },
      email: '',

    })

  return (
<UserDatacontext.Provider value={[user, setuser]}>
    {children}
</UserDatacontext.Provider>
  )
}

export default UserContext