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

export type Categorie = {
  slug: string;
  label: string;
  emoji: string;
  color: string;
  softBg: string;
  shadow: string;
  alert?: string;
  sections?: Section[];
};

export const CATEGORIES: Categorie[] = [
  {
    slug: "boissons-chaudes",
    label: "Les Boissons Chaudes",
    emoji: "☕",
    color: "#E8731A",
    softBg: "#FFEFE2",
    shadow: "shadow-clay-orange",
    sections: [
      {
        kind: "items",
        items: [
          { name: "Café",          note: "(expresso)",                price: "1,80 €" },
          { name: "Café",          note: "(expresso) d'exception",    price: "2,10 €" },
          { name: "Grand café",    note: "(double expresso)",         subnote: "(ou décaféiné)", price: "2,50 €" },
          { name: "Café allongé",                                     price: "1,90 €" },
          { name: "Café allongé",  note: "d'exception",               price: "2,20 €" },
          { name: "Petit café crème",                                 price: "2,10 €" },
          { name: "Grand café crème",                                 price: "2,80 €" },
          { name: "Cappucino",                                        price: "2,90 €" },
          {
            name: "Chocolat au lait",
            price: "2,60 €",
            supplements: [{ name: "Supplément crème fouettée", price: "0,50 €" }],
          },
          {
            name: "Thé",
            subnote: "(Menthe, Nature, Fruits rouges, Caramel, Vanille, verveine)",
            price: "2,30 €",
          },
        ],
      },
    ],
  },
  {
    slug: "boissons-fraiches",
    label: "Les Boissons Fraîches",
    emoji: "🥤",
    color: "#FFD600",
    softBg: "#FFF8CC",
    shadow: "shadow-clay-yellow",
    sections: [
      {
        kind: "items",
        items: [
          {
            name: "Cristaline",
            prices: [
              { size: "0,50 L", price: "1,00 €" },
              { size: "1,50 L", price: "2,00 €" },
            ],
          },
          {
            name: "Sirop à l'eau",
            subnote: "(Grenadine ou Menthe)",
            prices: [
              { size: "30 cL (verre)", price: "1,00 €" },
              { size: "1 L (pichet)",  price: "2,50 €" },
            ],
          },
          {
            name: "Sirop à l'eau",
            subnote: [
              "(Fraise, pêche, citron, framboise, banane, kiwi,",
              "cerise, fruit de la passion, menthe glaciale, coco, vanille)",
            ],
            prices: [
              { size: "30 cL (verre)", price: "1,20 €" },
              { size: "1 L (pichet)",  price: "2,90 €" },
            ],
          },
          { name: "Pichet d'eau", prices: [{ size: "1 L",   price: "0,50 €" }] },
          { name: "Verre d'eau",  prices: [{ size: "25 cL", price: "0,10 €" }] },
          {
            name: "Diabolo",
            subnote: "(Limonade avec sirop)",
            prices: [
              { size: "30 cL", price: "1,50 €" },
              { size: "1 L",   price: "3,50 €" },
            ],
          },
          {
            name: "Canette 33 cL",
            subnote: [
              "Fanta Orange, Sprite, Fuzetea pêche, Coca (normal, zéro, cherry),",
              "Tropico, Orangina, Bière sans alcool, Volvic Citron, Perrier",
            ],
            price: "2,40 €",
          },
          {
            name: "Bouteille 50 cL",
            note: "(sauf FuzeTea & Tropico 40 cL)",
            subnote: [
              "Fanta Orange, Sprite, Fuzetea pêche,",
              "Coca (normal, zéro, cherry), Tropico, Orangina",
            ],
            price: "3,00 €",
          },
          { name: "Perrier sirop", prices: [{ size: "33 cL", price: "2,60 €" }] },
          {
            name: "Minute Maid",
            subnote: "(Pomme, Orange, Tropical)",
            prices: [{ size: "33 cL", price: "2,50 €" }],
          },
          { name: "Capri Sun", prices: [{ size: "20 cL", price: "1,60 €" }] },
          {
            name: "Granité",
            subnote: "Tropical ou fraise-banane",
            prices: [
              { size: "35 cL", price: "3,50 €" },
              { size: "24 cL", price: "2,50 €" },
            ],
          },
          {
            name: "Smoothie",
            subnote: "Exotic ou banane-fraise ou des îles ou ultraviolet",
            prices: [{ size: "33 cL", price: "3,50 €" }],
          },
          {
            name: "Milkshake",
            subnote: "Exotic ou banane-fraise ou des îles ou ultraviolet",
            prices: [{ size: "33 cL", price: "4,50 €" }],
          },
        ],
      },
    ],
  },
  {
    slug: "plaisirs-sales",
    label: "Plaisirs Salés",
    emoji: "🍕",
    color: "#2E9E2E",
    softBg: "#E8F7E8",
    shadow: "shadow-clay-green",
    alert: "ATTENTION ! Service du salé jusqu'à 13h30 uniquement !",
    sections: [
      {
        kind: "items",
        items: [
          { name: "Crispy de poulet", note: "(environ 100 g)", price: "3,90 €" },
          {
            name: "Corn Dog",
            subnote: "saucisse enrobée d'un beignet frit (saucisse de porc)",
            price: "3,90 €",
          },
          {
            name: "Hot-dog",
            subnote:
              "(pain brioché + saucisse + sauce / options : crispy oignons, cheese ou sauce cornichons 0,50 €)",
            price: "5,50 €",
          },
          {
            name: "Pizzas",
            note: "(diamètre 28 cm)",
            price: "9,90 €",
            variants: [
              { name: "Jambon / champignons", description: "base tomate" },
              { name: "Italiana",   description: "tomates cerises, perles de mozza, pesto" },
              { name: "Diavola",    description: "base tomate, mozza, salami épicé" },
              { name: "4 fromages", description: "base tomate, mozza, scamorza, fromage râpé, gorgonzola aop" },
              { name: "Margherita", description: "base tomate, mozza" },
            ],
          },
          { name: "Frite 150 G", price: "2,10 €" },
        ],
      },
      {
        kind: "formule",
        name: "FORMULE SNACKING",
        formula: "Votre choix salé + 3,60 € = 1 frite + 1 boisson 33 cL",
      },
      {
        kind: "formule",
        name: "FORMULE ENFANT",
        price: "6,90 €",
        contents: [
          "Crispy de poulet ou un Corn Dog + 1 petite frite (120 G)",
          "1 verre de sirop à l'eau (grenadine ou exotique)",
          "1 compote ou 1 glace (Smarties PopUp ou Pirulo)",
        ],
      },
    ],
  },
  {
    slug: "plaisirs-sucres",
    label: "Plaisirs Sucrés",
    emoji: "🍩",
    color: "#7B35A0",
    softBg: "#F5EEFF",
    shadow: "shadow-clay-purple",
    sections: [
      {
        kind: "group",
        title: "Crêpes",
        items: [
          { name: "Nature",    price: "2,00 €" },
          { name: "Sucre",     price: "2,20 €" },
          { name: "Nutella",   price: "2,80 €" },
          { name: "Confiture", note: "(fraise)", price: "2,50 €" },
          { name: "Caramel",   price: "3,00 €" },
        ],
      },
      {
        kind: "group",
        title: "Gaufres",
        items: [
          { name: "Sucre",     price: "2,50 €" },
          { name: "Nutella",   price: "3,10 €" },
          { name: "Confiture", note: "(fraise)", price: "2,80 €" },
          { name: "Caramel",   price: "3,50 €" },
        ],
      },
      {
        kind: "items",
        items: [
          { name: "Supplément crème fouettée", price: "0,50 €" },
          { name: "Donuts sucre",    price: "1,30 €" },
          { name: "Donuts chocolat", price: "1,40 €" },
          { name: "Maxi-cookie",     price: "1,90 €" },
          { name: "Compote",         price: "1,30 €" },
        ],
      },
      {
        kind: "group",
        title: "Paquets de Gâteaux secs",
        items: [
          { name: "Lulu",                note: "(fraise ou chocolat)", price: "2,10 €" },
          { name: "Pepito",              price: "2,10 €" },
          { name: "Mikado",              price: "2,60 €" },
          { name: "Petits Princes par 2", price: "0,90 €" },
        ],
      },
      {
        kind: "formule",
        name: "FORMULE LUDYGOUTER",
        price: "2,60 €",
        contents: ["1 compote + 1 Capri Sun + 1 sachet de Prince par 2"],
      },
      {
        kind: "items",
        items: [
          { name: "Confiseries", note: "(voir comptoir)" },
          { name: "Glaces",      note: "(voir comptoir)" },
        ],
      },
    ],
  },
  {
    slug: "infos-utiles",
    label: "Infos Utiles",
    emoji: "ℹ️",
    color: "#0EA5E9",
    softBg: "#E0F2FE",
    shadow: "shadow-clay",
  },
];
