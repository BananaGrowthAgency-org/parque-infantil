import type { InfoBlock } from "./data";

// Renderiza los bloques libres de la categoría "Infos Utiles" (modo lectura).
// El contenido vive ahora en la carte (editable); ver EditableCategory para el modo edición.
export default function InfosUtilesContent({
  blocks,
  color = "#0EA5E9",
}: {
  blocks: InfoBlock[];
  color?: string;
}) {
  return (
    <div className="font-nunito text-gray-700 text-base md:text-lg space-y-6 leading-relaxed">
      {blocks.map((b, i) => {
        if (b.kind === "para") {
          return (
            <p key={i}>
              {b.lead && <span className="font-semibold text-gray-900">{b.lead}</span>}
              {b.text}
            </p>
          );
        }
        if (b.kind === "heading") {
          return (
            <div key={i} className="pt-3">
              <h3 className="font-fredoka text-2xl md:text-3xl font-extrabold" style={{ color }}>
                {b.text}
              </h3>
              {b.sub && <p className="italic text-gray-500 text-base mt-1">{b.sub}</p>}
            </div>
          );
        }
        if (b.kind === "list") {
          return (
            <ul key={i} className="list-disc pl-6 space-y-3">
              {b.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ul>
          );
        }
        // banner
        return (
          <p
            key={i}
            className="font-fredoka text-2xl md:text-3xl font-extrabold text-center pt-4"
            style={{ color }}
          >
            {b.text}
          </p>
        );
      })}
    </div>
  );
}
