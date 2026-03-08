import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, User, Mail, Phone, FileText, ArrowRight } from 'lucide-react';

interface RegistrationData {
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
}

interface RegistrationModalProps {
  plan: string;
  onClose: () => void;
  onSuccess: (data: RegistrationData) => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ plan, onClose, onSuccess }) => {
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    cpf: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState<Partial<RegistrationData>>({});

  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cpf') formattedValue = formatCPF(value);
    if (name === 'phone') formattedValue = formatPhone(value);

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
    if (errors[name as keyof RegistrationData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: Partial<RegistrationData> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Nome completo é obrigatório';
    if (formData.cpf.length < 14) newErrors.cpf = 'CPF inválido';
    if (!formData.email.includes('@')) newErrors.email = 'Email inválido';
    if (formData.phone.length < 14) newErrors.phone = 'Telefone inválido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSuccess(formData);
    }
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

        <div className="text-center mb-8">
          <h3 className="text-2xl font-black text-slate-900 mb-2">Cadastro Rápido</h3>
          <p className="text-slate-500">Preencha seus dados para prosseguir com a assinatura do plano <span className="font-bold text-violet-600">{plan}</span>.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1 ml-1">Nome Completo</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full pl-12 pr-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50'} focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all`}
                placeholder="Seu nome completo"
              />
            </div>
            {errors.fullName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1 ml-1">CPF</label>
            <div className="relative">
              <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                maxLength={14}
                className={`w-full pl-12 pr-4 py-3 rounded-xl border ${errors.cpf ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50'} focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all`}
                placeholder="000.000.000-00"
              />
            </div>
            {errors.cpf && <p className="text-red-500 text-xs mt-1 ml-1">{errors.cpf}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1 ml-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-12 pr-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50'} focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all`}
                placeholder="seu@email.com"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1 ml-1">Telefone (WhatsApp)</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={15}
                className={`w-full pl-12 pr-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50'} focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all`}
                placeholder="(00) 00000-0000"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-4 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-violet-600/20"
          >
            Ir para Pagamento
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};
