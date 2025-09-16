export const metadata = {
  title: "Contact — Olga Vasilevsky",
  description: "Get in touch with Olga Vasilevsky.",
};

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 pb-24 pt-10 md:pt-16 max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-light tracking-tight">Contact</h1>
      <p className="mt-3 text-neutral-600">
        For commissions, launches, or retainers, email <a className="underline" href="mailto:olga@aifashionartists.com">olga@aifashionartists.com</a>
        , or send details below.
      </p>
      <ContactForm />
    </main>
  );
}


