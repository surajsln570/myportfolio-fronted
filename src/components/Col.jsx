
export default function Col({children, id='', style,  className}) {
  return (
  <div style={style} id={id} className={`flex flex-col justify-center p-2 ${className}`}>
      {children}
    </div>
  )
}
