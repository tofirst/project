import React, { useEffect, useState } from 'react'
// import '../styles/form.styles.css'






function Form() {


  const [color, setColor] = useState('#666')

  useEffect(() => {
    const border = document.querySelector('#username-field')
    border.style.borderColor = color
  }, [color])


  return (
    <div className='h-full flex flex-col justify-center items-center gap-5'>

      <div className='w-[420px] h-[300px] bg-white rounded-md shadow-md p-8 flex 
                      flex-col justify-center gap-5'>
        <h5 className='text-2xl font-semibold'>ลงชื่อเข้าใช้</h5>
        <form id="login-form" action="" className='text-[10px] flex flex-col gap-4'>
          <div className='username__textfield'>
            <input type="text" id='username-field' 
                    className='w-full h-8 border-b-[1px] border-[#666] bg-transparent 
                              outline-none py-[6px] px-[10px] pl-0' required placeholder='อีเมล หรือ โทรศัพท์' />
          </div>

          <div className='signup__container'>
            <span>ยังไม่มีบัญชีหรือ</span><a className='text-primary ml-1 hover:underline' href="#">สร้างได้เลย!</a> <br />
          </div>

          <div className='login_with_picture__container'>
            <a className='text-primary hover:underline' href="#">ลงชื่อเข้าใช้ด้วยรูปภาพ</a> <br />
          </div>

          
          <div className='w-full flex justify-end gap-1'>
            {/* <button type='button' id="prev-button" className="btn bg-secondary hover:bg-[#666]" onClick={() => console.log('click') }>ย้อนกลับ</button> */}
            <button type='submit' id="next-button" 
                    className='btn hover:bg-[#005596]'>ถัดไป</button>
          </div>
        </form>
      </div>
      {/* <button type='button' onClick={() => setColor("#fe0000")} >Change border color</button> */}


    </div>
  )
}



export default Form