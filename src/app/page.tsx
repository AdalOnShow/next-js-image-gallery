import Header from "@/components/header"
import Navbar from "@/components/nav"

const HomePage = () => {
  return (
    <main className="flex-center min-h-screen bg-sky-200">
      <div className="w-full max-w-screen-2xl mx-auto p-20 bg-slate-200 rounded-xl shadow-lg">
        <Navbar />
        <Header />
        <h1 className="text-green-600 text-4xl font-bold text-center">Home Page</h1>
      </div>
    </main>
  )
}

export default HomePage