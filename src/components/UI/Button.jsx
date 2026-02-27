export default function Button({
  children,
  className = "",
  type = "button",
  onClick,
  variant = "primary",
  disabled = false,
}) {

  const baseStyle =
    "px-5 py-2 rounded-xl cursor-pointer font-medium transition-all duration-300 " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 " +
    "active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover hover:scale-105 shadow-md hover:shadow-lg focus:ring-primary",

    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:scale-105 focus:ring-gray-400",

    danger:
      "bg-red-600 text-white hover:bg-red-700 hover:scale-105 shadow-md hover:shadow-lg focus:ring-red-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}