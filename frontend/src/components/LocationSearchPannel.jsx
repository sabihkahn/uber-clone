import React from 'react'

const LocationSearchPannel = (props) => {
    const locations = [
        '24b nears kappor caffe',
        'kamil road gugrat',
        'mda suraj mianui',
        'fake location 3'
    ]

    return (
        <div>
            {
                locations.map((e, idx) => {
                    return <div key={idx} onClick={()=>{
                        props.setvehiclepannelOpen(true) 
                        props.setpanelOpen(false)
                    }} className='flex border-2 p-3 rounded-xl border-gray-300 active:border-black items-center my-4 justify-start gap-4'>
                        <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-2xl'><i className="ri-map-pin-fill text-xl"></i></h2>
                        <h3>{e}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default LocationSearchPannel