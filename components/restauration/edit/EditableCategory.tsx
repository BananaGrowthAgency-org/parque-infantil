"use client";

import { useCallback, useState } from "react";
import type { Categorie, InfoBlock, Item, Section } from "@/components/restauration/data";
import InfosUtilesContent from "@/components/restauration/InfosUtilesContent";
import Menu from "@/components/restauration/Menu";
import { saveCategoryAction } from "@/app/restauration/actions";
import { EdText, EditToolbar, MiniBtn, move, useAutosave } from "./primitives";

type Patch = (fn: (c: Categorie) => void) => void;
type ItemsSection = Extract<Section, { kind: "items" | "group" }>;
type FormuleSection = Extract<Section, { kind: "formule" }>;

/* ─────────────── helpers subnote (string | string[]) ─────────────── */
const toLines = (s?: string | string[]): string[] =>
  s === undefined ? [] : Array.isArray(s) ? s : [s];
const fromLines = (lines: string[]): string | string[] | undefined =>
  lines.length === 0 ? undefined : lines.length === 1 ? lines[0] : lines;

/* ─────────────── componente raíz ─────────────── */
export default function EditableCategory({
  category: initial,
  editable,
}: {
  category: Categorie;
  editable: boolean;
}) {
  const [category, setCategory] = useState<Categorie>(initial);
  const [editing, setEditing] = useState(false);
  const save = useCallback((c: Categorie) => saveCategoryAction(c.slug, c), []);
  const status = useAutosave(category, save);

  const patch = useCallback<Patch>((fn) => {
    setCategory((prev) => {
      const next = structuredClone(prev);
      fn(next);
      return next;
    });
  }, []);

  const isInfos = category.slug === "infos-utiles";
  const canEdit = editable;
  const hasSections = !!category.sections && category.sections.length > 0;

  return (
    <>
      <div className={`max-w-4xl mx-auto bg-white rounded-clay-lg p-8 md:p-12 ${category.shadow}`}>
        {/* Alerte */}
        {editing && !isInfos ? (
          <div className="mb-7 text-center">
            <EdText
              as="p"
              editing
              value={category.alert ?? ""}
              placeholder="Alerte (optionnel, ex : service du salé jusqu'à 13h30)"
              onCommit={(v) =>
                patch((c) => {
                  if (v) c.alert = v;
                  else delete c.alert;
                })
              }
              className="inline-block font-fredoka font-extrabold text-lg md:text-xl tracking-wide"
              style={{ color: category.color }}
            />
          </div>
        ) : category.alert ? (
          <p
            className="mb-7 text-center font-fredoka font-extrabold text-lg md:text-xl tracking-wide"
            style={{ color: category.color }}
            role="note"
          >
            {category.alert}
          </p>
        ) : null}

        {/* Contenu */}
        {isInfos ? (
          editing ? (
            <EditableInfos category={category} patch={patch} />
          ) : (
            <InfosUtilesContent blocks={category.infos ?? []} color={category.color} />
          )
        ) : editing ? (
          <EditableSections category={category} patch={patch} />
        ) : hasSections ? (
          <Menu sections={category.sections!} color={category.color} />
        ) : (
          <div className="py-12 text-center font-nunito italic text-gray-400">Carte à venir 🍴</div>
        )}
      </div>

      {canEdit && <EditToolbar editing={editing} setEditing={setEditing} status={status} />}
    </>
  );
}

/* ─────────────── lista de secciones ─────────────── */
function EditableSections({ category, patch }: { category: Categorie; patch: Patch }) {
  const sections = category.sections ?? [];
  return (
    <div className="space-y-8">
      {sections.map((section, si) => (
        <SectionEditor key={si} section={section} si={si} total={sections.length} color={category.color} patch={patch} />
      ))}

      <div className="flex flex-wrap gap-2 pt-2">
        <AddBtn label="+ Liste de produits" onClick={() => patch((c) => void (c.sections ??= []).push({ kind: "items", items: [] }))} />
        <AddBtn label="+ Groupe" onClick={() => patch((c) => void (c.sections ??= []).push({ kind: "group", title: "Nouveau groupe", items: [] }))} />
        <AddBtn label="+ Formule" onClick={() => patch((c) => void (c.sections ??= []).push({ kind: "formule", name: "NOUVELLE FORMULE" }))} />
      </div>
    </div>
  );
}

