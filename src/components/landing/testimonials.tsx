import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Ahmad F.",
    role: "Pelajar",
    content:
      "Aplikasi ini sangat membantu saya menghafal kosakata bahasa Arab dengan cepat. Metodenya efektif!",
    rating: 5,
    initial: "AF",
  },
  {
    name: "Siti N.",
    role: "Guru Bahasa Arab",
    content:
      "Saya merekomendasikan aplikasi ini kepada murid-murid saya. Sangat interaktif dan menyenangkan.",
    rating: 5,
    initial: "SN",
  },
  {
    name: "Budi Santoso",
    role: "Mahasiswa",
    content:
      "Desainnya bagus dan mudah digunakan. Fitur SRS-nya benar-benar bekerja untuk jangka panjang.",
    rating: 4,
    initial: "BS",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#a855f7_1px,transparent_1px)] bg-size:[16px_16px] pointer-events-none"></div>
      
      {/* Large Decorative Quotes */}
      <Quote className="absolute top-10 left-4 w-32 h-32 text-primary/5 -rotate-12 hidden lg:block" />
      <Quote className="absolute bottom-10 right-4 w-40 h-40 text-amber-500/5 rotate-12 hidden lg:block" />
      
      {/* Floating Hearts */}
      <Heart className="absolute top-20 right-[20%] w-12 h-12 text-red-400/20 animate-bounce duration-3000 hidden lg:block fill-red-400/20" />
      <Star className="absolute bottom-32 left-[15%] w-16 h-16 text-amber-400/20 animate-pulse duration-4000 hidden lg:block fill-amber-400/20 rotate-12" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Apa Kata Mereka?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ribuan pengguna telah merasakan manfaat belajar bahasa Arab dengan
            metode kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="h-12 w-12 border-2 border-primary/20">
                  <AvatarImage
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`}
                  />
                  <AvatarFallback>{testimonial.initial}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
