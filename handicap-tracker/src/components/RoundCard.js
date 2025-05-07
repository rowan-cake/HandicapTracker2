export default function RoundCard({ name, date, score, diff, holes, tee, imageUrl }) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center">
        <div>
          <h2 className="font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">{date}</p>
          <p className="text-3xl font-bold">{score} <span className="text-sm bg-gray-200 px-2 py-1 rounded">DIFF {diff}</span></p>
          <p className="text-sm">{holes} HOLES · {tee}</p>
        </div>
        <img src={imageUrl} alt="course" className="w-24 h-24 rounded-lg object-cover" />
      </div>
    );
  }
  