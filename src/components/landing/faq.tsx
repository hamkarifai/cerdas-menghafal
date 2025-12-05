import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestion, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Apa itu metode SRS?",
    answer:
      "Spaced Repetition System (SRS) adalah metode belajar yang menjadwalkan ulang materi hafalan tepat sebelum Anda melupakannya. Ini terbukti secara ilmiah meningkatkan ingatan jangka panjang.",
  },
  {
    question: "Apakah aplikasi ini gratis?",
    answer:
      "Ya, fitur dasar aplikasi ini dapat digunakan secara gratis. Kami juga menawarkan paket Premium untuk fitur tambahan seperti statistik mendalam dan mode tanpa batas.",
  },
  {
    question: "Berapa banyak kosakata yang tersedia?",
    answer:
      "Saat ini kami memiliki lebih dari 5.000 kosakata bahasa Arab yang dikategorikan berdasarkan topik dan tingkat kesulitan (Mubtadi, Mutawasit, Mutaqaddim).",
  },
  {
    question: "Apakah bisa digunakan offline?",
    answer:
      "Tentu saja! Anda dapat mengunduh paket kosakata dan belajar di mana saja tanpa koneksi internet.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 bg-secondary/30 relative overflow-hidden"
    >
      {/* Tech/Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      {/* Decorative Blob */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -z-10"></div>

      {/* Floating Icons */}
      <HelpCircle className="absolute top-20 left-[10%] w-12 h-12 text-primary/10 animate-bounce duration-4000 hidden lg:block" />
      <MessageCircleQuestion className="absolute bottom-20 right-[10%] w-16 h-16 text-amber-500/10 animate-pulse duration-3000 hidden lg:block" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            Pertanyaan Umum
          </h2>
          <p className="text-muted-foreground">
            Jawaban untuk pertanyaan yang sering diajukan pengguna baru.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
