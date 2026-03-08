import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, CreditCard, Smartphone } from 'lucide-react';
import QRCode from 'react-qr-code';
import { Pix } from '../utils/pix';

interface PaymentModalProps {
  plan: string;
  userData?: {
    fullName: string;
    cpf: string;
    email: string;
    phone: string;
  };
  onClose: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ plan, userData, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(90);
  const pixKey = "114.106.619-03";

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.reload();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getPixPayload = () => {
    const pix = new Pix(
      pixKey,
      "DEZPILA STREAMING",
      "CURITIBA",
      plan === "Básico" ? "10.00" : plan === "Premium" ? "29.90" : "120.00",
      "ASSINATURA"
    );
    return pix.getPayload();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop")',
        }}
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative z-10 bg-black/40 backdrop-blur-xl rounded-[2rem] p-8 max-w-md w-full shadow-2xl border border-white/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/5"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-violet-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-violet-500/30">
            <CreditCard className="w-8 h-8 text-violet-400" />
          </div>
          
          <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Pagamento via Pix</h3>
          <p className="text-slate-300 text-sm mb-6">Escaneie o QR Code abaixo para liberar o plano <span className="font-bold text-violet-400">{plan}</span>.</p>
          
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full font-bold text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            Expira em: {formatTime(timeLeft)}
          </div>

          <div className="bg-white p-4 rounded-2xl border-4 border-white inline-block mb-6 shadow-2xl">
            <QRCode value={getPixPayload()} size={200} />
          </div>

          <div className="bg-black/40 p-4 rounded-xl border border-white/10 mb-6">
            <p className="text-[10px] text-slate-400 uppercase font-bold mb-2 tracking-widest">Chave Pix</p>
            <div className="flex items-center justify-between gap-4">
              <code className="text-sm font-mono font-bold text-white truncate">{pixKey}</code>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(pixKey);
                  alert("Chave Pix copiada!");
                }}
                className="text-violet-400 hover:text-violet-300 text-sm font-bold uppercase tracking-wider"
              >
                Copiar
              </button>
            </div>
          </div>

          <p className="text-xs text-slate-400 mb-6">
            Após o pagamento, envie o comprovante para nosso WhatsApp para liberar seu acesso imediatamente.
          </p>
          
          <a 
            href={`https://wa.me/5541992734041?text=Olá! Fiz o pagamento do plano ${plan} e gostaria de liberar meu acesso.%0A%0ADados:%0ANome: ${userData?.fullName || ''}%0ACPF: ${userData?.cpf || ''}%0AEmail: ${userData?.email || ''}%0ATelefone: ${userData?.phone || ''}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-green-600/20 border border-white/10"
          >
            <Smartphone className="w-5 h-5" />
            Enviar Comprovante
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
