import { FaSearchDollar, FaUpload } from "react-icons/fa"

const Header = () => {
  return (
    <div className='flex justify-between items-center gap-2'>
      <div className="w-full max-w-xl flex-center">
        <input type="text" placeholder='Search....' className="inline-block w-full py-2 px-4 pr-10 bg-slate-100 border-2 border-slate-400 focus:outline-none rounded-md" name="" id="" />
        <button type="submit" className="w-8 text-slate-500 -ml-8">
          <FaSearchDollar size={24} />
        </button>
      </div>

      <button className="px-8 bg-slate-800 text-white text-base uppercase font-bold py-4 rounded-xl hover:bg-slate-700 active:translate-y-0.5 flex-center gap-2">
        Upload
        <FaUpload />
      </button>
    </div>
  )
}

export default Header