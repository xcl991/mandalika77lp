'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Gift, 
  Trophy,
  Play,
  ChevronRight,
  Flame,
  Target,
  Crown,
  TrendingUp
} from 'lucide-react';

export default function RacingLandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWithdrawIndex, setCurrentWithdrawIndex] = useState(0);

  // Withdraw data yang akan berganti setiap detik
  const withdrawData = [
    { id: "kiyowo991", amount: "2.900.000" },
    { id: "slotmania88", amount: "5.500.000" },
    { id: "jackpot777", amount: "8.200.000" },
    { id: "hoki234", amount: "3.750.000" },
    { id: "sultan99", amount: "12.000.000" },
    { id: "rajaslot", amount: "4.300.000" },
    { id: "maxwin888", amount: "7.800.000" },
    { id: "gacor777", amount: "9.500.000" },
    { id: "jpturbo", amount: "6.200.000" },
    { id: "scatter99", amount: "11.000.000" },
    { id: "bonus777", amount: "1.500.000" },
    { id: "wdhoki", amount: "15.500.000" }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Effect untuk mengganti withdraw setiap detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWithdrawIndex((prevIndex) => (prevIndex + 1) % withdrawData.length);
    }, 1000); // Ganti setiap 1 detik

    return () => clearInterval(interval);
  }, [withdrawData.length]);

  const handleCTAClick = (url: string) => {
    window.open(url, '_blank');
  };

  const currentWithdraw = withdrawData[currentWithdrawIndex];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(139, 0, 0, 0.8) 0%, 
              rgba(128, 0, 0, 0.9) 25%, 
              rgba(75, 0, 0, 1) 50%, 
              rgba(50, 0, 0, 1) 75%, 
              rgba(25, 0, 0, 1) 100%)`,
            transition: 'background 0.3s ease'
          }}
        />
        
        {/* Hexagonal Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(30deg, rgba(255, 0, 0, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(255, 0, 0, 0.1) 87.5%, rgba(255, 0, 0, 0.1)),
              linear-gradient(150deg, rgba(255, 0, 0, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(255, 0, 0, 0.1) 87.5%, rgba(255, 0, 0, 0.1)),
              linear-gradient(30deg, rgba(255, 0, 0, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(255, 0, 0, 0.1) 87.5%, rgba(255, 0, 0, 0.1)),
              linear-gradient(150deg, rgba(255, 0, 0, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(255, 0, 0, 0.1) 87.5%, rgba(255, 0, 0, 0.1)),
              linear-gradient(60deg, rgba(255, 69, 0, 0.1) 25%, transparent 25.5%, transparent 75%, rgba(255, 69, 0, 0.1) 75%, rgba(255, 69, 0, 0.1)),
              linear-gradient(60deg, rgba(255, 69, 0, 0.1) 25%, transparent 25.5%, transparent 75%, rgba(255, 69, 0, 0.1) 75%, rgba(255, 69, 0, 0.1))
            `,
            backgroundSize: '80px 140px',
            animation: 'hexPattern 20s linear infinite'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-6 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 max-w-4xl mx-auto">
          <div className="mb-4 sm:mb-6">
            <Badge className="bg-red-600 text-white px-4 sm:px-6 py-2 text-sm sm:text-lg font-bold mb-4 animate-pulse">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              MANDALIKA77 EXCLUSIVE
            </Badge>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-orange-600 mb-4 sm:mb-6 animate-pulse">
            MANDALIKA77
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-red-200 mb-6 sm:mb-8 font-semibold">
            🎰 RTP GACOR | SCATTER GACOR | BONUS GACOR 🎰
          </p>
          
          {/* Withdraw List yang Berganti */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 text-green-400 bg-black/50 px-3 py-2 rounded-lg border border-green-600">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-bold text-sm sm:text-base">
                ID - {currentWithdraw.id}
              </span>
              <span className="text-yellow-400 font-bold text-sm sm:text-base">
                WD Rp{currentWithdraw.amount}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-green-400 bg-black/50 px-3 py-2 rounded-lg border border-green-600">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-bold text-sm sm:text-base">
                ID - {withdrawData[(currentWithdrawIndex + 1) % withdrawData.length].id}
              </span>
              <span className="text-yellow-400 font-bold text-sm sm:text-base">
                WD Rp{withdrawData[(currentWithdrawIndex + 1) % withdrawData.length].amount}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Image */}
        <div className="mb-6 sm:mb-8 w-full max-w-2xl">
          <Card className="border-2 sm:border-4 border-red-600 shadow-2xl shadow-red-600/50">
            <CardContent className="p-2 sm:p-0">
              <img 
                src="/modal-image.png" 
                alt="Mandalika77"
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>
        </div>

        {/* CTA Buttons - Mobile Friendly dengan Text Adaptif */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 w-full max-w-4xl">
          {/* CTA 1 - Daftar */}
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 sm:py-6 px-6 sm:px-8 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-red-600/50 transform hover:scale-105 transition-all duration-300 border-2 border-red-500 w-full min-h-[60px] sm:min-h-[72px]"
                onClick={() => handleCTAClick('https://mandalika77jen.com/auth/register?ref=b7xq4vd')}
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0" />
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-center">DAFTAR</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gradient-to-br from-red-900 to-red-950 border-red-600 text-white mx-4 max-w-md">
              <div className="text-center">
                <Zap className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">DAFTAR SEKARANG!</h3>
                <p className="mb-6 text-sm sm:text-base">Bergabung dengan ribuan pemenang hari ini!</p>
                <Button 
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold w-full sm:w-auto"
                  onClick={() => handleCTAClick('https://mandalika77jen.com/auth/register?ref=b7xq4vd')}
                >
                  LANJUT KE PENDAFTARAN
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* CTA 2 - Ambil Bonus 200k Gratis */}
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-bold py-4 sm:py-6 px-6 sm:px-8 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300 border-2 border-yellow-400 w-full min-h-[60px] sm:min-h-[72px]"
                onClick={() => handleCTAClick('https://mandalika77jen.com/auth/register?ref=b7xq4vd')}
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
                  <Gift className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0" />
                  <div className="text-center flex-1">
                    <span className="text-sm sm:text-base lg:text-lg font-bold block">AMBIL BONUS</span>
                    <span className="text-xs sm:text-sm lg:text-base font-black">200K GRATIS</span>
                  </div>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gradient-to-br from-yellow-900 to-orange-950 border-yellow-600 text-white mx-4 max-w-md">
              <div className="text-center">
                <Gift className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">BONUS 200K GRATIS!</h3>
                <p className="mb-2 text-yellow-300 font-bold text-lg sm:text-xl">🎁 LIMITED TIME OFFER 🎁</p>
                <p className="mb-6 text-sm sm:text-base">Daftar sekarang dan dapatkan bonus 200K langsung!</p>
                <Button 
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold w-full sm:w-auto"
                  onClick={() => handleCTAClick('https://mandalika77jen.com/auth/register?ref=b7xq4vd')}
                >
                  KLAIM BONUS 200K
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* CTA 3 - Ambil Bonus Lucky Draw */}
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 sm:py-6 px-6 sm:px-8 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-purple-600/50 transform hover:scale-105 transition-all duration-300 border-2 border-purple-500 w-full min-h-[60px] sm:min-h-[72px]"
                onClick={() => handleCTAClick('https://mandalika77jen.com/auth/register?ref=b7xq4vd')}
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0" />
                  <div className="text-center flex-1">
                    <span className="text-sm sm:text-base lg:text-lg font-bold block">LUCKY DRAW</span>
                    <span className="text-xs sm:text-sm lg:text-base font-normal">Bonus Special</span>
                  </div>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gradient-to-br from-purple-900 to-pink-950 border-purple-600 text-white mx-4 max-w-md">
              <div className="text-center">
                <Trophy className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">LUCKY DRAW BONUS!</h3>
                <p className="mb-2 text-purple-300 font-bold text-lg sm:text-xl">🎰 WIN UP TO 10JUTA 🎰</p>
                <p className="mb-6 text-sm sm:text-base">Kesempatan terbatas! Daftar dan ikuti lucky draw!</p>
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold w-full sm:w-auto"
                  onClick={() => handleCTAClick('https://mandalika77jen.com/auth/register?ref=b7xq4vd')}
                >
                  IKUTI LUCKY DRAW
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Additional Info */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <Badge className="bg-red-800 text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              FAST REGISTRATION
            </Badge>
            <Badge className="bg-red-800 text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              INSTANT WITHDRAW
            </Badge>
            <Badge className="bg-red-800 text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              24/7 SUPPORT
            </Badge>
          </div>
          
          <p className="text-red-300 text-xs sm:text-sm">
            © 2024 Mandalika77 - All Rights Reserved
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes hexPattern {
          0% { background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 0 0; }
          100% { background-position: 80px 140px, 80px 140px, 120px 210px, 120px 210px, 80px 140px, 80px 140px; }
        }
      `}</style>
    </div>
  );
}