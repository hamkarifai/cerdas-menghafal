import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Volume2, Trophy, Smartphone, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Sistem SRS Cerdas",
    description: "Algoritma yang mengatur waktu review tepat saat Anda hampir lupa."
  },
  {
    icon: Volume2,
    title: "Audio Native Speaker",
    description: "Dengarkan pelafalan yang benar langsung dari penutur asli Arab."
  },
  {
    icon: Trophy,
    title: "Gamifikasi Seru",
    description: "Dapatkan poin dan lencana untuk setiap pencapaian hafalan Anda."
  },
  {
    icon: Zap,
    title: "Mode Offline",
    description: "Belajar di mana saja tanpa tergantung koneksi internet."
  },
  {
    icon: Globe,
    title: "Ribuan Kosakata",
    description: "Database lengkap dari tingkat pemula hingga mahir."
  },
  {
    icon: Smartphone,
    title: "Tampilan Modern",
    description: "Antarmuka yang bersih, responsif, dan nyaman di mata."
  }
];

export function Features() {
  return (
    <section id="fitur" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Abstract Floating Icons/Elements */}
      <div className="absolute top-10 left-10 text-amber-500/10 text-9xl font-arabic pointer-events-none select-none -rotate-12">ا</div>
      <div className="absolute bottom-20 right-10 text-primary/10 text-9xl font-arabic pointer-events-none select-none rotate-12">ب</div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight text-foreground">Fitur Unggulan</h2>
          <p className="text-lg text-muted-foreground">Kami merancang setiap fitur untuk memaksimalkan efektivitas hafalan Anda.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-background">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center mb-4 text-amber-500">
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
