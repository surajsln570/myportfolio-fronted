
export default function Button({  children, className='',  type = "button",  onClick,  variant = "primary",  disabled = false,}) {
  const baseStyle ="px-4 py-1.5 rounded-lg transition-all hover:scale-102 cursor-pointer duration-300";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}