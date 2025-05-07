export default function HandicapStats({ index, lowIndex }) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-md font-semibold">Handicap</h2>
        <p className="text-2xl">{index}</p>
        <p className="text-sm text-gray-500">Low index: {lowIndex}</p>
      </div>
    );
  }
  