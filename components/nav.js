'use client'

import { useState } from 'react'

import IconQuill from './icon-quill'
import IconSearch from './icon-search'
import ThemeSwitcher from './theme-switcher'

export default function Nav() {
  const [keyword, setKeyword] = useState('')

  return (
    <nav className='px-6 border-b sticky top-0'>
      <div className='h-16 flex items-center gap-6'>
        <span className='font-serif text-2xl font-bold'>听风</span>

        <div className='flex items-center gap-2 bg-slate-100 rounded-full px-4'>
          <IconSearch className='text-slate-500' />
          <input
            className='w-7xl bg-transparent outline-none py-2 text-sm'
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            placeholder='探索'
          ></input>
        </div>
        

        <button className='ml-auto flex items-center gap-1 hover:text-slate-700'>
          <IconQuill />
          <span>创作</span>
        </button>
        <ThemeSwitcher />
        <button className='rounded-full bg-black text-white px-4 py-2 text-sm hover:bg-slate-800 transition-colors'>登录/注册</button>
      </div>
    </nav>
  )
}
