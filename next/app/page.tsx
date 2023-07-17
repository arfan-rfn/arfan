import Image from 'next/image'

export default function Home() {
  // Fonts: https://fonts.google.com/specimen/Birthstone?preview.text=Arfan%20Uddin&preview.size=62&preview.text_type=custom
  // Fonts2:https://fonts.google.com/specimen/Cookie?preview.text=Arfan%20Uddin&preview.size=62&preview.text_type=custom

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-12 lg:max-w-none lg:py-16">

        <div className="mt-6 space-y-12 grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-6">

          <div className="relative col-span-2 row-span-1 rounded-lg sm:row-span-1">
            <div className="relative h-full w-full overflow-hidden rounded-lg sm:h-full">
              <img
                src={'/img/arfan.png'}
                alt={'callout.imageAlt'}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="relative col-span-2 row-span-2 rounded-lg">
            <h1 className="text-9xl text-slate-700">
              Arfan Uddin
            </h1>
            <h3 className="text-4xl text-slate-500 ml-2">
              Software Engineer
            </h3>
          </div>

        </div>
      </div>
    </div>

  )
}