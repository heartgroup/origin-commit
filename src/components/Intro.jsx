import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import { IconLink } from '@/components/IconLink'
import { Logo } from '@/components/Logo'
import { SignUpForm } from '@/components/SignUpForm'
import IconButton from './IconButton'
import ModalWrapper from './ModalWrapper'
import ContactUs from './ContactUs'

const CalendlyWidget = dynamic(() => import('./CalendlyWidget'), { ssr: false });

function CalendarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" />
    </svg>
  )
}

function FeedIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 3a.5.5 0 0 1 .5-.5h.5c5.523 0 10 4.477 10 10v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5A8.5 8.5 0 0 0 3.5 4H3a.5.5 0 0 1-.5-.5V3Zm0 4.5A.5.5 0 0 1 3 7h.5A5.5 5.5 0 0 1 9 12.5v.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-.5a4 4 0 0 0-4-4H3a.5.5 0 0 1-.5-.5v-.5Zm0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M5.526 13.502c5.032 0 7.784-4.168 7.784-7.783 0-.119 0-.237-.008-.353a5.566 5.566 0 0 0 1.364-1.418 5.46 5.46 0 0 1-1.571.431c.571-.342.998-.88 1.203-1.513a5.483 5.483 0 0 1-1.737.664 2.738 2.738 0 0 0-4.662 2.495 7.767 7.767 0 0 1-5.638-2.858 2.737 2.737 0 0 0 .847 3.651 2.715 2.715 0 0 1-1.242-.341v.035a2.737 2.737 0 0 0 2.195 2.681 2.73 2.73 0 0 1-1.235.047 2.739 2.739 0 0 0 2.556 1.9 5.49 5.49 0 0 1-4.049 1.133A7.744 7.744 0 0 0 5.526 13.5" />
    </svg>
  )
}

export function Intro() {
  const [openSchedule, setOpenSchedule] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <div className="flex items-center jusitfy-center">
        <Link href="/">
          <Image src="/images/origin-logo.png" alt="" width={64} height={64} />
        </Link>
      </div>
      <h1 className="mt-4 font-display text-4xl/tight font-semibold text-white">
        ORIGIN <span className="font-normal">/</span> {' '}
        <span className="text-sky-300 font-light">Intelligence</span>
      </h1>
      <p className="mt-4 text-sm/6 text-gray-300">
        Origin developed and operates an industry-leading system to aggregate structured and unstructured data. We then use a combination of machine learning, artificial intelligence, and experienced human intelligence to process that data and monitor it in real-time. We provide services to government agencies and organizations.
      </p>
      <SignUpForm />
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconButton icon={CalendarIcon} className="flex-none" onClick={() => setOpenSchedule(true)}>
          Schedule a Consultation
        </IconButton>
        <IconButton icon={PhoneIcon} className="flex-none" onClick={() => setOpenContact(true)}>
          Contact Us
        </IconButton>
      </div>
      <ModalWrapper
        open={openSchedule}
        onClose={() => setOpenSchedule(false)}
        icon={CalendarIcon}
        title="Schedule a Consultation"
      >
        <div className="h-[600px] bg-white dark:bg-gray-950">
          <CalendlyWidget />
        </div>
      </ModalWrapper>
      <ModalWrapper
        open={openContact}
        onClose={() => setOpenContact(false)}
        icon={PhoneIcon}
        title="Contact Us"
      >
        <ContactUs />
      </ModalWrapper>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Copyright &copy; {new Date().getFullYear()} Origin Intelligence Inc. All Rights Reserved.
     </p>
  )
}
