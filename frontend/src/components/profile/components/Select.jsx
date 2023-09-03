export default function Select ({ label, options }) {
  return (
    <div className='flex flex-col'>
      <label htmlFor=''>{label}</label>
      <select name='' id='' className='bg-whiteCustom border rounded-md p-2 w-[200px] '>
        {
          options.map(({ children, value }) => {
            return (
              <option key={children} value={value}>{children}</option>
            )
          })
        }
      </select>
    </div>
  )
}
