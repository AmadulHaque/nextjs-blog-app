
'use client'

import { useFormStatus } from 'react-dom'

export function Button({type="submit", classes, title='submit'}) {
    const { pending } = useFormStatus();
  return (
  
       <>
            <button type={type} disabled={pending ? true : false} className={classes} >{pending ? 'Submitting...' : title}</button>
        </>

  )
}
