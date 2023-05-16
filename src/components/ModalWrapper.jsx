import { Fragment, useRef } from 'react'
import clsx from 'clsx'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const ModalWrapper = ({ open, onClose, icon: Icon, title, children }) => {
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment} style={{ zIndex: 100 }}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-950 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
                <div className="bg-white dark:bg-gray-950 px-6 pt-6 pb-10">
                  <div className="sm:flex sm:items-start">
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {Icon && (
                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                              <Icon className={clsx('flex-none w-4 h-4 text-blue-950 dark:text-white/30')} />
                            </div>
                          )}
                          <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            {title}
                          </Dialog.Title>
                        </div>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white dark:bg-gray-950 text-zinc-400 hover:text-zinc-500 focus:outline-none focus:ring-0 focus:ring-white dark:focus:ring-gray-950 focus:ring-offset-2"
                            onClick={onClose}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-4">
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ModalWrapper;
