"use client";

import { useFormState, useFormStatus } from "react-dom";
import { login, type LoginState } from "../auth-actions";

const initial: LoginState = { error: null };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-1 rounded-full px-4 py-3 text-white font-fredoka font-extrabold text-base shadow-clay-sm transition-transform active:scale-[0.98] hover:-translate-y-0.5 disabled:opacity-60"
      style={{ backgroundColor: "#E8731A" }}
    >
      {pending ? "Connexion…" : "Se connecter"}
    </button>
  );
}

export default function AdminLoginPage() {
  const [state, action] = useFormState(login, initial);

  return (
    <main
      className="min-h-screen flex items-center justify-center px-5 font-nunito"
      style={{ backgroundColor: "#F4FBF4" }}
    >
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-5xl shadow-clay-inset bg-white">
            🍽️
          </div>
          <h1 className="font-fredoka text-3xl font-extrabold text-gray-800">Espace gérant</h1>
          <p className="text-sm text-gray-500 mt-1">Gérez la carte de Ludy&apos;cafet</p>
        </div>

        <form
          action={action}
          className="bg-white rounded-clay-lg shadow-clay p-7 flex flex-col gap-4"
        >
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-fredoka font-semibold text-gray-700">Mot de passe</span>
            <input
              type="password"
              name="password"
              autoFocus
              required
              className="rounded-clay border-2 border-gray-200 px-4 py-3 text-base outline-none focus:border-lk-green transition-colors"
              placeholder="••••••••"
            />
          </label>

          {state.error && (
            <p className="text-sm font-semibold text-lk-red" role="alert">
              {state.error}
            </p>
          )}

          <SubmitButton />
        </form>
      </div>
    </main>
  );
}
