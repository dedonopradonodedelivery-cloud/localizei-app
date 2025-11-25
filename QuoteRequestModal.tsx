import React, { useState } from 'react';
import { X, Send, Clock, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  categoryName: string;
}

export const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({ isOpen, onClose, categoryName }) => {
  const [description, setDescription] = useState('');
  const [urgency, setUrgency] = useState('normal');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      
      // Close after success message
      setTimeout(() => {
        setIsSent(false);
        setDescription('');
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-end justify-center animate-in fade-in duration-300">
      <div 
        className="bg-white dark:bg-gray-900 w-full max-w-md rounded-t-[2rem] shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {isSent ? (
          <div className="p-10 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Pedido Enviado!</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Sua solicitação foi enviada para os profissionais de <strong>{categoryName}</strong>. Em breve você receberá orçamentos no seu WhatsApp.
            </p>
          </div>
        ) : (
          <div className="p-6 pb-8">
            {/* Handle Bar */}
            <div className="w-12 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-6" />

            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-primary-500 font-bold text-xs uppercase tracking-wider">Solicitar Orçamento</span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{categoryName}</h2>
              </div>
              <button onClick={onClose} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">O que você precisa?</label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Descreva o serviço com detalhes (ex: Preciso trocar a fiação do chuveiro e instalar 2 tomadas...)"
                  className="w-full h-32 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none resize-none text-sm dark:text-white"
                  required
                />
              </div>

              {/* Urgency Selection */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Qual a urgência?</label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button" 
                    onClick={() => setUrgency('low')}
                    className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all ${urgency === 'low' ? 'bg-green-100 border-green-200 text-green-700 dark:bg-green-900/30 dark:border-green-800 dark:text-green-400' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500'}`}
                  >
                    Pode esperar
                  </button>
                  <button
                    type="button" 
                    onClick={() => setUrgency('normal')}
                    className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all ${urgency === 'normal' ? 'bg-blue-100 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-400' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500'}`}
                  >
                    Para essa semana
                  </button>
                  <button
                    type="button" 
                    onClick={() => setUrgency('high')}
                    className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1 ${urgency === 'high' ? 'bg-red-100 border-red-200 text-red-700 dark:bg-red-900/30 dark:border-red-800 dark:text-red-400' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500'}`}
                  >
                    <AlertCircle className="w-3 h-3" />
                    Urgente
                  </button>
                </div>
              </div>

              {/* Info Note */}
              <div className="bg-orange-50 dark:bg-orange-900/10 p-3 rounded-xl flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-orange-700 dark:text-orange-300">
                  Seu pedido será enviado para profissionais verificados da <strong>Freguesia</strong>.
                </p>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSending || !description.trim()}
                className="w-full py-4 bg-primary-500 hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-2xl shadow-lg shadow-primary-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                {isSending ? (
                  <span className="animate-pulse">Enviando...</span>
                ) : (
                  <>
                    Solicitar Orçamento
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

            </form>
          </div>
        )}
      </div>
    </div>
  );
};