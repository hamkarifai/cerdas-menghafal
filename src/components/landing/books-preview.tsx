import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Book, GraduationCap, Scroll, Library, ArrowRight } from "lucide-react";

const books = [
  {
    icon: Book,
    title: "Al-Arabiyah Baina Yadaik",
    description: "Panduan lengkap belajar bahasa Arab komunikatif untuk pemula hingga mahir.",
  },
  {
    icon: GraduationCap,
    title: "Durusul Lughah",
    description: "Kurikulum standar Universitas Islam Madinah yang sistematis dan mendalam.",
  },
  {
    icon: Scroll,
    title: "Kitab Al-Ajurrumiyyah",
    description: "Fondasi utama ilmu Nahwu (tata bahasa) yang ringkas dan padat makna.",
  },
  {
    icon: Library,
    title: "Kamus Al-Munawwir",
    description: "Referensi kosakata terlengkap Arab-Indonesia untuk memperkaya hafalan.",
  }
];

export function BooksPreview() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
       {/* Decorative Background Pattern (Islamic Geometric Abstract) */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
       <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/4"></div>
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Kurikulum Terstandarisasi
          </h2>
          <p className="text-lg text-muted-foreground">
            Materi pembelajaran disusun berdasarkan kitab-kitab rujukan terbaik di dunia pendidikan bahasa Arab.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <Card key={index} className="group border-2 border-transparent hover:border-amber-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                  <book.icon className="w-7 h-7 text-amber-500" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground line-clamp-1 group-hover:text-amber-600 transition-colors">
                    {book.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-base leading-relaxed h-24">
                    {book.description}
                </CardDescription>
                
                <Button 
                    variant="outline" 
                    className="w-full justify-between text-amber-600 border-amber-200 hover:bg-amber-50 hover:text-amber-700 group-hover:border-amber-400"
                >
                    Pelajari
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
