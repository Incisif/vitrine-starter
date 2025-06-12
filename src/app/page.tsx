export default function Home() {
  const grayClasses = ['bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 'bg-gray-500']

  return (
    <main>
      {grayClasses.map((bg, i) => (
        <section key={i} className={`h-[100vh] ${bg} `}>
          <h2 className="text-3xl text-white">Section {i + 1}</h2>
        </section>
      ))}
    </main>
  )
}