/* ─────────────── una sección ─────────────── */
function SectionEditor({
  section,
  si,
  total,
  color,
  patch,
}: {
  section: Section;
  si: number;
  total: number;
  color: string;
  patch: Patch;
}) {
  const kindLabel = section.kind === "formule" ? "Formule" : section.kind === "group" ? "Groupe" : "Liste";
  return (
    <div className="rounded-clay border-2 border-dashed p-4 md:p-5" style={{ borderColor: color + "55" }}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-fredoka font-bold uppercase tracking-wide text-gray-400">{kindLabel}</span>
        <span className="ml-auto flex items-center gap-1">
          <MiniBtn disabled={si === 0} onClick={() => patch((c) => move(c.sections!, si, -1))}>
            ↑
          </MiniBtn>
          <MiniBtn disabled={si === total - 1} onClick={() => patch((c) => move(c.sections!, si, 1))}>
            ↓
          </MiniBtn>
          <button
            type="button"
            onClick={() => {
              if (window.confirm("Supprimer cette section ?")) patch((c) => void c.sections!.splice(si, 1));
            }}
            className="text-xs font-fredoka font-bold text-lk-red hover:text-red-700 px-2.5 py-1 rounded-full hover:bg-red-50"
          >
            Supprimer
          </button>
        </span>
      </div>

      {section.kind === "formule" ? (
        <FormuleEditor section={section} si={si} color={color} patch={patch} />
      ) : (
        <ItemsEditor section={section} si={si} color={color} patch={patch} />
      )}
    </div>
  );
}

/* ─────────────── items / group ─────────────── */
function ItemsEditor({ section, si, color, patch }: { section: ItemsSection; si: number; color: string; patch: Patch }) {
  const withItems = (fn: (arr: Item[]) => void) =>
    patch((c) => {
      const s = c.sections![si];
      if (s.kind === "items" || s.kind === "group") fn(s.items);
    });

  return (
    <div>
      {section.kind === "group" && (
        <EdText
          as="h3"
          editing
          value={section.title}
          placeholder="Titre du groupe"
          onCommit={(v) =>
            patch((c) => {
              const s = c.sections![si];
              if (s.kind === "group") s.title = v;
            })
          }
          className="font-fredoka text-xl md:text-2xl font-extrabold mb-2"
          style={{ color }}
        />
      )}

      <div>
        {section.items.map((item, ii) => (
          <ItemRow
            key={ii}
            item={item}
            ii={ii}
            total={section.items.length}
            update={(fn) => withItems((arr) => fn(arr[ii]))}
            onUp={() => withItems((arr) => move(arr, ii, -1))}
            onDown={() => withItems((arr) => move(arr, ii, 1))}
            onDelete={() => withItems((arr) => void arr.splice(ii, 1))}
          />
        ))}
      </div>

      <MiniAdd label="+ Ajouter un produit" className="mt-2 block" onClick={() => withItems((arr) => void arr.push({ name: "Nouveau produit" }))} />
    </div>
  );
}

