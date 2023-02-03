import sponsor1 from '../../../public/sponsors/img.png'
import sponsor3 from '../../../public/sponsors/img_2.png'
import sponsor4 from '../../../public/sponsors/img_3.png'
import sponsor5 from '../../../public/sponsors/img_4.png'
import sponsor2 from '../../../public/sponsors/img_5.png'

export default function Example() {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
        <p className="text-center text-lg font-semibold text-gray-600">
          Partners en Sponsoren
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <img

              className="max-h-12"
              src={sponsor1}
              alt="Workcation"
            />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <img

              className="max-h-12"
              src={sponsor2}
              alt="Workcation"
            />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <img

              className="max-h-12"
              src={sponsor3}
              alt="Workcation"
            />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <img

              className="max-h-12"
              src={sponsor4}
              alt="Workcation"
            />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <img

              className="max-h-12"
              src={sponsor5}
              alt="Workcation"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
