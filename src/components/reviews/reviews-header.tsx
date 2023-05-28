/**
 * Component for reviews header
 */
export default function ReviewsHeader() {
  return (
    <>
      <header className="bg-yellow-500 text-yellow-950 hidden lg:block">
        <div className="grid gap-8 grid-cols-4 place-items-center p-3">
          <h2>Casino</h2>
          <h2>Bonus</h2>
          <h2>Features</h2>
          <h2>Play</h2>
        </div>
      </header>
    </>
  )
}
