import { redirect } from "next/navigation";

// La edición ocurre in-place sobre la carte. Llegar a /admin (tras pasar el gate
// de login en proxy.ts) simplemente lleva al gérant a la carte editable.
export default function AdminEntry() {
  redirect("/restauration");
}
