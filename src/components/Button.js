import React from 'react'

function Button(props) {
  return (
    <button className=' border border-orange-600 p-5 text-orange-600 font-[poppins] py-2 rounded md:ml-8 hover:bg-orange-600 hover:text-white duration-500'>
        {props.children}
    </button>
  )
}

export default Button