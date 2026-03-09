import React, { useState, useEffect } from 'react';
import { 
  Tv, 
  Film, 
  Play, 
  Zap, 
  ShieldCheck, 
  Headphones, 
  Smartphone, 
  CheckCircle2, 
  ChevronRight,
  Menu,
  X,
  Star,
  Download,
  CreditCard,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5541992734041?text=Olá! Gostaria de assinar a Dezpila.";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center shadow-lg shadow-violet-600/20">
            <Play className="text-white fill-white w-5 h-5" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-slate-900">DEZPILA</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#inicio" className="hover:text-violet-600 transition-colors">Início</a>
          <a href="#recursos" className="hover:text-violet-600 transition-colors">Recursos</a>
          <a href="#planos" className="hover:text-violet-600 transition-colors">Planos</a>
          <a href="https://wa.me/5541992734041?text=Olá! Preciso de suporte com a Dezpila." target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">Suporte</a>
          <a 
            href="#planos"
            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-violet-600/20"
          >
            Assinar Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-violet-600">Início</a>
            <a href="#recursos" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-violet-600">Recursos</a>
            <a href="#planos" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-violet-600">Planos</a>
            <a href="https://wa.me/5541992734041?text=Olá! Preciso de suporte com a Dezpila." target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-violet-600">Suporte</a>
            <a 
              href="#planos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3 rounded-xl font-bold w-full text-center shadow-lg shadow-violet-600/20"
            >
              Assinar Agora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-400/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-fuchsia-400/30 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/80 to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 border border-violet-200 text-violet-600 text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-3 h-3" />
            O melhor custo-benefício do Brasil
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-6">
            TUDO O QUE VOCÊ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">QUER ASSISTIR</span> <br />
            POR APENAS R$10.
          </h1>
          <p className="text-lg text-slate-600 max-w-lg mb-8 leading-relaxed">
            Acesso ilimitado a mais de 100 mil conteúdos. Filmes, séries e esportes ao vivo (ESPN, SporTV, Premiere, TNT Sports) sem travamentos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#planos"
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-xl shadow-violet-600/20"
            >
              Comece Agora
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?u=${i}`} 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-500"><span className="text-slate-900 font-bold">+15k</span> usuários satisfeitos</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 bg-white rounded-3xl p-4 border border-slate-200 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop" 
              alt="Streaming App" 
              className="rounded-2xl shadow-inner"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-violet-600 p-6 rounded-2xl shadow-xl shadow-violet-600/30">
              <p className="text-white font-black text-3xl leading-none">4K</p>
              <p className="text-violet-200 text-xs font-bold uppercase">Qualidade Ultra</p>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 bg-blue-600 p-6 rounded-2xl shadow-xl shadow-blue-600/30 transform -rotate-6">
            <Tv className="text-white w-8 h-8 mb-2" />
            <p className="text-white font-bold text-sm">Canais ao Vivo</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Tv className="w-8 h-8 text-violet-500" />,
      title: "Canais Premium",
      description: "Todos os canais abertos e fechados em alta definição (ESPN, SporTV, Premiere, TNT Sports e mais)."
    },
    {
      icon: <Film className="w-8 h-8 text-fuchsia-500" />,
      title: "Filmes e Séries",
      description: "Catálogo atualizado diariamente com os últimos lançamentos do cinema."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Sem Travamentos",
      description: "Servidores de alta performance que garantem estabilidade total."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      title: "Multi-dispositivo",
      description: "Assista na Smart TV, Celular, Tablet, Computador ou TV Box."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      title: "Segurança Total",
      description: "Conexão criptografada e proteção de dados para sua tranquilidade."
    },
    {
      icon: <Headphones className="w-8 h-8 text-rose-500" />,
      title: "Suporte 24/7",
      description: "Equipe técnica pronta para te ajudar via WhatsApp a qualquer hora."
    }
  ];

  return (
    <section id="recursos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-sm font-bold text-violet-600 uppercase tracking-[0.2em] mb-4">Por que escolher a Dezpila?</h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          A MELHOR EXPERIÊNCIA <br /> DE ENTRETENIMENTO
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-slate-50 border border-slate-200 p-8 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-violet-500/10 transition-all group"
          >
            <div className="mb-6 p-4 bg-white border border-slate-100 shadow-sm rounded-2xl inline-block group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
            <p className="text-slate-600 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

import { PaymentModal } from "./components/PaymentModal";
import { RegistrationModal } from "./components/RegistrationModal";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    setShowPayment(false);
    setUserData(null);
  };

  const handleRegistrationSuccess = (data: any) => {
    setUserData(data);
    setShowPayment(true);
  };

  const handleClose = () => {
    setSelectedPlan(null);
    setShowPayment(false);
    setUserData(null);
  };

  const plans = [
    {
      name: "Básico",
      price: "10,00",
      period: "mês",
      features: ["1 Tela Simultânea", "Qualidade HD/FHD", "Todos os Canais", "Filmes e Séries", "Suporte Standard"],
      color: "zinc",
      cta: "Assinar Agora"
    },
    {
      name: "Premium",
      price: "29,90",
      period: "mês",
      features: ["3 Telas Simultâneas", "Qualidade 4K Ultra HD", "Todos os Canais", "Filmes e Séries", "Suporte Prioritário", "Sem Anúncios"],
      color: "violet",
      popular: true,
      cta: "Mais Vendido"
    },
    {
      name: "Anual",
      price: "120,00",
      period: "ano",
      features: ["3 Telas Simultâneas", "Qualidade 4K Ultra HD", "Todos os Canais", "Filmes e Séries", "Suporte VIP", "Economia de 60%"],
      color: "blue",
      cta: "Economizar Agora"
    }
  ];

  return (
    <section id="planos" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-sm font-bold text-violet-600 uppercase tracking-[0.2em] mb-4">Planos Flexíveis</h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          ESCOLHA O PLANO IDEAL <br /> PARA VOCÊ
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`relative p-8 rounded-[2.5rem] border ${plan.popular ? 'bg-white border-violet-500 shadow-2xl shadow-violet-500/10' : 'bg-white border-slate-200 shadow-lg'}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-violet-600/20">
                Mais Popular
              </div>
            )}
            <div className="mb-8">
              <h4 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">{plan.name}</h4>
              <div className="flex items-baseline gap-1">
                <span className="text-slate-400 text-2xl font-bold">R$</span>
                <span className="text-5xl font-black text-slate-900">{plan.price}</span>
                <span className="text-slate-400 font-medium">/{plan.period}</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center gap-3 text-slate-600 text-sm">
                  <CheckCircle2 className={`w-5 h-5 ${plan.popular ? 'text-violet-600' : 'text-slate-400'}`} />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handlePlanSelect(plan.name)}
              className={`w-full py-4 rounded-2xl font-bold transition-all transform active:scale-95 flex items-center justify-center cursor-pointer ${plan.popular ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-lg shadow-violet-600/20' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedPlan && !showPayment && (
          <RegistrationModal 
            key="registration-modal"
            plan={selectedPlan} 
            onClose={handleClose} 
            onSuccess={handleRegistrationSuccess} 
          />
        )}
        {selectedPlan && showPayment && (
          <PaymentModal 
            key="payment-modal"
            plan={selectedPlan} 
            userData={userData}
            onClose={handleClose} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const AppShowcase = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-sm font-bold text-violet-600 uppercase tracking-[0.2em] mb-4">Aplicativo Exclusivo</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            ASSISTA EM QUALQUER <br /> LUGAR, A QUALQUER HORA
          </h3>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            Nossa plataforma foi desenvolvida para oferecer a melhor performance em todos os seus dispositivos. Baixe nosso app oficial e tenha o cinema no seu bolso.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                <Smartphone className="text-violet-600 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-1">Mobile</h4>
                <p className="text-slate-500 text-sm">Android e iOS</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                <Tv className="text-fuchsia-600 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-1">Smart TV</h4>
                <p className="text-slate-500 text-sm">Samsung, LG, Android TV</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                <Globe className="text-cyan-600 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-1">Web Player</h4>
                <p className="text-slate-500 text-sm">Qualquer navegador</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                <Zap className="text-yellow-500 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-1">TV Box</h4>
                <p className="text-slate-500 text-sm">Fire Stick, Mi Box, etc</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors">
              <Play className="w-5 h-5 fill-current" />
              Web Player
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="absolute inset-0 bg-violet-600/10 blur-[100px] rounded-full" />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1512428559083-a40ce120cc9f?q=80&w=2070&auto=format&fit=crop" 
              alt="Mobile App" 
              className="rounded-[3rem] border-8 border-white shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onPrivacyClick }: { onPrivacyClick: () => void }) => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center shadow-lg shadow-violet-600/20">
              <Play className="text-white fill-white w-5 h-5" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-slate-900">DEZPILA</span>
          </div>
          <p className="text-slate-500 max-w-sm mb-8">
            A Dezpila é a plataforma líder em entretenimento digital acessível. Oferecemos a melhor qualidade de streaming pelo menor preço do mercado.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-violet-600 hover:border-violet-600 cursor-pointer transition-all shadow-sm">
              <CreditCard className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-violet-600 hover:border-violet-600 cursor-pointer transition-all shadow-sm">
              <Headphones className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-violet-600 hover:border-violet-600 cursor-pointer transition-all shadow-sm">
              <Globe className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-slate-900 font-bold mb-6">Links Rápidos</h5>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><a href="#inicio" className="hover:text-violet-600 transition-colors">Início</a></li>
            <li><a href="#recursos" className="hover:text-violet-600 transition-colors">Recursos</a></li>
            <li><a href="#planos" className="hover:text-violet-600 transition-colors">Planos</a></li>
            <li><a href="https://wa.me/5541992734041?text=Olá! Preciso de suporte com a Dezpila." target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">Suporte Técnico</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-slate-900 font-bold mb-6">Legal</h5>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><a href="#" className="hover:text-violet-600 transition-colors">Termos de Uso</a></li>
            <li>
              <button onClick={onPrivacyClick} className="hover:text-violet-600 transition-colors text-left">
                Privacidade
              </button>
            </li>
            <li><a href="#" className="hover:text-violet-600 transition-colors">Cookies</a></li>
            <li><a href="#" className="hover:text-violet-600 transition-colors">Reembolso</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-medium uppercase tracking-widest">
        <p>© 2024 DEZPILA STREAMING. TODOS OS DIREITOS RESERVADOS.</p>
        <div className="flex items-center gap-6">
          <span>FEITO COM ❤️ PARA VOCÊ</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>SISTEMA ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const PrivacyPolicy = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-12 pb-12 px-6">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-violet-600 font-bold hover:text-violet-700 transition-colors group"
        >
          <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Voltar para Início
        </button>
        
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Política de Privacidade</h1>
        
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p className="mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Introdução</h2>
          <p className="mb-4">
            A Dezpila respeita a sua privacidade e está comprometida em proteger os seus dados pessoais. 
            Esta política de privacidade informará como cuidamos dos seus dados pessoais quando você visita nosso site 
            e informa sobre seus direitos de privacidade e como a lei o protege.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Dados que coletamos</h2>
          <p className="mb-4">
            Podemos coletar, usar, armazenar e transferir diferentes tipos de dados pessoais sobre você, que agrupamos da seguinte forma:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Dados de Identidade:</strong> inclui nome, sobrenome, nome de usuário ou identificador similar.</li>
            <li><strong>Dados de Contato:</strong> inclui endereço de e-mail e números de telefone.</li>
            <li><strong>Dados Técnicos:</strong> inclui endereço de protocolo de internet (IP), seus dados de login, tipo e versão do navegador, configuração e localização do fuso horário, tipos e versões de plug-in do navegador, sistema operacional e plataforma e outras tecnologias nos dispositivos que você usa para acessar este site.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Como usamos seus dados</h2>
          <p className="mb-4">
            Só usaremos seus dados pessoais quando a lei nos permitir. Mais comumente, usaremos seus dados pessoais nas seguintes circunstâncias:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Para registrar você como um novo cliente.</li>
            <li>Para processar e entregar seu pedido, incluindo gerenciamento de pagamentos, taxas e encargos.</li>
            <li>Para gerenciar nosso relacionamento com você.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Segurança de dados</h2>
          <p className="mb-4">
            Estabelecemos medidas de segurança adequadas para evitar que seus dados pessoais sejam acidentalmente perdidos, usados ou acessados de forma não autorizada, alterados ou divulgados.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Seus direitos legais</h2>
          <p className="mb-4">
            Sob certas circunstâncias, você tem direitos sob as leis de proteção de dados em relação aos seus dados pessoais, incluindo o direito de solicitar acesso, correção, apagamento, restrição, transferência, ou de retirar o consentimento.
          </p>
        </div>
      </div>
    </div>
  );
};

const StreamingLogos = () => {
  const logos = [
    { name: 'Netflix', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'Disney+', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
    { name: 'Prime Video', url: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
    { name: 'Max', url: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Max_logo.svg' },
    { name: 'Globoplay', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Globoplay_logo_2020.svg' },
    { name: 'Apple TV+', url: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Apple_TV_Plus_Logo.svg' },
    { name: 'ESPN', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/ESPN_wordmark.svg' },
    { name: 'SporTV', url: 'https://upload.wikimedia.org/wikipedia/commons/2/26/SporTV_2021.png' },
    { name: 'Premiere', url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Premiere_%282017%29_logo.png' },
    { name: 'TNT Sports', url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/TNT_Sports_%282023%29.svg' },
  ];

  // Double the logos to create a seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-violet-50/50 to-white border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="w-16 h-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full mb-6" />
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-4">
            TODOS OS STREAMINGS
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 text-lg md:text-xl mt-2 font-bold tracking-widest uppercase">
              Em um só lugar
            </span>
          </h3>
        </div>
        
        <div className="relative flex overflow-hidden mask-linear-fade">
          <motion.div 
            className="flex items-center gap-8 md:gap-12 whitespace-nowrap"
            animate={{ x: [0, -2880] }} // 10 items * (240px width + 48px gap) = 2880
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center w-48 h-28 md:w-60 md:h-36 bg-white border border-violet-100 rounded-3xl p-6 md:p-8 shadow-xl shadow-violet-500/5 relative overflow-hidden"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="w-full h-full object-contain drop-shadow-sm"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('span')) {
                      const span = document.createElement('span');
                      span.className = 'font-black text-2xl text-slate-800 tracking-tighter';
                      span.innerText = logo.name;
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};



export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'privacy'>('home');

  if (currentView === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-violet-600 selection:text-white">
      <Navbar />
      <Hero />
      <StreamingLogos />
      <Features />
      <Pricing />
      <AppShowcase />
      <Footer onPrivacyClick={() => setCurrentView('privacy')} />
    </div>
  );
}
