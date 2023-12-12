type ProfileInputProps = {
  label: string
  inputProps: React.InputHTMLAttributes<HTMLInputElement>
}

export default function ProfileInput(props: ProfileInputProps) {
  const { inputProps, label } = props
  return (
    <div>
      <p>{label}</p>
      <input
        className="text-2 border-2 border-gray-300 rounded-md w-[400px] outline-none px-1"
        placeholder={`place input ${label}`}
        {...inputProps}
      />
    </div>
  )
}
