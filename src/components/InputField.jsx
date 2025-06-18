const InputField = ({ id, label, type = "text", placeholder, value, onChange, onBlur, error, touched }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {touched && error && <div className="text-red-500 text-xs mt-1">{error}</div>}
    </div>
);

export default InputField;
