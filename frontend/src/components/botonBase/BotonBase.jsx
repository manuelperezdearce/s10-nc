import React from 'react'

const BotonBase = ({ name, clase, func, children }) => {
  return (
    <button
      onClick={func}
      className={`${clase} botonBase font-titulo flex flex-row flex-nowrap items-center justify-start gap-2 `}
    >
      {name}
      {children || null}
    </button>
  )
}

export default BotonBase
