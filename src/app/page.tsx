import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { BooksPreview } from "@/components/landing/books-preview";
import { Features } from "@/components/landing/features";
import { Testimonials } from "@/components/landing/testimonials";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <BooksPreview />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
