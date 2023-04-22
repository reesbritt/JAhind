import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'
import { useEffect, useRef, useState } from 'react'


export function FreeChapters() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    const email = e.target[0].value;
    if(email.includes('@') && email.includes('.')){
      setError(false);
      setSubmitted(true);
    } else {
      setError(true)
    }
  }

  return (
    <section
      id="mailing"
      aria-label="mailing"
      className="scroll-mt-14 bg-blue-600 sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute -top-32 left-0 w-full sm:left-3/4 sm:-top-5 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" />
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Be notified when the book is available to purchase 
            </h2>
            <p className="mt-4 text-lg tracking-tight text-blue-200">
              Enter your email address here to be updated once `Humans in the Extreme` is released and available to purchase
            </p>
          </div>
            <form className="lg:pl-16 validate" action="https://github.us8.list-manage.com/subscribe/post-json?u=a1d9a2a6c6e758d797bafc4f6&amp;id=2e2650f395&amp;f_id=006e71e0f0&c=?" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="formresponse" noValidate onSubmit={handleSubmit}>
              <h3 className="text-base font-medium tracking-tight text-white">
                Sign up to my mailing list{' '}
                <span aria-hidden="true">&rarr;</span>
              </h3>
              { <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
                <div className={submitted ? 'hidden' : "relative sm:static sm:flex-auto"}>
                  <input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL" 
                    required               
                    aria-label="Email address"
                    placeholder="Email address"
                    className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3"
                  />
                  <div className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-blue-300 peer-focus:bg-blue-500 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl" />
                </div>
                <Button
                  type="submit"
                  color="white"
                  className={submitted ? 'hidden' :  "mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none" }
                >
                  Sign me up!
                </Button>
              </div>}
              {submitted && <p className='text-base text-xl font-bold tracking-tight text-white'>Thanks for signing up!</p>}
              {error && <p className='text-base text-xl font-bold tracking-tight text-white'>Please enter a valid email address!</p>}
            </form>
            <iframe name='formresponse' width='0' height='0'></iframe>
        </Container>
      </div>
    </section>
  )
}
