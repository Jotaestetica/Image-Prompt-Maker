import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle size={32} />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Página não encontrada</h1>
        <p className="text-gray-500 mb-6">
          Ocorreu um erro ou a página que você está procurando não existe.
        </p>
        <Link href="/" className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors">
          Voltar para o Início
        </Link>
      </div>
    </div>
  );
}
