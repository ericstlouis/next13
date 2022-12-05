'use client'
import { Popover, Transition } from '@headlessui/react'
import { Fragment, useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation';

export default function Create() {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("")
  const router = useRouter();


  const create = async(e: FormEvent<HTMLFormElement>) => {
    await fetch('http://127.0.0.1:8090/api/collections/tasks/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        topic,
        description
      }),
    });

    setTopic('');
    setDescription('');

    router.refresh()
  
  }

    return (
      <div className='flex justify-center w-full px-4'>
          <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                      ${open ? '' : 'text-opacity-90'}
                      group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span>Create Task</span>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4">
                      <div className="bg-slate-600 overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <form onSubmit={create}>
                          <div>
                              <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                              <input type="text" id="small-input" value={topic} onChange={(e) => setTopic(e.target.value)} className="block p-2 w-3/5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                          </div>
                          <div className="mb-6">
                              <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                              <textarea id="large-input" value={description} onChange={(e) => setDescription(e.target.value)} className="lock p-4 w-4/5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                          </div>       
                          <button type='submit'>
                            Create Task
                          </button>                 
                        </form>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
      </div>
    )
}