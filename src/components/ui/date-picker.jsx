export function DatePicker({ onChange, className }) {
    return (
      <input
        type="date"
        className={`w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  