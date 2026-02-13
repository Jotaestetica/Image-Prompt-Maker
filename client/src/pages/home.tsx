import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  ShieldCheck, 
  Truck, 
  Star, 
  Clock, 
  BatteryCharging, 
  Droplets, 
  Settings, 
  ChevronDown,
  Menu,
  X
} from "lucide-react";

import { Section } from "@/components/ui/section";
import { CTAButton } from "@/components/ui/cta-button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Assets import
import heroImg from "@assets/IMG_0420_1771024207836.WEBP";
import beforeAfter1 from "@assets/IMG_0426_1771024159041.WEBP";
import beforeAfter2 from "@assets/IMG_0427_1771024146753.WEBP";
import macroShot from "@assets/IMG_0425_1771024171716.WEBP";
import waterproofImg from "@assets/IMG_E0423_1771024120243.JPG";
import usbImg from "@assets/IMG_E0422_1771024134052.JPG";
import kitImg from "@assets/IMG_0421_1771024198617.WEBP";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) return prev;
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* 1. Announcement Bar */}
      <div className="bg-[#FF0000] text-white py-3 px-4 text-center text-sm md:text-base font-black tracking-widest uppercase sticky top-0 z-50 shadow-[0_4px_20px_rgba(255,0,0,0.5)]">
        <span className="inline-block animate-bounce mr-2">⚠️</span>
        ATENÇÃO: ÚLTIMAS 07 UNIDADES COM FRETE GRÁTIS - PAGUE SÓ NA ENTREGA!
        <span className="inline-block animate-bounce ml-2">⚠️</span>
      </div>

      {/* 2. Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Copy */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                <ShieldCheck className="w-4 h-4" />
                Compra 100% Segura
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.0] text-slate-900 mb-6 uppercase">
                PARE DE <span className="text-white bg-red-600 px-3 py-1 rotate-[-2deg] inline-block shadow-lg">ESCONDER</span> SEUS PÉS HOJE!
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Recupere a maciez e a saúde dos seus pés sem dor, sem esforço e no conforto da sua casa.
                <br/>
                <strong className="text-primary block mt-2">Pague apenas quando receber o produto em casa!</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <CTAButton className="animate-pulse-glow" />
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary" />
                  <span>Entrega Rápida</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span>Garantia de 30 dias</span>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full max-w-[500px]"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={heroImg} 
                  alt="Lixador de pés elétrico" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100">
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Desconto</span>
                    <span className="text-2xl font-black text-red-500">-40%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Problem Agitation */}
      <Section variant="muted" className="border-t border-slate-200">
        <div className="container-custom text-center">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl mb-6">
              Você sente <span className="text-red-500">vergonha</span> de mostrar seus pés?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Rachaduras, pele grossa e calos não são apenas esteticamente desagradáveis, eles causam dor, desconforto e podem levar a infecções graves. Lixas manuais machucam e pedras pomes acumulam bactérias.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Dor ao Caminhar", desc: "Rachaduras profundas que sangram e incomodam o dia todo." },
              { title: "Vergonha", desc: "Evitar sandálias e chinelos por constrangimento da aparência." },
              { title: "Falta de Tempo", desc: "Salões são caros e exigem horas do seu dia que você não tem." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500 font-bold text-xl">
                  !
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Solution & Features */}
      <Section>
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">A Solução Definitiva</span>
            <h2 className="text-3xl md:text-4xl mt-2 max-w-2xl mx-auto">
              Tecnologia Profissional na Palma da Sua Mão
            </h2>
          </div>

          <div className="grid gap-20">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-10"
            >
              <div className="flex-1 order-2 md:order-1">
                <img 
                  src={waterproofImg} 
                  alt="À prova d'água" 
                  className="rounded-3xl shadow-xl w-full max-w-lg mx-auto"
                />
              </div>
              <div className="flex-1 order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-4">
                  <Droplets className="w-4 h-4" />
                  À Prova D'água
                </div>
                <h3 className="text-2xl md:text-3xl mb-4">Use no banho sem preocupações</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Totalmente resistente à água, permitindo que você cuide dos seus pés durante o banho para maior praticidade e higiene. O design ergonômico garante firmeza mesmo com as mãos molhadas.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-10"
            >
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-4">
                  <BatteryCharging className="w-4 h-4" />
                  Bateria de Longa Duração
                </div>
                <h3 className="text-2xl md:text-3xl mb-4">Carregamento USB Rápido</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Esqueça as pilhas. Nosso removedor possui bateria interna de alta capacidade recarregável via USB. Uma carga garante múltiplos usos com potência máxima constante.
                </p>
              </div>
              <div className="flex-1">
                <img 
                  src={usbImg} 
                  alt="Carregamento USB" 
                  className="rounded-3xl shadow-xl w-full max-w-lg mx-auto"
                />
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-10"
            >
              <div className="flex-1 order-2 md:order-1">
                <img 
                  src={kitImg} 
                  alt="Kit Completo" 
                  className="rounded-3xl shadow-xl w-full max-w-lg mx-auto"
                />
              </div>
              <div className="flex-1 order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-bold mb-4">
                  <Settings className="w-4 h-4" />
                  Kit Completo
                </div>
                <h3 className="text-2xl md:text-3xl mb-4">Lixas para todas as necessidades</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Acompanha cabeças diferentes para cada tipo de pele: uma fina para manutenção diária e polimento, e uma grossa para calos difíceis e pele morta acumulada.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 5. Social Proof / Results */}
      <Section variant="dark" className="text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-white mb-4">Resultados Reais</h2>
            <p className="text-slate-300">Veja o que acontece em apenas uma aplicação</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
             <motion.div 
               whileHover={{ y: -10 }} 
               className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10"
             >
               <img src={beforeAfter1} alt="Antes e Depois 1" className="w-full h-64 object-cover rounded-xl mb-4" />
               <div className="flex items-center gap-1 text-yellow-400 mb-2">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
               </div>
               <p className="text-slate-300 italic">"Não acreditava que funcionaria tão rápido. Meus pés parecem de bebê!"</p>
               <p className="text-white font-bold mt-2">- Maria S.</p>
             </motion.div>

             <motion.div 
               whileHover={{ y: -10 }} 
               className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10"
             >
               <img src={beforeAfter2} alt="Antes e Depois 2" className="w-full h-64 object-cover rounded-xl mb-4" />
               <div className="flex items-center gap-1 text-yellow-400 mb-2">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
               </div>
               <p className="text-slate-300 italic">"A entrega foi super rápida e paguei só quando chegou. Confiança total!"</p>
               <p className="text-white font-bold mt-2">- Carla M.</p>
             </motion.div>

             <motion.div 
               whileHover={{ y: -10 }} 
               className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10"
             >
               <img src={macroShot} alt="Detalhe do produto" className="w-full h-64 object-cover rounded-xl mb-4" />
               <div className="flex items-center gap-1 text-yellow-400 mb-2">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
               </div>
               <p className="text-slate-300 italic">"Produto robusto, bateria dura muito. Vale cada centavo."</p>
               <p className="text-white font-bold mt-2">- Joana P.</p>
             </motion.div>
          </div>
        </div>
      </Section>

      {/* 6. Offer Section */}
      <Section className="bg-gradient-to-br from-blue-50 to-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            <div className="bg-[#FF0000] text-white p-6 text-center shadow-[0_0_30px_rgba(255,0,0,0.4)]">
              <span className="font-black text-2xl animate-pulse tracking-tighter">🚨 ÚLTIMA CHANCE - PROMOÇÃO TERMINA EM MINUTOS! 🚨</span>
            </div>
            
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-2">
                Kit Removedor Premium
              </h2>
              <p className="text-slate-500 text-lg mb-8">Tudo o que você precisa para pés perfeitos</p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
                <div className="text-right hidden md:block">
                  <span className="text-slate-400 text-xl block line-through">De R$ 197,90</span>
                </div>
                
                <div className="bg-red-50 px-8 py-6 rounded-2xl border-2 border-red-100 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Melhor Preço
                  </div>
                  <span className="block text-slate-400 text-lg line-through md:hidden">De R$ 197,90</span>
                  <div className="text-6xl md:text-8xl font-black text-red-600 tracking-tighter drop-shadow-sm">
                    <span className="text-3xl align-top mr-1">R$</span>59<span className="text-3xl">,90</span>
                  </div>
                  <p className="text-green-600 font-black mt-2 text-xl animate-bounce uppercase">FRETE GRÁTIS + PAGUE NA ENTREGA!</p>
                </div>
                
                <div className="text-left hidden md:block">
                   <div className="flex flex-col gap-1">
                     <div className="flex items-center gap-2 text-sm text-slate-600">
                       <Check size={16} className="text-green-500" /> Bateria Recarregável
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-600">
                       <Check size={16} className="text-green-500" /> 2 Cabeças (Fina/Grossa)
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-600">
                       <Check size={16} className="text-green-500" /> Cabo USB Incluso
                     </div>
                   </div>
                </div>
              </div>

              {/* Countdown */}
              <div className="flex justify-center gap-4 mb-8">
                 <div className="flex flex-col items-center">
                   <div className="bg-slate-900 text-white w-12 h-12 rounded-lg flex items-center justify-center font-mono text-xl font-bold">
                     00
                   </div>
                   <span className="text-xs text-slate-500 mt-1">Horas</span>
                 </div>
                 <span className="text-2xl font-bold pt-2">:</span>
                 <div className="flex flex-col items-center">
                   <div className="bg-slate-900 text-white w-12 h-12 rounded-lg flex items-center justify-center font-mono text-xl font-bold">
                     {String(timeLeft.minutes).padStart(2, '0')}
                   </div>
                   <span className="text-xs text-slate-500 mt-1">Minutos</span>
                 </div>
                 <span className="text-2xl font-bold pt-2">:</span>
                 <div className="flex flex-col items-center">
                   <div className="bg-slate-900 text-white w-12 h-12 rounded-lg flex items-center justify-center font-mono text-xl font-bold">
                     {String(timeLeft.seconds).padStart(2, '0')}
                   </div>
                   <span className="text-xs text-slate-500 mt-1">Segundos</span>
                 </div>
              </div>

              <CTAButton className="w-full max-w-md mx-auto animate-pulse-glow" subtext="Pague somente na entrega" />
              
              <p className="mt-6 text-sm text-slate-500 max-w-md mx-auto">
                *Oferta válida apenas enquanto durarem os estoques. Mais de 1.400 unidades vendidas esta semana.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. FAQ */}
      <Section variant="muted">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { 
                  q: "Como funciona o Pagamento na Entrega?", 
                  a: "É muito simples e seguro! Você faz o pedido em nosso site sem pagar nada agora. Quando o entregador dos Correios chegar na sua casa com o produto, você realiza o pagamento diretamente para ele." 
                },
                { 
                  q: "O aparelho machuca a pele?", 
                  a: "Não! O aparelho foi desenvolvido com tecnologia de segurança que para automaticamente se pressionado com muita força. É totalmente indolor e seguro." 
                },
                { 
                  q: "Quanto tempo dura a bateria?", 
                  a: "A bateria de alta performance dura cerca de 120 minutos de uso contínuo. Como cada sessão leva cerca de 10 minutos, você pode usar muitas vezes antes de precisar recarregar." 
                },
                { 
                  q: "Qual o prazo de entrega?", 
                  a: "Nossas entregas são expressas e geralmente levam de 2 a 7 dias úteis, dependendo da sua região." 
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border border-slate-200">
                  <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* 8. Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="container-custom text-center">
          <div className="flex justify-center gap-8 mb-8 opacity-50 grayscale">
            {/* Payment Icons Placeholder - using text for simplicity or icons if available */}
            <div className="h-8 font-bold text-slate-400 border px-2 flex items-center rounded">VISA</div>
            <div className="h-8 font-bold text-slate-400 border px-2 flex items-center rounded">Mastercard</div>
            <div className="h-8 font-bold text-slate-400 border px-2 flex items-center rounded">PIX</div>
            <div className="h-8 font-bold text-slate-400 border px-2 flex items-center rounded">Boleto</div>
          </div>
          <p className="text-slate-400 text-sm">
            © 2024 Lixador Premium. Todos os direitos reservados.
            <br/>
            Políticas de Privacidade | Termos de Uso
          </p>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-10px_30px_rgba(0,0,0,0.2)] md:hidden z-50">
        <CTAButton className="w-full text-lg py-6 font-black animate-pulse-glow" text="QUERO PAGAR NA ENTREGA AGORA!" icon={true} />
      </div>

    </div>
  );
}
