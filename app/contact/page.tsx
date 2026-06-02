import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact – Ludykid Le Mans",
  description: "Contactez l'équipe Ludykid pour toute question sur le parc, les anniversaires ou les réservations.",
  openGraph: {
    title: "Contact – Ludykid Le Mans",
    description: "Contactez l'équipe Ludykid pour toute question sur le parc, les anniversaires ou les réservations.",
    url: "https://www.ludykid.com/contact",
    images: [{ url: "/images/home/tobogan-azul.jpg", alt: "Contact Ludykid Le Mans" }],
  },
  alternates: { canonical: "https://www.ludykid.com/contact" },
};

export default function ContactPage() {
  return (
    <main className="bg-[#F5EEFF] min-h-screen">
      <Navbar />
      <div className="pt-28 pb-20">
        <ContactForm />
      </div>
      <Footer waveBg="#F5EEFF" />
    </main>
  );
}
