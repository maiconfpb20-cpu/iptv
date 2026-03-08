import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, CreditCard, Smartphone } from 'lucide-react';
import QRCode from 'react-qr-code';
import { Pix } from '../utils/pix';

interface PaymentModalProps {
  plan: string;
  onClose: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ plan, onClose }) => {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CreditCard className="w-8 h-8 text-violet-600" />
          </div>
          
          <h3 className="text-2xl font-black text-slate-900 mb-2">Pagamento via Pix</h3>
          <p className="text-slate-500 mb-4">Escaneie o QR Code abaixo para realizar o pagamento do plano {plan}.</p>
          
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full font-bold text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            Expira em: {formatTime(timeLeft)}
          </div>

          <div className="bg-white p-4 rounded-2xl border-2 border-slate-100 inline-block mb-6 shadow-sm">
            <QRCode value={getPixPayload()} size={200} />
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
            <p className="text-xs text-slate-500 uppercase font-bold mb-2">Chave Pix</p>
            <div className="flex items-center justify-between gap-4">
              <code className="text-sm font-mono font-bold text-slate-900 truncate">{pixKey}</code>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(pixKey);
                  alert("Chave Pix copiada!");
                }}
                className="text-violet-600 hover:text-violet-700 text-sm font-bold"
              >
                Copiar
              </button>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            Após o pagamento, envie o comprovante para nosso WhatsApp para liberar seu acesso.
          </p>
          
          <a 
            href={`https://wa.me/5541992734041?text=Olá! Fiz o pagamento do plano ${plan} e gostaria de liberar meu acesso.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold flex items-center justify-center gap-2 transition-colors"
          >
            <Smartphone className="w-5 h-5" />
            Enviar Comprovante
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
