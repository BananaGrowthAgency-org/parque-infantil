"use client";

import { useCallback, useState } from "react";
import FadeInUp from "@/components/ui/FadeInUp";
import CategoryCard from "@/components/restauration/CategoryCard";
import type { Categorie } from "@/components/restauration/data";
import { saveCarteAction } from "@/app/restauration/actions";
import {
  EdText,
  EditToolbar,
  RowControls,
  ThemePicker,
  THEMES,
  move,
  uid,
  useAutosave,
} from "./primitives";

export default function EditableHub({
  initialCarte,
  editable,
}: {
  initialCarte: Categorie[];
  editable: boolean;
}) {
  const [carte, setCarte] = useState<Categorie[]>(initialCarte);
  const [editing, setEditing] = useState(false);
  const status = useAutosave(carte, saveCarteAction);

  const patch = useCallback((fn: (m: Categorie[]) => void) => {
    setCarte((prev) => {
      const next = structuredClone(prev);
      fn(next);
      return next;
    });
  }, []);

  const addCategory = () =>
    patch((m) => {
      m.push({
        slug: `categorie-${uid()}`,
        label: "Nouvelle catégorie",
        emoji: "🍽️",
        color: THEMES[0].color,
        softBg: THEMES[0].softBg,
        shadow: THEMES[0].shadow,
        sections: [],
      });
    });

  return (
    <>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {editing
          ? carte.map((cat, i) => (
              <EditableHubCard
                key={cat.slug}
                cat={cat}
                index={i}
                total={carte.length}
                patch={patch}
              />
            ))
          : carte.map((cat, i) => (
              <FadeInUp
                key={cat.slug}
                delay={i * 0.08}
                y={28}
                className={
                  i === carte.length - 1 && carte.length % 2 === 1
                    ? "md:col-span-2 md:max-w-md md:mx-auto md:w-full"
                    : ""
                }
              >
                <CategoryCard cat={cat} />
              </FadeInUp>
            ))}

        {editing && (
          <button
            type="button"
            onClick={addCategory}
            className="min-h-[16rem] rounded-clay-lg border-[3px] border-dashed border-gray-300 text-gray-500 font-fredoka font-bold text-lg hover:bg-white/60 hover:border-lk-green hover:text-lk-green transition-colors"
          >
            + Ajouter une catégorie
          </button>
        )}
      </div>

      {editable && <EditToolbar editing={editing} setEditing={setEditing} status={status} />}
    </>
  );
}

/* ─────────────── tarjeta editable (misma pinta que CategoryCard) ─────────────── */
function EditableHubCard({
  cat,
  index,
  total,
  patch,
}: {
  cat: Categorie;
  index: number;
  total: number;
  patch: (fn: (m: Categorie[]) => void) => void;
}) {
  const find = (m: Categorie[]) => m.find((c) => c.slug === cat.slug)!;

  return (
    <div className={`h-full rounded-clay-lg p-6 ${cat.shadow} bg-white flex flex-col`}>
      <RowControls
        index={index}
        total={total}
        label={cat.label}
        onUp={() => patch((m) => move(m, index, -1))}
        onDown={() => patch((m) => move(m, index, 1))}
        onDelete={() =>
          patch((m) => {
            const i = m.findIndex((c) => c.slug === cat.slug);
            if (i >= 0) m.splice(i, 1);
          })
        }
        className="mb-3"
      />

      <div className="flex items-center justify-center min-h-[3.5rem]">
        <EdText
          as="h3"
          editing
          value={cat.label}
          placeholder="Nom de la catégorie"
          onCommit={(v) => patch((m) => (find(m).label = v))}
          className="font-fredoka text-2xl font-extrabold text-gray-800 text-center leading-tight"
        />
      </div>

      <div className="flex justify-center my-4">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center shadow-clay-inset"
          style={{ backgroundColor: cat.softBg }}
        >
          <input
            defaultValue={cat.emoji}
            maxLength={4}
            aria-label="Emoji"
            onBlur={(e) => patch((m) => (find(m).emoji = e.target.value || "🍽️"))}
            className="w-16 h-16 text-4xl text-center bg-transparent outline-none"
          />
        </div>
      </div>

      <div className="mt-auto flex flex-col items-center gap-3">
        <ThemePicker
          value={cat.color}
          onPick={(t) =>
            patch((m) => {
              const c = find(m);
              c.color = t.color;
              c.softBg = t.softBg;
              c.shadow = t.shadow;
            })
          }
        />
        <a
          href={`/restauration/${cat.slug}`}
          className="font-fredoka font-semibold px-5 py-1.5 text-sm rounded-full text-white shadow-clay-sm transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: cat.color }}
        >
          Éditer la carte →
        </a>
      </div>
    </div>
  );
}
