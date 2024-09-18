import React from 'react'

const ArtikelStartButton = ({startTest}) => {
  return (
    <div>
      <button onClick={() => startTest()} className='text-xl p-5 h-4 grid place-content-center hover:border-none float-right border-slate-950 text-center bg-sky-400 shadow-2xl rounded text-zinc-50 from-neutral-900 hover:bg-blue-700' > Start Artikel Test </button>
    </div>
  )
}

export default ArtikelStartButton
