import { useId, useState } from 'react'
import emailjs from 'emailjs-com'
import { Button } from '@/components/Button'

export function SignUpForm() {
  const [emailAddress, setEmailAddress] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [errorText, setErrorText] = useState('');
  let id = useId()

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const handleChangeEmail = (e) => {
    setEmailAddress(e.target.value);
    if (!!e.target.value && !validateEmail(e.target.value)) {
      setErrorText('Invalid email address');
    } else {
      setErrorText(''); 
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(emailAddress)) {
      return;
    }
  
    const serviceID = 'service_6ureu2q';
    const templateID = 'template_4hdqwxt';
    const userID = 'PcVIawm6HMW7VKYcV';
  
    emailjs
      .send(serviceID, templateID, { emailAddress }, userID)
      .then((response) => {
        setIsSent(true);
        setEmailAddress('A representative will contact you');
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        setErrorText('Error sending email');
      });
  }

  return (
    <form onSubmit={handleSubmit} className="relative isolate mt-8 flex items-center pr-1">
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <input
        required
        type="email"
        autoComplete="email"
        name="email"
        id={id}
        placeholder="Email Address"
        className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
        disabled={isSent}
        value={emailAddress}
        onChange={handleChangeEmail}
      />
      {!!errorText && (
        <span className="absolute left-2 bottom-[-28px] text-sm text-red-800">{errorText}</span>
      )}
      <Button
        type="submit"
        arrow={!isSent}
        disabled={isSent}
      >
        {isSent ? "Thank You" : "Get Access"}
      </Button>
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
      <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" />
    </form>
  )
}
