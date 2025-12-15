<div className="w-[1202px] h-[923px] px-24 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 inline-flex flex-col justify-start items-start">
  <div className="self-stretch h-[923.10px] relative">
    <div className="w-[992.02px] h-56 left-[15.99px] top-[31.99px] absolute bg-gradient-to-br from-slate-800/80 to-gray-900/80 rounded-2xl shadow-xl outline outline-[0.83px] outline-offset-[-0.83px] outline-cyan-500/20">
      <div className="w-32 h-8 absolute left-[24.83px] top-[24.83px]">
        <div className="text-cyan-300 text-2xl font-normal leading-8">
          Scoreboard
        </div>
      </div>

      <div className="w-[942.36px] h-32 absolute left-[24.83px] top-[72.81px]">
        {/* Wins */}
        <div className="w-72 h-32 absolute left-0 top-0 bg-yellow-500/20 rounded-2xl">
          <div className="absolute left-[127.64px] top-[52px] text-yellow-400 text-3xl text-center">
            0
          </div>
          <div className="absolute bottom-3 w-full text-center text-gray-300 text-sm">
            Wins
          </div>
        </div>

        {/* Draws */}
        <div className="w-72 h-32 absolute left-[319.44px] top-0 bg-blue-500/20 rounded-2xl">
          <div className="absolute left-[127.66px] top-[52px] text-blue-400 text-3xl text-center">
            0
          </div>
          <div className="absolute bottom-3 w-full text-center text-gray-300 text-sm">
            Draws
          </div>
        </div>

        {/* Losses */}
        <div className="w-72 h-32 absolute left-[638.89px] top-0 bg-red-500/20 rounded-2xl">
          <div className="absolute left-[127.64px] top-[52px] text-red-400 text-3xl text-center">
            0
          </div>
          <div className="absolute bottom-3 w-full text-center text-gray-300 text-sm">
            Losses
          </div>
        </div>
      </div>
    </div>

    {/* Main Game Section */}
    <div className="w-[618.97px] h-[597.54px] absolute left-[202.51px] top-[293.57px]">
      <div className="text-center text-cyan-300 text-5xl leading-tight">
        Rock Paper Scissors
      </div>

      <p className="mt-4 text-center text-gray-300 text-lg">
        Challenge the computer in this classic game with a modern twist!
      </p>

      <div className="mt-10 flex justify-center">
        <button className="w-48 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white text-xl shadow-lg">
          Start Game
        </button>
      </div>
    </div>
  </div>
</div>
