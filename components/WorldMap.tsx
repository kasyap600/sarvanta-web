// Decorative world map SVG — no external dependencies
// Mercator-projected continent outlines + trade route arcs from India

export default function WorldMap() {
  // svgX/svgY: lon/lat → pixel in a 1000×500 viewBox (simple Mercator)
  const toXY = (lon: number, lat: number): [number, number] => [
    ((lon + 180) / 360) * 1000,
    ((90 - lat) / 180) * 500,
  ];

  const india = toXY(78, 20);

  const destinations = [
    toXY(-0.1,  51.5),   // London
    toXY(10.0,  53.5),   // Hamburg
    toXY(55.3,  25.2),   // Dubai
    toXY(46.7,  24.7),   // Riyadh
    toXY(103.8,  1.4),   // Singapore
    toXY(121.5, 31.2),   // Shanghai
    toXY(139.7, 35.7),   // Tokyo
    toXY(-74.0, 40.7),   // New York
    toXY(-43.2, -22.9),  // São Paulo
    toXY(36.8,  -1.3),   // Nairobi
    toXY(133.8, -25.3),  // Australia
  ];

  return (
    <svg
      viewBox="0 0 1000 500"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Lat/lon grid */}
      {[-60, -30, 0, 30, 60].map((lat) => {
        const y = ((90 - lat) / 180) * 500;
        return <line key={`lat${lat}`} x1={0} y1={y} x2={1000} y2={y} stroke="#C9A84C" strokeWidth={0.3} strokeOpacity={0.15} />;
      })}
      {[-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150].map((lon) => {
        const x = ((lon + 180) / 360) * 1000;
        return <line key={`lon${lon}`} x1={x} y1={0} x2={x} y2={500} stroke="#C9A84C" strokeWidth={0.3} strokeOpacity={0.15} />;
      })}

      {/* Trade route arcs */}
      {destinations.map(([dx, dy], i) => {
        const [ix, iy] = india;
        const mx = (ix + dx) / 2;
        const my = Math.min(iy, dy) - 60;
        return (
          <path
            key={i}
            d={`M ${ix} ${iy} Q ${mx} ${my} ${dx} ${dy}`}
            fill="none"
            stroke="#C9A84C"
            strokeWidth={0.8}
            strokeOpacity={0.4}
            strokeDasharray="4 6"
          />
        );
      })}

      {/* Destination dots */}
      {destinations.map(([dx, dy], i) => (
        <circle key={i} cx={dx} cy={dy} r={3} fill="#C9A84C" fillOpacity={0.55} />
      ))}

      {/* India origin */}
      <circle cx={india[0]} cy={india[1]} r={6} fill="#C9A84C" fillOpacity={0.9} />
      <circle cx={india[0]} cy={india[1]} r={12} fill="none" stroke="#C9A84C" strokeWidth={1} strokeOpacity={0.4} />
      <circle cx={india[0]} cy={india[1]} r={20} fill="none" stroke="#C9A84C" strokeWidth={0.5} strokeOpacity={0.2} />
    </svg>
  );
}
