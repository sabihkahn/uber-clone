import React, { createContext, useState } from 'react'
export const CaptionDatacontext = createContext()

const CaptionContext = ({children}) => {
    const [caption, setcaption] = useState(null)


  return (

<CaptionDatacontext.Provider value={{caption, setcaption}}>
    {children}
</CaptionDatacontext.Provider>


  )
}

export default CaptionContext
