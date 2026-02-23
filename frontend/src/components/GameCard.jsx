export default function GameCard({ game }) {
  return (
    <div className="bg-enebaCard overflow-hidden shadow-lg hover:scale-[1.02] transition duration-200 border border-cyan-400">

      {/* Image */}
      <div className="relative">
        <img
          src={game.image_url}
          alt={game.name}
          className="w-full h-[340px] object-cover"
        />

        {/* Cashback Badge */}
        <div className="absolute bottom-10 bg-enebaAccent text-black text-xs px-3 py-1 font-semibold">
          💰 CASHBACK
        </div>

        <p className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm text-white text-xs py-1 px-3 font-bold border-t border-white/20 text-center">
          {game.platform}
        </p>
      </div>

      {/* Info */}
      <div className="p-4 text-white">
        <p className="text-sm font-semibold leading-snug">
          {game.name}
        </p>

        <p className="text-green-400 text-sm mt-1 uppercase font-bold">
          {game.region}
        </p>

        {/* Price */}
        <div className="mt-3">
          <p className="flex items-center gap-1 mb-1">
            <span className="text-gray-400 text-xs">From</span>
            <span className="text-gray-400 text-xs line-through font-bold">€{game.price}</span>
            <span className="text-lime-400 text-xs font-bold">-{game.discount}%</span>
          </p>

          <p className="text-2xl font-bold">
            €{game.final_price}
          </p>

          <p className="text-lime-400 text-xs font-bold">
            Cashback: €{game.cashback}
          </p>
        </div>

        {/* Likes */}
        <div className="mt-2 text-gray-400 text-xs">
          ♡ {game.likes}
        </div>
      </div>
    </div>
  );
}