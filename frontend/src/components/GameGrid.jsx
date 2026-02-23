import GameCard from "./GameCard";

export default function GameGrid({ games }) {
  return (
    <div className="px-8 mx-10">
      <p className="text-white mb-6 text-sm">
        Results found: {games.length}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}