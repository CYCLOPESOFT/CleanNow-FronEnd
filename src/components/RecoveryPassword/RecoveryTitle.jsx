export default function RecoveryTitle({ title, image }) {
  return (
    <span>
      <img className="inline-block w-9 h-9 mr-2" src={image} />
      <span className="text-white">{title}</span>
    </span>
  );
}