/* ─────────────── una fila de producto (modelo rico) ─────────────── */
function ItemRow({
  item,
  ii,
  total,
  update,
  onUp,
  onDown,
  onDelete,
}: {
  item: Item;
  ii: number;
  total: number;
  update: (fn: (it: Item) => void) => void;
  onUp: () => void;
  onDown: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="py-3 border-b border-dashed border-gray-200 last:border-0">
      <div className="flex items-start justify-between gap-3">
        <p className="font-nunito text-gray-800 text-base flex-1 min-w-0">
          <EdText as="span" editing value={item.name} placeholder="Nom" onCommit={(v) => update((it) => void (it.name = v))} className="font-semibold" />
          <EdText
            as="span"
            editing
            value={item.note ?? ""}
            placeholder="note"
            onCommit={(v) =>
              update((it) => {
                if (v) it.note = v;
                else delete it.note;
              })
            }
            className="italic text-gray-500 ml-2"
          />
        </p>

        {!item.prices && (
          <EdText
            as="span"
            editing
            value={item.price ?? ""}
            placeholder="Prix"
            onCommit={(v) =>
              update((it) => {
                if (v) it.price = v;
                else delete it.price;
              })
            }
            className="font-fredoka font-bold text-gray-700 whitespace-nowrap"
          />
        )}

        <span className="flex items-center shrink-0">
          <MiniBtn disabled={ii === 0} onClick={onUp}>
            ↑
          </MiniBtn>
          <MiniBtn disabled={ii === total - 1} onClick={onDown}>
            ↓
          </MiniBtn>
          <MiniBtn danger onClick={onDelete}>
            ✕
          </MiniBtn>
        </span>
      </div>

      {item.prices && (
        <div className="mt-1.5 flex flex-col items-end gap-1">
          {item.prices.map((p, pi) => (
            <div key={pi} className="flex items-center gap-1.5">
              <EdText editing value={p.size} placeholder="Taille" onCommit={(v) => update((it) => void (it.prices![pi].size = v))} className="text-gray-500 text-sm" />
              <span className="text-gray-400">:</span>
              <EdText editing value={p.price} placeholder="Prix" onCommit={(v) => update((it) => void (it.prices![pi].price = v))} className="font-fredoka font-bold text-gray-700 text-sm" />
              <MiniBtn
                danger
                onClick={() =>
                  update((it) => {
                    it.prices!.splice(pi, 1);
                    if (it.prices!.length === 0) delete it.prices;
                  })
                }
              >
                ✕
              </MiniBtn>
            </div>
          ))}
          <MiniAdd label="+ taille" onClick={() => update((it) => void it.prices!.push({ size: "", price: "" }))} />
        </div>
      )}

      <LinesEditor
        label="sous-note"
        lines={toLines(item.subnote)}
        onChange={(next) =>
          update((it) => {
            const v = fromLines(next);
            if (v === undefined) delete it.subnote;
            else it.subnote = v;
          })
        }
      />

      {item.variants && (
        <div className="mt-2 pl-3 border-l-2 border-gray-100 space-y-1.5">
          {item.variants.map((v, vi) => (
            <div key={vi} className="flex items-center gap-2">
              <EdText editing value={v.name} placeholder="Nom variante" onCommit={(val) => update((it) => void (it.variants![vi].name = val))} className="font-semibold text-gray-700 text-sm" />
              <span className="text-gray-400">:</span>
              <EdText
                editing
                value={v.description ?? ""}
                placeholder="description"
                onCommit={(val) =>
                  update((it) => {
                    if (val) it.variants![vi].description = val;
                    else delete it.variants![vi].description;
                  })
                }
                className="italic text-gray-500 text-sm flex-1"
              />
              <MiniBtn
                danger
                onClick={() =>
                  update((it) => {
                    it.variants!.splice(vi, 1);
                    if (it.variants!.length === 0) delete it.variants;
                  })
                }
              >
                ✕
              </MiniBtn>
            </div>
          ))}
          <MiniAdd label="+ variante" onClick={() => update((it) => void it.variants!.push({ name: "" }))} />
        </div>
      )}

      {item.supplements && (
        <div className="mt-2 pl-3 border-l-2 border-gray-100 space-y-1.5">
          {item.supplements.map((s, sup) => (
            <div key={sup} className="flex items-center gap-2">
              <EdText editing value={s.name} placeholder="Supplément" onCommit={(val) => update((it) => void (it.supplements![sup].name = val))} className="italic text-gray-600 text-sm flex-1" />
              <EdText editing value={s.price} placeholder="Prix" onCommit={(val) => update((it) => void (it.supplements![sup].price = val))} className="font-fredoka font-semibold text-gray-600 text-sm" />
              <MiniBtn
                danger
                onClick={() =>
                  update((it) => {
                    it.supplements!.splice(sup, 1);
                    if (it.supplements!.length === 0) delete it.supplements;
                  })
                }
              >
                ✕
              </MiniBtn>
            </div>
          ))}
          <MiniAdd label="+ supplément" onClick={() => update((it) => void it.supplements!.push({ name: "", price: "" }))} />
        </div>
      )}

      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
        {!item.prices && (
          <MiniAdd
            label="+ tailles"
            onClick={() =>
              update((it) => {
                it.prices = [{ size: "", price: "" }];
                delete it.price;
              })
            }
          />
        )}
        {item.prices && (
          <MiniAdd
            label="→ prix simple"
            onClick={() =>
              update((it) => {
                delete it.prices;
                it.price = "";
              })
            }
          />
        )}
        {!item.variants && <MiniAdd label="+ variantes" onClick={() => update((it) => void (it.variants = [{ name: "" }]))} />}
        {!item.supplements && <MiniAdd label="+ suppléments" onClick={() => update((it) => void (it.supplements = [{ name: "", price: "" }]))} />}
      </div>
    </div>
  );
}

