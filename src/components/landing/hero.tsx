import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Sparkles, Brain, Rocket } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Hero() {
  const slides = [
    {
      badge: "✨ Metode Menghafal Tercepat",
      title: (
        <>
          Hafal Ribuan Kosakata <br />
          <span className="text-amber-300">Bahasa Arab</span> dengan Mudah
        </>
      ),
      description:
        "Gunakan kekuatan Spaced Repetition System (SRS) untuk memindahkan hafalan ke memori jangka panjang. Belajar cerdas, bukan keras.",
      icon: <BookOpen className="w-4 h-4 text-amber-400" />,
      image:
        "https://img.freepik.com/free-vector/hand-drawn-muslim-family-illustration_23-2149865573.jpg?t=st=1738723300~exp=1738726900~hmac=b9795c849c921f11078330789407524691105749248349858798398758394857",
    },
    {
      badge: "🚀 Teknologi Modern",
      title: (
        <>
          Belajar Interaktif dengan <br />
          <span className="text-amber-300">Visual 3D</span> & Audio
        </>
      ),
      description:
        "Nikmati pengalaman belajar yang imersif dengan visualisasi menarik dan audio native speaker yang jernih.",
      icon: <Sparkles className="w-4 h-4 text-amber-400" />,
      image:
        "https://img.freepik.com/free-vector/hand-drawn-muslim-family-illustration_23-2149865573.jpg?t=st=1738723300~exp=1738726900~hmac=b9795c849c921f11078330789407524691105749248349858798398758394857", // Placeholder
    },
    {
      badge: "🧠 Smart Learning",
      title: (
        <>
          Optimalkan Otak <br />
          <span className="text-amber-300">Kanan & Kiri</span>
        </>
      ),
      description:
        "Metode kami menyeimbangkan penggunaan otak kanan untuk imajinasi dan otak kiri untuk logika bahasa.",
      icon: <Brain className="w-4 h-4 text-amber-400" />,
      image:
        "https://img.freepik.com/free-vector/hand-drawn-muslim-family-illustration_23-2149865573.jpg?t=st=1738723300~exp=1738726900~hmac=b9795c849c921f11078330789407524691105749248349858798398758394857", // Placeholder
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-primary pt-4 pb-16 lg:pt-0 min-h-screen flex items-center">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large soft gradients */}
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl"></div>

        {/* Floating Shapes/Blobs (Abstract) */}
        <div className="absolute top-1/4 left-10 w-16 h-16 bg-amber-400/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-20 w-24 h-24 bg-purple-400/30 rounded-full blur-xl animate-bounce duration-1000"></div>

        {/* Grid Pattern Overlay */}
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full">
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="grid lg:grid-cols-2 gap-4 lg:gap-24 items-center min-h-[600px] lg:min-h-[800px]">
                  {/* Right Content (Card Mockup) - Order swapped for mobile */}
                  <div className="hidden md:flex order-1 lg:order-2 relative w-full h-[400px] lg:h-[600px] items-center justify-center">
                    {/* Background Glows */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-400/30 rounded-full blur-[100px] -z-10"></div>

                    {/* The Card */}
                    <div className="relative w-[320px] bg-white dark:bg-stone-900 border-4 border-white/20 rounded-4xl shadow-2xl p-6 transform rotate-6 hover:rotate-0 transition-all duration-500 ease-out group">
                      {/* Card Header (Status Bar lookalike) */}
                      <div className="flex justify-between items-center mb-6 opacity-50">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-stone-400"></div>
                          <div className="w-2 h-2 rounded-full bg-stone-400"></div>
                        </div>
                        <div className="text-xs font-medium text-stone-500">
                          Daily Vocab
                        </div>
                      </div>

                      {/* Main Image Container */}
                      <div className="relative aspect-4/3 bg-stone-100 dark:bg-stone-800 rounded-2xl mb-6 overflow-hidden border border-stone-100 dark:border-stone-800 shadow-inner">
                        <Image
                          src={slide.image}
                          alt="Flashcard Image"
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-700"
                        />
                        {/* Audio Icon Overlay */}
                        <div className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:bg-white">
                          <span className="text-amber-500">🔊</span>
                        </div>
                      </div>

                      {/* Word Content */}
                      <div className="text-center space-y-2 mb-4">
                        <h3 className="text-3xl font-bold text-stone-800 dark:text-white font-arabic">
                          أُسْرَةٌ
                        </h3>
                        <p className="text-stone-500 font-medium">
                          Usratun (Keluarga)
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-3 gap-3">
                        <Button
                          variant="outline"
                          className="border-green-200 text-green-500 hover:bg-green-50 hover:text-green-600 hover:border-green-300 h-12 rounded-xl"
                        >
                          Mudah
                        </Button>
                        <Button
                          variant="outline"
                          className="border-amber-200 text-amber-500 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300 h-12 rounded-xl"
                        >
                          Sedang
                        </Button>
                        <Button
                          variant="outline"
                          className="border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600 hover:border-red-300 h-12 rounded-xl"
                        >
                          Sulit
                        </Button>
                      </div>

                      {/* Decorative Floating Badge */}
                      <div className="absolute -top-4 -right-4 bg-white text-amber-500 shadow-lg px-4 py-2 rounded-full font-bold text-sm rotate-12 flex items-center gap-1 border border-amber-100">
                        <span>⭐</span> Baru
                      </div>
                    </div>
                  </div>

                  {/* Left Content (Text) */}
                  <div className="order-2 lg:order-1 flex flex-col text-center lg:text-left space-y-6 lg:space-y-8 p-1">
                    <div className="hidden lg:flex justify-center lg:justify-start">
                      <Badge
                        variant="outline"
                        className="border-amber-300/30 text-amber-300 bg-amber-400/10 px-4 py-1 rounded-full text-sm flex items-center gap-2 backdrop-blur-sm"
                      >
                        {slide.icon} {slide.badge}
                      </Badge>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg text-purple-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Button
                        size="lg"
                        className="gap-2 h-12 px-8 text-base bg-amber-400 hover:bg-amber-500 shadow-lg shadow-amber-400/20 font-bold animate-shine"
                      >
                        <Rocket className="h-5 w-5" /> Mulai Belajar Sekarang
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="gap-2 h-12 px-8 text-base border-amber-300/50 hover:border-white/50 text-amber-400 hover:bg-white/10 hover:text-white"
                      >
                        Pelajari Cara Kerja <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                    {/* <div className="pt-4 flex items-center justify-center lg:justify-start gap-8 text-sm text-purple-200">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-amber-300">10k+</span>{" "}
                        Pengguna
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-amber-300">4.9/5</span>{" "}
                        Rating
                      </div>
                    </div> */}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Navigation Controls */}
          <div className="hidden lg:block absolute -left-4 top-1/2 transform -translate-y-1/2 z-20">
            <CarouselPrevious className="bg-white/10 text-amber-300 border-amber-300/20 hover:bg-white/20" />
          </div>
          <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
            <CarouselNext className="bg-white/10 text-amber-300 border-amber-300/20 hover:bg-white/20" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
