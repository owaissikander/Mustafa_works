import React from 'react'

export default function Form() {
    return (
        <>
            <div style={{
                width: '980px',
                height: '163px',
                borderRadius: '24px',
                backgroundColor: '#FFFFFF',
                marginLeft: '220px',
                marginTop: '145px',
                padding: 4,
                boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.2)',
            }}>
                <div className='flex flex-row'>
                    <div style={{
                        padding: 16
                    }} >
                        <p style={{
                            fontWeight: '600',
                            fontStyle: 'SemiBold',
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0px',
                            color: '#406C65'
                        }}>
                            Find the best place
                        </p>
                        <input
                            placeholder="Enter type"
                            className="w-[210px] h-[39px] mt-2 px-2 bg-[#F5F5F5] placeholder-[#07070752] text-gray-500 rounded-md"
                        />
                    </div>
                    <div style={{
                        padding: 16
                    }} >
                        <p style={{
                            fontWeight: '600',
                            fontStyle: 'SemiBold',
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0px',
                            color: '#406C65'
                        }}>
                            Location
                        </p>
                        <input
                            placeholder="Enter Location"
                            className="w-[210px] h-[39px] mt-2 px-2 bg-[#F5F5F5] placeholder-[#07070752] text-gray-500 rounded-md"
                        />
                    </div>
                    <div style={{
                        padding: 16
                    }} >
                        <p style={{
                            fontWeight: '600',
                            fontStyle: 'SemiBold',
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0px',
                            color: '#406C65'
                        }}>
                            Country/City
                        </p>
                        <input
                            placeholder="Enter Country/City"
                            className="w-[210px] h-[39px] mt-2 px-2 bg-[#F5F5F5] placeholder-[#07070752] text-gray-500 rounded-md"
                        />
                    </div>
                    <div style={{
                        padding: 16

                    }} >
                        <p style={{
                            fontWeight: '600',
                            fontStyle: 'SemiBold',
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0px',
                            color: '#406C65'
                        }}>
                            Numbers of rooms
                        </p>
                        <input
                            placeholder="bedrooms"
                            className="w-[210px] h-[39px] mt-2 px-2 bg-[#F5F5F5] placeholder-[#07070752] text-gray-500 rounded-md"
                        />
                    </div>

                </div>
                <div style={{

                    justifyItems: 'end',
                    paddingRight: 16


                }}>
                    <p style={{
                        backgroundColor: '#406C65',
                        width: '153px',
                        height: '39px',
                        borderRadius: '5px',
                        textAlign: 'center',
                        lineHeight: '39px',
                        color: 'white',
                        margin: 0,
                        fontWeight: '600'

                    }}>
                        Search
                    </p>
                </div>
            </div>

        </>
    )
}
