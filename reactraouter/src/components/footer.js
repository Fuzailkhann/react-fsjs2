import React from 'react'

const footer =() =>{
  return (
    <div className='h-[25vh] flex flex-col items-center justify-center gap-5'>
        <a className='flex items-center justify-center gap-4 ' href='https://github.com/Fuzailkhann'>
        <i class="fa-brands fa-github-alt"></i>
        <p className='text-[blue] text-2xl font-bold '>GitHub</p>

        </a>
        <a className='flex  items-center justify-center gap-4 ' href="https://www.linkedin.com/in/fuzailkhancoder/">
        <i class="fa-brands fa-linkedin  "></i>
        <p className='text-[blue] text-2xl font-bold '>LinkedIn</p>

        </a>
      
    </div>
  )
}

export default footer
