
export default function Row({children, id='', className=''}) {
  return (
    <div id={id} className={`flex items-center p-2 ${className}`}>
      {children}
    </div>
  )
}
