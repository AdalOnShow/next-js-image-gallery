import Gallery from "@/components/gallery"
import Header from "@/components/header"
import Navbar from "@/components/nav"

const HomePage = () => {
  return (
    <main className="flex-center min-h-screen bg-sky-200 py-20">
      <div className="w-full max-w-screen-2xl mx-auto p-20 bg-slate-200 rounded-xl shadow-lg">
        <Navbar />
        <Header />
        <Gallery />
      </div>
    </main>
  )
}

export default HomePage