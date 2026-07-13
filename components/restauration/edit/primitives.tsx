"use client";

import { useEffect, useRef, useState } from "react";
import { logout } from "@/app/admin/auth-actions";

/* ─────────────── helpers compartidos ─────────────── */
export const uid = () =>
  crypto.randomUUID ? crypto.randomUUID().slice(0, 8) : String(Math.random()).slice(2, 10);

export function move<T>(arr: T[], i: number, dir: -1 | 1) {
  const j = i + dir;
  if (i < 0 || j < 0 || j >= arr.length) return;
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Paleta claymorphism: cada tema fija color + fondo suave + sombra coherentes,
// tomados de tailwind.config (shadow-clay-*). Editar el color = elegir un tema.
export type Theme = { name: string; color: string; softBg: string; shadow: string };
export const THEMES: Theme[] = [
  { name: "Orange", color: "#E8731A", softBg: "#FFEFE2", shadow: "shadow-clay-orange" },
  { name: "Jaune", color: "#FFD600", softBg: "#FFF8CC", shadow: "shadow-clay-yellow" },
  { name: "Vert", color: "#2E9E2E", softBg: "#E8F7E8", shadow: "shadow-clay-green" },
  { name: "Violet", color: "#7B35A0", softBg: "#F5EEFF", shadow: "shadow-clay-purple" },
  { name: "Bleu", color: "#0EA5E9", softBg: "#E0F2FE", shadow: "shadow-clay-blue" },
];

/* ─────────────── autosave (debounce, sin retrigger por identidad de save) ─────────────── */
export type SaveStatus = "idle" | "pending" | "saving" | "saved" | "error";

export function useAutosave<T>(value: T, save: (v: T) => Promise<void>): SaveStatus {
  const [status, setStatus] = useState<SaveStatus>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const first = useRef(true);
  const saveRef = useRef(save);
  saveRef.current = save;

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setStatus("pending");
    if (timer.current) clearTimeout(timer.current);
    const snapshot = value;
    timer.current = setTimeout(async () => {
      setStatus("saving");
      try {
        await saveRef.current(snapshot);
        setStatus("saved");
      } catch {
        setStatus("error");
      }
    }, 700);
    // Sólo dependemos de `value`: `save` va por ref para no reprogramar en cada render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return status;
}

/* ─────────────── campo editable in-place (contentEditable) ─────────────── */
export function EdText({
  as: Tag = "span",
  editing,
  value,
  onCommit,
  className,
  style,
  placeholder,
  multiline,
}: {
  as?: React.ElementType;
  editing: boolean;
  value: string;
  onCommit: (v: string) => void;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  multiline?: boolean;
}) {
  if (!editing) {
    if (!value) return null;
    return (
      <Tag className={className} style={style}>
        {value}
      </Tag>
    );
  }
  return (
    <Tag
      contentEditable
      suppressContentEditableWarning
      data-placeholder={placeholder}
      onBlur={(e: React.FocusEvent<HTMLElement>) => onCommit((e.currentTarget.textContent ?? "").trim())}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (!multiline && e.key === "Enter") {
          e.preventDefault();
          (e.currentTarget as HTMLElement).blur();
        }
      }}
      className={`${className ?? ""} ed-field`}
      style={style}
    >
      {value}
    </Tag>
  );
}

/* ─────────────── controles pequeños ─────────────── */
export function MiniBtn({
  children,
  onClick,
  disabled,
  danger,
  title,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  danger?: boolean;
  title?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`w-7 h-7 rounded-full text-sm leading-none font-bold transition-colors ${
        danger ? "text-lk-red hover:bg-red-50" : "text-gray-500 hover:bg-gray-100"
      } disabled:opacity-25`}
    >
      {children}
    </button>
  );
}

export function RowControls({
  index,
  total,
  onUp,
  onDown,
  onDelete,
  label,
  className = "",
}: {
  index: number;
  total: number;
  onUp: () => void;
  onDown: () => void;
  onDelete: () => void;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <MiniBtn disabled={index === 0} onClick={onUp} title="Monter">
        ↑
      </MiniBtn>
      <MiniBtn disabled={index === total - 1} onClick={onDown} title="Descendre">
        ↓
      </MiniBtn>
      <button
        type="button"
        onClick={() => {
          if (window.confirm(`Supprimer « ${label} » ?`)) onDelete();
        }}
        className="ml-auto text-xs font-fredoka font-bold text-lk-red hover:text-red-700 px-2.5 py-1 rounded-full hover:bg-red-50"
      >
        Supprimer
      </button>
    </div>
  );
}

/* ─────────────── swatches de tema (color+fondo+sombra) ─────────────── */
export function ThemePicker({ value, onPick }: { value: string; onPick: (t: Theme) => void }) {
  return (
    <div className="flex items-center gap-1.5">
      {THEMES.map((t) => {
        const active = t.color.toLowerCase() === value.toLowerCase();
        return (
          <button
            key={t.name}
            type="button"
            title={t.name}
            onClick={() => onPick(t)}
            className={`w-6 h-6 rounded-full transition-transform hover:scale-110 ${
              active ? "ring-2 ring-offset-2 ring-gray-400" : ""
            }`}
            style={{ backgroundColor: t.color }}
          />
        );
      })}
    </div>
  );
}

/* ─────────────── toolbar flotante ─────────────── */
const STATUS_TEXT: Record<SaveStatus, string> = {
  idle: "",
  pending: "Modifications…",
  saving: "Enregistrement…",
  saved: "Enregistré ✓",
  error: "Erreur d'enregistrement",
};

export function EditToolbar({
  editing,
  setEditing,
  status,
}: {
  editing: boolean;
  setEditing: (v: boolean) => void;
  status: SaveStatus;
}) {
  return (
    <>
      <EditStyles />
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 font-nunito">
        {editing && (
          <>
            <span
              className={`text-sm font-semibold px-3 py-1.5 rounded-full bg-white shadow-clay-sm ${
                status === "error" ? "text-lk-red" : "text-gray-600"
              }`}
            >
              {STATUS_TEXT[status]}
            </span>
            <form action={logout}>
              <button
                type="submit"
                className="text-sm font-fredoka font-bold text-gray-500 hover:text-lk-red px-3 py-2 rounded-full bg-white shadow-clay-sm"
              >
                Quitter
              </button>
            </form>
          </>
        )}
        <button
          type="button"
          onClick={() => setEditing(!editing)}
          className="px-5 py-3 rounded-full text-white font-fredoka font-extrabold shadow-clay transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: editing ? "#2E9E2E" : "#E8731A" }}
        >
          {editing ? "✓ Terminer" : "✏️ Modifier la carte"}
        </button>
      </div>
    </>
  );
}

/* CSS de los campos contentEditable (contorno punteado + placeholder). */
export function EditStyles() {
  return (
    <style>{`
      .ed-field { outline: 1.5px dashed rgba(46,158,46,.5); outline-offset: 3px; border-radius: 8px; cursor: text; min-width: 2ch; transition: background .15s; }
      .ed-field:focus { outline-style: solid; outline-color: #2E9E2E; background: rgba(232,247,232,.6); }
      .ed-field:empty:before { content: attr(data-placeholder); color: #b8b8b8; font-weight: 400; }
    `}</style>
  );
}
