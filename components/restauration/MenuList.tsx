import type { Item } from "./data";

export default function MenuList({ items }: { items: Item[] }) {
  return (
    <ul className="divide-y divide-gray-100">
      {items.map((item, idx) => (
        <li key={idx} className="py-4">
          <div className="flex justify-between items-baseline gap-8">
            <div className="font-nunito text-gray-800 flex-1 min-w-0 text-base md:text-lg">
              <span className="font-semibold">{item.name}</span>
              {item.note && <span className="italic text-gray-500"> {item.note}</span>}
            </div>
            {item.price && (
              <span className="font-fredoka font-bold text-gray-700 whitespace-nowrap text-lg md:text-xl">
                {item.price}
              </span>
            )}
            {item.prices && (
              <div className="flex flex-col items-end gap-1 shrink-0">
                {item.prices.map((p, pIdx) => (
                  <span key={pIdx} className="whitespace-nowrap text-base">
                    <span className="font-nunito text-gray-500">{p.size} : </span>
                    <span className="font-fredoka font-bold text-gray-700">{p.price}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
          {item.subnote && (
            <div className="font-nunito italic text-gray-500 text-base mt-1.5 leading-snug">
              {(Array.isArray(item.subnote) ? item.subnote : [item.subnote]).map((line, lIdx) => (
                <div key={lIdx}>{line}</div>
              ))}
            </div>
          )}
          {item.variants && (
            <ul className="mt-3 pl-5 space-y-1.5 border-l-2 border-gray-100">
              {item.variants.map((v, vIdx) => (
                <li key={vIdx} className="font-nunito text-gray-700 text-base md:text-lg">
                  <span className="font-semibold">{v.name}</span>
                  {v.description && (
                    <span className="italic text-gray-500"> : {v.description}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
          {item.supplements?.map((sup, sIdx) => (
            <div
              key={sIdx}
              className="flex justify-between items-baseline gap-4 mt-2 pl-5 border-l-2 border-gray-100"
            >
              <span className="font-nunito text-gray-600 text-base italic">{sup.name}</span>
              <span className="font-fredoka font-semibold text-gray-600 text-base whitespace-nowrap">
                {sup.price}
              </span>
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
}
