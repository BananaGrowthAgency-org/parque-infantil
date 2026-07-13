// Modelo de datos de la carte de Ludy'cafet. El contenido inicial vive en
// lib/restauration/seed.ts (CARTE_SEED) y se sirve vía lib/restauration/store.ts
// (Blob en prod, fichero local en dev). Aquí solo se definen los tipos, que
// reutilizan el store, el seed y el editor.

export type Supplement = { name: string; price: string };
export type SizedPrice = { size: string; price: string };
export type Variant = { name: string; description?: string };

export type Item = {
  name: string;
  note?: string;
  subnote?: string | string[];
  price?: string;
  prices?: SizedPrice[];
  supplements?: Supplement[];
  variants?: Variant[];
};

export type Section =
  | { kind: "items"; items: Item[] }
  | { kind: "group"; title: string; items: Item[] }
  | {
      kind: "formule";
      name: string;
      price?: string;
      formula?: string;
      contents?: string[];
    };

// Bloques de contenido libre (usados por la categoría "Infos Utiles", que no es
// una lista de productos sino texto/reglas). Cada bloque es editable in-place.
export type InfoBlock =
  | { kind: "para"; lead?: string; text: string }
  | { kind: "heading"; text: string; sub?: string }
  | { kind: "list"; items: string[] }
  | { kind: "banner"; text: string };

export type Categorie = {
  slug: string;
  label: string;
  emoji: string;
  color: string;
  softBg: string;
  shadow: string;
  alert?: string;
  sections?: Section[];
  infos?: InfoBlock[]; // contenido libre (categoría "Infos Utiles")
};
