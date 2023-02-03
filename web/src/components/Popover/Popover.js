const Popover = () => {
  return (
    <div className={`flex w-full z-20`}>
      <div
        className={`absolute bottom-12  drop-shadow-lg flex flex-col justify-center w-full items-center  group-hover:flex`}
      >
        <span
          className={`flex flex-col rounded-md items-center py-3 px-4 bg-black opacity-60 text-white  font-semibold text-sm text-center whitespace-nowrap`}
        >
          <span className={` group-hover:flex`}>Bress Sportcenter</span>
          <span className={` group-hover:flex`}>Nieuwe Inslag 99</span>
          <span className={` group-hover:flex`}>4817 GN Breda</span>
        </span>
        {/*<div className={`h-4 w-4 rotate-45 bg-black opacity-50 -mt-2.5`}></div>*/}
      </div>
    </div>
  )
}

export default Popover
