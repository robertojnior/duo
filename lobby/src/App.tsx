import { MagnifyingGlassPlus } from 'phosphor-react'

import { Logo } from './Components/Logo'

import './styles/main.css'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <Logo />

      <h1 className="text-6xl text-white font-black mt-20">
        Your{' '}
        <span className="text-transparent bg-duo-gradient bg-clip-text">
          duo
        </span>{' '}
        is here.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/assets/image1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>

            <span className="text-zinc-300 text-sm block">15 parties</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/assets/image2.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex Legends</strong>

            <span className="text-zinc-300 text-sm block">4 parties</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/assets/image3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">CS:GO</strong>

            <span className="text-zinc-300 text-sm block">10 parties</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/assets/image4.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>

            <span className="text-zinc-300 text-sm block">2 parties</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/assets/image5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>

            <span className="text-zinc-300 text-sm block">18 parties</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/assets/image6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>

            <span className="text-zinc-300 text-sm block">60 parties</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-duo-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Didn't find a party?
            </strong>

            <span className="text-zinc-400 block">
              Create your own to find new players!
            </span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-2">
            <MagnifyingGlassPlus size={24} />
            Create party
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
