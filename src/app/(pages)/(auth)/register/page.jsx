'use client'

import { useState } from 'react'
import { Button } from "@/app/components/UI/Button";
import IllustrationHero from "@/app/components/UI/Icons/IllustrationHero";
import { registerUser } from "@/app/(pages)/actions/register";
import { useRouter } from 'next/navigation';

export default function Register() {
  const [state, setState] = useState({ message: '', errors: {} })
  const [loadding, seTLoadding] = useState(false)
  const router = useRouter()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    // loadding true
    seTLoadding(true)
    const response = await registerUser(formData)
    
    if (response.success) {
      setState({ message: response.message, errors: {} })
      // 1.0 second wait than router push
      setTimeout(() => {
        router.push('/login');
      }, 1000);
    } else {
      setState({ message: '', errors: response.errors })
    }

    seTLoadding(false);return;
  }


  return (
    <>
      <section className="ccmpi"> 
        <div className="c1or4 cbm4u cv89m c9epx cfj2j" aria-hidden="true">
          <IllustrationHero/>
        </div>
        <div className="c0xm3 ccmpi cwd8x cbv9p cffqt">
          <div className="crett ckxfr cqmr5 cd3md"> 
            <div className="ca2yl cfeqe cbv9p">
              <h1 className="cv8nv crm28 cdp3t cm97t c7ur1 cv5ei cjniy chc94"> Welcome back to the Community </h1>
              <p className="cqmr5">Enter the information while you are registering</p>
            </div>
            <div className="cg2hf cbv9p"> 

              <form onSubmit={handleSubmit} method="POST">
                <div className="ckw57">
                  <div>
                    <label className="cxjuz" htmlFor="name">Full Name </label>
                    <input id="name" type="text" name="name" className="c9yrh ctkuh c894v" placeholder="Your name" required />
                    {state.errors.username && <p className="text-red-700">{state.errors.username}</p>}
                  </div>
                  <div>
                    <label className="cxjuz" htmlFor="email"> Email </label>
                    <input id="email" type="email" name="email" className="c9yrh ctkuh c894v" placeholder="Your email" required />
                    {state.errors.email && <p className="text-red-700">{state.errors.email}</p>}
                  </div>
                  <div>
                    <label className="cxjuz" htmlFor="password"> Password </label>
                    <input id="password" type="password" name="password" className="c9yrh ctkuh c894v" placeholder="Your password" autoComplete="on" required />
                    {state.errors.password && <p className="text-red-700">{state.errors.password}</p>}
                  </div>
                  <div>
                    <label className="cxjuz" htmlFor="address">Address </label>
                    <textarea name="address" className="c9yrh ctkuh c894v" placeholder="Your address" id=""></textarea>
                    {state.errors.address && <p className="text-red-700">{state.errors.address}</p>}
                  </div>
                </div>
                <div className="cphsf">
                  <Button classes="c4pyj cmoq7 cwams cs3c2 c894v" loadding={loadding} />
                </div>

                {state.message && <p className="mt-5 text-center ">{state.message}</p>} 
              </form> 
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
