import { useEffect } from 'react'

const SprintType = () => {
  const firstName = ['s', 'p', 'r', 'i', 'n', 't']
  const lastName = ['b', 'r', 'a', 'b', 'a', 'n', 't']
  const park = ['p', 'a', 'r', 'k']

  return (
    <>
      <div className={`hidden lg:flex `}>
        {firstName.map((letter, idx) => (
          <div
            key={idx}
            className={`header z-10 flex h-28  w-28 items-center justify-center border-4 border-white bg-black text-8xl font-semibold uppercase tracking-wider text-[#fee906] opacity-100 `}
          >
            <span>{letter}</span>
          </div>
        ))}
        <div
          className={`header z-10 flex h-28  w-28 items-center justify-center border-4 border-white bg-[#cd0012] text-4xl font-semibold uppercase tracking-wider text-white `}
        >
          <div className={`flex flex-col items-center`}>
            <div className={`flex space-x-2`}>
              <span>X</span>
              <span>X</span>
            </div>
            <span>X</span>
          </div>
        </div>
      </div>
      <div className={`hidden gap-2 lg:flex`}>
        <div className={`flex `}>
          {lastName.map((letter, idx) => (
            <div
              key={idx}
              className={`header z-10 flex h-24  w-24 items-center justify-center border-4 border-white bg-black text-4xl font-semibold uppercase tracking-wider text-[#fee906] opacity-100 `}
            >
              <span>{letter}</span>
            </div>
          ))}
        </div>
        <div className={`flex`}>
          {park.map((letter, idx) => (
            <div
              key={idx}
              className={`header z-10 flex h-24  w-24 items-center justify-center border-4 border-white bg-black text-4xl font-semibold uppercase tracking-wider text-[#fee906] opacity-100 `}
            >
              <span>{letter}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SprintType
