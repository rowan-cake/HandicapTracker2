import HandicapStats from '../components/HandicapStats';

export default function Profile() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Profile</h1>
      <HandicapStats index={12.3} lowIndex={11.6} />
    </div>
  );
}
