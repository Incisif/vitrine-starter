export default function Home() {
  const grayClasses = ['bg-gray-500', 'bg-gray-400', 'bg-gray-300', 'bg-gray-200', 'bg-gray-100']

  return (
    <>
      {grayClasses.map((bg, i) => (
        <section
          key={i}
          data-scroll-section
          className={`h-[100vh] flex items-center justify-center ${bg}`}
        >
          <h2 data-scroll className="text-3xl text-white">
            Section {i + 1}
          </h2>
        </section>
      ))}
    </>
  )
}
