export default function PlanetInfoColumn({
  header,
  body,
}: {
  header: string;
  body: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="subheading2 text-paleblue">{header}</h3>
      <p className="text-white subheading1">
        {body}
      </p>
    </div>
  );
}
