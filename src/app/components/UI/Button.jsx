
export function Button({type="submit", classes, title='submit',loadding=false}) {
  return (
    <>
        <button type={type} disabled={loadding ? true : false} className={classes} >{loadding ? 'Submitting...' : title}</button>
    </>
  )
}
