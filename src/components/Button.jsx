import React from 'react'

const Button = ({styles, title}) => {
  return (
    <a href="tel:786-498-9035">
        <button type="button" className={` shadow-2xl h-[48px] hover:text-[18px] py-2 px-4 bg-blue-gradient font-arimo font-bold text-[16px] text-blue-800 outline-none ${styles} rounded-full`}>{title}</button>
    </a>
    
  )
}

export default Button