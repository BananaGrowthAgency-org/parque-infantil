import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mentions légales – Ludykid Le Mans",
  description: "Mentions légales, politique de confidentialité et gestion des cookies du site Ludykid.",
  alternates: { canonical: "https://www.ludykid.com/mentions-legales" },
};

const SECTIONS = [
  {
    title: "Informations légales",
    content: (
      <>
        <p>
          (Loi n° 2004-575 du 21/06/2004, dite « Pour la confiance dans l&apos;économie numérique »)
        </p>
        <p className="mt-2">
          Le site <a href="https://www.ludykid.com" className="text-lk-green underline hover:opacity-80 transition-opacity">https://www.ludykid.com</a> est le site officiel du parc indoor Ludykid.
        </p>
      </>
    ),
  },
  {
    title: "Propriétaire du site",
    content: (
      <address className="not-italic">
        Ludykid<br />
        Le Camp<br />
        284 Rte du Petit Bel Oeuvre<br />
        72230 RUAUDIN
        <p className="mt-3">
          Tout le contenu de ce site (éléments textuels, visuels, photographiques, iconographiques, etc.) est la propriété exclusive de Ludykid ou de tiers ayant autorisé Ludykid à les utiliser. Ludykid se réserve le droit de modifier à tout moment ce contenu et/ou les mentions légales de son site, si nécessaire.
        </p>
      </address>
    ),
  },
  {
    title: "Directeur de la publication",
    content: <p>Madame Karine BOUVET en sa qualité de gérante de la structure.</p>,
  },
  {
    title: "Responsabilité",
    content: (
      <p>
        Ludykid met en œuvre tous les moyens dont il dispose pour assurer une information fiable, aussi précise que possible, et une mise à jour régulière de son site internet. Les informations contenues sur le site ne sont toutefois pas exhaustives, sont données à titre indicatif et sont donc susceptibles d&apos;évoluer à tout moment. En cas de constat d&apos;une inexactitude ou d&apos;une omission par l&apos;utilisateur du site, ce dernier peut le signaler par mail à Ludykid via le formulaire de contact. Ludykid ne saurait, par contre, en aucun cas être tenue pour responsable de l&apos;utilisation ou de l&apos;interprétation qui pourrait être faite de ces informations et de tout préjudice, direct ou indirect, pouvant en résulter.
      </p>
    ),
  },
  {
    title: "Éditeur du site",
    content: (
      <address className="not-italic">
        Ludykid<br />
        Le Camp<br />
        284 Rte du Petit Bel Oeuvre<br />
        72230 RUAUDIN
      </address>
    ),
  },
  {
    title: "Hébergeur du site",
    content: <p>OVH · 2 rue Kellermann · 59100 Roubaix</p>,
  },
  {
    title: "Droit d'auteur et Propriété intellectuelle",
    content: (
      <>
        <p>
          Le site de Ludykid relève de la législation sur le droit d&apos;auteur et la propriété intellectuelle. Les droites de diffusion et de reproduction du contenu de ce site (éléments textuels, visuels, photographiques, iconographiques, etc.) sont réservées à Ludykid. Toute reproduction, publication, modification ou adaptation, de tout ou partie des éléments de ce site est donc interdite sauf autorisation expresse de Ludykid.
        </p>
        <p className="mt-3">
          Pour toute demande relative à une éventuelle utilisation de certains éléments de ce site, merci de contacter : Madame Karine Bouvet, Le Camp 284 Rte du Petit Bel Oeuvre 72230 RUAUDIN.
        </p>
        <p className="mt-3">
          Passer outre serait constitutif d&apos;une contrefaçon pouvant engager la responsabilité de son auteur.
        </p>
      </>
    ),
  },
  {
    title: "Droit à l'image",
    content: (
      <p>
        Conformément aux dispositions relevant du droit à l&apos;image, toute personne (non publique) apparaissant sur une photographie et n&apos;ayant pas autorisé sa diffusion sur le site de Ludykid peut solliciter son retrait sur simple demande à Madame Karine Bouvet, Le Camp 284 Rte du Petit Bel Oeuvre 72230 RUAUDIN.
      </p>
    ),
  },
  {
    title: "Médiation",
    content: (
      <p>
        Après avoir saisi le service consommation et à défaut de réponse satisfaisante dans un délai de 60 jours, le client peut saisir le médiateur du Tourisme et du Voyage, dont les coordonnées et modalités de saisine sont disponibles sur son site :{" "}
        <a href="https://www.mtv.travel" target="_blank" rel="noopener noreferrer" className="text-lk-green underline hover:opacity-80 transition-opacity">
          www.mtv.travel
        </a>
      </p>
    ),
  },
  {
    title: "Liens hypertexte d'accès à un site tiers",
    content: (
      <p>
        Des liens « sortant » figurant sur le site de Ludykid peuvent permettre à ses utilisateurs d&apos;accéder à d&apos;autres sites internet externes sur lesquels Ludykid ne dispose toutefois d&apos;aucun contrôle. Il ne saurait donc être tenue pour responsable de quelque dommage que ce soit résultant du contenu de ces sites ou sources externes.
      </p>
    ),
  },
  {
    title: "Cookies",
    content: (
      <>
        <p>
          Les utilisateurs sont informés que lors de leurs visites sur ce site, des cookies (éléments ne permettant pas de les identifier mais servant à enregistrer des informations sur leur navigation) peuvent s&apos;installer automatiquement sur leur logiciel de navigation. Sont alors recueillies de manière automatique des données non nominatives, le plus souvent à usage statistique, concernant la navigation sur le site de Ludykid par son utilisateur.
        </p>
        <p className="mt-3">
          Les utilisateurs sont informés de la présence de ces cookies, de la possibilité qui leur est offerte de les refuser et du fait que la désactivation des cookies peut techniquement limiter leur accès à tout ou partie du site. Il est par ailleurs possible de désactiver les cookies en paramétrant son navigateur.
        </p>
        <p className="mt-3">
          Tout utilisateur du site <a href="https://www.ludykid.com" className="text-lk-green underline hover:opacity-80 transition-opacity">https://www.ludykid.com</a>{" "}reconnaît avoir pris connaissance des mentions légales d&apos;information ci-dessus exposées et les avoir acceptées.
        </p>
      </>
    ),
  },
];

export default function MentionsLegalesPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-fredoka text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Mentions légales
          </h1>
          <p className="font-nunito text-sm text-gray-400 mb-10">
            Dernière mise à jour : juin 2024
          </p>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-100">
            {SECTIONS.map((s) => (
              <div key={s.title} className="px-6 py-6 sm:px-8 sm:py-7">
                <h2 className="font-fredoka text-lg font-semibold text-gray-700 mb-3">
                  {s.title}
                </h2>
                <div className="font-nunito text-sm text-gray-600 leading-relaxed">
                  {s.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer waveBg="#F9FAFB" />
    </main>
  );
}
