"use client"
import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import {useTheme} from "next-themes";
import Link from 'next/link';



const Appbar = () => {
    const {theme, setTheme} = useTheme ();
    const [enabled, setEnabled] = useState(false)
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
    return null
    }

    return (
        <div className='p-5 flex justify-between shadow-lg'>
          <Link href={'/'}>
            <div>
              <h1>
                  Todo Next 13
              </h1>
            </div>
          </Link>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={`${
          enabled ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}>
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
        
      </div>
    )
}

export default Appbar