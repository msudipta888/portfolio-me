"use client"
import React from 'react'

export const MagicButton = ({
    title, Icon, position
}: {
    title: String, Icon: React.ReactNode, position?: String
}) => {
 
  return (
    <div>
      <button
        className="relative inline-flex h-12 w-full overflow-hidden rounded-full cursor-pointer p-[1px] focus:outline-none md:w-60 md:mt-10"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] space-x-4" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl space-x-6">
          <span>{title} </span>
          <span>{Icon}</span>
        </span>
      </button>
    </div>
  )
}
