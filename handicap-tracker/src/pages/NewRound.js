import { useState } from 'react';

export default function NewRound() {
  const [score, setScore] = useState('');
  const [course, setCourse] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = () => {
    // Logic for saving round (could use localStorage or send to backend)
    console.log({ score, course, rating });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">New Round</h1>
      <input type="number" placeholder="Score" className="input" value={score} onChange={e => setScore(e.target.value)} />
      <input type="text" placeholder="Course Name" className="input" value={course} onChange={e => setCourse(e.target.value)} />
      <input type="number" placeholder="Course Rating" className="input" value={rating} onChange={e => setRating(e.target.value)} />
      <button onClick={handleSubmit} className="bg-red-600 text-white px-4 py-2 mt-4 rounded">Save Round</button>
    </div>
  );
}
