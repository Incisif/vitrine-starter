export default function Home() {
 return (
    <main className="space-y-32 p-8">
      {[...Array(10)].map((_, i) => (
        <section key={i} className="h-[100vh] bg-gray-100 border">
          <h2 className="text-3xl">Section {i + 1}</h2>
        </section>
      ))}
    </main>
  )
}