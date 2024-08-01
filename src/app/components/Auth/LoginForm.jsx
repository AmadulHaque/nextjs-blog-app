
'use client'
import { useState } from 'react'
import { Button } from "@/app/components/UI/Button";
import { useRouter } from 'next/navigation';
import { LoginUser } from '@/app/(pages)/actions/login';


export default function LoginForm() {
    const [state, setState] = useState({ message: '', errors: {} })
    const [loadding, seTLoadding] = useState(false)
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
       
        // loadding true
        seTLoadding(true)

        const response = await LoginUser(formData)

        if (response.success) {
          setState({ message: response.message, errors: {} })

          // 1.0 second wait than router push
          setTimeout(() => {
            // router.push('/dashboard');
            window.location.href = '/dashboard'
          }, 1000);
        } else {
            const errors = response.errors; 
            setState({ message: '', errors:errors })
        }
  
        seTLoadding(false);return;
    }

  return (
    <>
        <form onSubmit={handleSubmit} method="POST">
            <div className="ckw57">
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

            </div>

            <div className="cphsf">
            <Button classes="c4pyj cmoq7 cwams cs3c2 c894v" loadding={loadding} />
            </div>

            {state.message && <p className="mt-5 text-center ">{state.message}</p>} 
        </form> 
    </>
  )
}
