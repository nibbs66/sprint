

import { sponsors } from '../../../../sponsors'
export default function Example() {

  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
        <p className="text-center text-lg font-semibold text-gray-600">
          Partners en Sponsoren
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {sponsors.map(({sponsor})=>(
            <div key={sponsor} className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img

                className="max-h-12"
                src={sponsor}
                alt="Workcation"
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
