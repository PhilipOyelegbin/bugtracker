import React from 'react'

function Footer() {
    const year = new Date().getFullYear();

  return (
    <footer className='text-center text-slate-500 px-5 py-5 border-t lg:px-20'>
        <p>&copy;{year} : MoonShot</p>
    </footer>
  )
}

export default Footer