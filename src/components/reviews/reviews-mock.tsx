/**
 * Component for loading state of reviews
 */
export default function ReviewsMock() {
  return (
    <>
      <div className="animate-pulse">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 place-items-center p-4">
          <div className="w-full text-center flex flex-col gap-2 place-items-center">
            <div className="w-[195px] h-[75px] bg-slate-200" />
            <div className="inline-block bg-slate-200 w-20 h-4" />
          </div>

          <div className="w-full text-center flex flex-col gap-2 place-items-center">
            <div className="inline-block bg-slate-200 w-44 h-4" />
            <div className="inline-block bg-slate-200 w-36 h-4" />
          </div>

          <div className="w-full text-center flex flex-col gap-2 place-items-center">
            <div className="inline-block bg-slate-200 w-36 h-4" />
            <div className="inline-block bg-slate-200 w-44 h-4" />
            <div className="inline-block bg-slate-200 w-48 h-4" />
          </div>

          <div className="w-full text-center flex flex-col gap-2 place-items-center">
            <div className="inline-block bg-slate-200 w-48 h-16 rounded-lg" />
            <div className="inline-block bg-slate-200 w-48 h-4" />
          </div>
        </div>
      </div>
    </>
  )
}