/* ─────────────── formule ─────────────── */
function FormuleEditor({ section, si, color, patch }: { section: FormuleSection; si: number; color: string; patch: Patch }) {
  const setF = (fn: (f: FormuleSection) => void) =>
    patch((c) => {
      const s = c.sections![si];
      if (s.kind === "formule") fn(s);
    });

  return (
    <div>
      <div className="flex justify-between items-baseline gap-4 mb-3">
        <EdText
          editing
          value={section.name}
          placeholder="NOM DE LA FORMULE"
          onCommit={(v) => setF((f) => void (f.name = v))}
          className="font-fredoka text-xl md:text-2xl font-extrabold uppercase tracking-wide"
          style={{ color }}
        />
        <EdText
          editing
          value={section.price ?? ""}
          placeholder="Prix"
          onCommit={(v) =>
            setF((f) => {
              if (v) f.price = v;
              else delete f.price;
            })
          }
          className="font-fredoka font-bold text-gray-700 whitespace-nowrap text-lg md:text-xl"
        />
      </div>
      <EdText
        as="p"
        editing
        value={section.formula ?? ""}
        placeholder="Formule (ex : Votre choix salé + 3,60 € = 1 frite + 1 boisson)"
        onCommit={(v) =>
          setF((f) => {
            if (v) f.formula = v;
            else delete f.formula;
          })
        }
        className="font-nunito text-gray-700 text-base md:text-lg"
      />
      <div className="mt-2">
        <LinesEditor
          label="ligne"
          lines={section.contents ?? []}
          onChange={(next) =>
            setF((f) => {
              if (next.length) f.contents = next;
              else delete f.contents;
            })
          }
        />
      </div>
    </div>
  );
}

/* ─────────────── botones / editor de líneas ─────────────── */
function MiniAdd({ label, onClick, className = "" }: { label: string; onClick: () => void; className?: string }) {
  return (
    <button type="button" onClick={onClick} className={`text-xs font-fredoka font-bold text-lk-green hover:underline ${className}`}>
      {label}
    </button>
  );
}

function LinesEditor({ label, lines, onChange }: { label: string; lines: string[]; onChange: (next: string[]) => void }) {
  if (lines.length === 0) {
    return <MiniAdd label={`+ ${label}`} className="mt-1 block" onClick={() => onChange([""])} />;
  }
  return (
    <div className="mt-1.5 pl-3 border-l-2 border-gray-100 space-y-1">
      {lines.map((ln, i) => (
        <div key={i} className="flex items-center gap-2">
          <EdText
            editing
            value={ln}
            placeholder={label}
            onCommit={(v) => {
              const next = [...lines];
              next[i] = v;
              onChange(next);
            }}
            className="italic text-gray-500 text-sm flex-1"
          />
          <MiniBtn danger onClick={() => onChange(lines.filter((_, x) => x !== i))}>
            ✕
          </MiniBtn>
        </div>
      ))}
      <MiniAdd label={`+ ${label}`} onClick={() => onChange([...lines, ""])} />
    </div>
  );
}

function AddBtn({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border-2 border-dashed border-gray-300 text-gray-500 font-fredoka font-bold text-sm px-4 py-2 hover:border-lk-green hover:text-lk-green transition-colors"
    >
      {label}
    </button>
  );
}

/* ─────────────── Infos Utiles (bloques libres) ─────────────── */
const BLOCK_LABEL: Record<InfoBlock["kind"], string> = {
  para: "Paragraphe",
  heading: "Titre",
  list: "Liste",
  banner: "Bannière",
};

