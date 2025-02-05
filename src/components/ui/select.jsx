export function Select({ children, onChange, className, defaultValue }) {
    return (
      <select
        className={`w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        onChange={(e) => onChange(e.target.value)}
        defaultValue={defaultValue}
      >
        {children}
      </select>
    );
  }
  
  export function SelectItem({ value, children }) {
    return <option value={value}>{children}</option>;
  }
  