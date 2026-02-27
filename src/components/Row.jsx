
export default function Row({children, id='', className=''}) {
  return (
    <div id={id} className={`flex items-center ${className}`}>
      {children}
    </div>
  )
}