function EditableInfos({ category, patch }: { category: Categorie; patch: Patch }) {
  const blocks = category.infos ?? [];
  const color = category.color;
  const withBlocks = (fn: (arr: InfoBlock[]) => void) =>
    patch((c) => {
      c.infos ??= [];
      fn(c.infos);
    });

  return (
    <div className="space-y-4">
      {blocks.map((block, bi) => (
        <div key={bi} className="rounded-clay border-2 border-dashed border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-fredoka font-bold uppercase tracking-wide text-gray-400">
              {BLOCK_LABEL[block.kind]}
            </span>
            <span className="ml-auto flex items-center gap-1">
              <MiniBtn disabled={bi === 0} onClick={() => withBlocks((a) => move(a, bi, -1))}>
                ↑
              </MiniBtn>
              <MiniBtn disabled={bi === blocks.length - 1} onClick={() => withBlocks((a) => move(a, bi, 1))}>
                ↓
              </MiniBtn>
              <button
                type="button"
                onClick={() => {
                  if (window.confirm("Supprimer ce bloc ?")) withBlocks((a) => void a.splice(bi, 1));
                }}
                className="text-xs font-fredoka font-bold text-lk-red hover:text-red-700 px-2.5 py-1 rounded-full hover:bg-red-50"
              >
                Supprimer
              </button>
            </span>
          </div>
          <BlockEditor block={block} color={color} update={(fn) => withBlocks((a) => fn(a[bi]))} />
        </div>
      ))}

      <div className="flex flex-wrap gap-2 pt-1">
        <AddBtn label="+ Paragraphe" onClick={() => withBlocks((a) => void a.push({ kind: "para", text: "" }))} />
        <AddBtn label="+ Titre" onClick={() => withBlocks((a) => void a.push({ kind: "heading", text: "Nouveau titre" }))} />
        <AddBtn label="+ Liste" onClick={() => withBlocks((a) => void a.push({ kind: "list", items: [""] }))} />
        <AddBtn label="+ Bannière" onClick={() => withBlocks((a) => void a.push({ kind: "banner", text: "Merci ! 💙" }))} />
      </div>
    </div>
  );
}

function BlockEditor({
  block,
  color,
  update,
}: {
  block: InfoBlock;
  color: string;
  update: (fn: (b: InfoBlock) => void) => void;
}) {
  if (block.kind === "para") {
    return (
      <p className="font-nunito text-gray-700 text-base md:text-lg leading-relaxed">
        <EdText
          as="span"
          editing
          value={block.lead ?? ""}
          placeholder="début en gras (optionnel)"
          onCommit={(v) =>
            update((b) => {
              if (b.kind !== "para") return;
              if (v) b.lead = v;
              else delete b.lead;
            })
          }
          className="font-semibold text-gray-900 mr-1"
        />
        <EdText
          as="span"
          editing
          value={block.text}
          placeholder="texte du paragraphe"
          onCommit={(v) => update((b) => void (b.kind === "para" && (b.text = v)))}
        />
      </p>
    );
  }

  if (block.kind === "heading") {
    return (
      <div>
        <EdText
          as="h3"
          editing
          value={block.text}
          placeholder="Titre"
          onCommit={(v) => update((b) => void (b.kind === "heading" && (b.text = v)))}
          className="font-fredoka text-2xl md:text-3xl font-extrabold"
          style={{ color }}
        />
        <EdText
          as="p"
          editing
          value={block.sub ?? ""}
          placeholder="sous-titre (optionnel)"
          onCommit={(v) =>
            update((b) => {
              if (b.kind !== "heading") return;
              if (v) b.sub = v;
              else delete b.sub;
            })
          }
          className="italic text-gray-500 text-base mt-1"
        />
      </div>
    );
  }

  if (block.kind === "list") {
    return (
      <ul className="list-disc pl-6 space-y-2">
        {block.items.map((it, i) => (
          <li key={i} className="font-nunito text-gray-700 text-base md:text-lg">
            <span className="flex items-center gap-2">
              <EdText
                as="span"
                editing
                value={it}
                placeholder="ligne"
                onCommit={(v) =>
                  update((b) => {
                    if (b.kind === "list") b.items[i] = v;
                  })
                }
                className="flex-1"
              />
              <MiniBtn
                danger
                onClick={() =>
                  update((b) => {
                    if (b.kind === "list") b.items.splice(i, 1);
                  })
                }
              >
                ✕
              </MiniBtn>
            </span>
          </li>
        ))}
        <li className="list-none pl-0">
          <MiniAdd
            label="+ ligne"
            onClick={() =>
              update((b) => {
                if (b.kind === "list") b.items.push("");
              })
            }
          />
        </li>
      </ul>
    );
  }

  // banner
  return (
    <EdText
      as="p"
      editing
      value={block.text}
      placeholder="Message"
      onCommit={(v) => update((b) => void (b.kind === "banner" && (b.text = v)))}
      className="font-fredoka text-2xl md:text-3xl font-extrabold text-center"
      style={{ color }}
    />
  );
}
