import RoundCard from '../components/RoundCard';

export default function Feed() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Welcome</h1>
      <RoundCard 
        name="Niagara Parks"
        date="May 16th, 2023"
        score={78}
        diff={4.1}
        holes={18}
        tee="White Tee (6542 YDS)"
        imageUrl="https://example.com/golf-course.jpg"
      />
    </div>
  );
}
