import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { SlEnvolope } from 'react-icons/sl'

const Head = () => {
  return (
    <>
        <section className='head'>
            <div className="container d_flex">
                <div className="left row">
                    <BsTelephoneFill /> <label> +55 21 9999999 </label>
                    <SlEnvolope /> <label> example@gmail.com </label>
                </div>

                <div className="right row RText">
                    <label> Theme FAQ's </label>
                    <label> Need Helps </label>
                    <span>🏴‍☠️</span>
                    <label htmlFor=''>EN</label>
                    <span>🏴‍☠️</span>
                    <label htmlFor=''>USD</label>
                </div>
            </div>
        </section>
    </>
  )
}

export default Head