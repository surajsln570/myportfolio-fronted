
export default function Input({label, type = "text", name, value, onChange, placeholder}) {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label className="mb-1 font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 bg-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}