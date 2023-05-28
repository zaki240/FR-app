import React from 'react'

export default function input() {
  return (

    <div className="flex gap-5">
        <div className="flex flex-col gap-5">
        <input type="text" placeholder="Nama" className="input input-bordered input-accent w-full max-w-xs" />
        <input type="text" placeholder="Jam buka" className="input input-bordered input-accent w-full max-w-xs" />
        <input type="text" placeholder="Harga" className="input input-bordered input-accent w-full max-w-xs" />
        </div>
        <div className="flex flex-col gap-5">
        <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
        <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
        <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
        </div>
        
        <div className="items-end">
        <button className="btn btn-wide text-white mt-12">Save</button>
        </div>

    </div>
  )
}
