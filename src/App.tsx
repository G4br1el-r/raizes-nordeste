import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UnidadeProvider } from './features/unidade/UnidadeContext';
import { CarrinhoProvider } from './features/carrinho/CarrinhoContext';
import { Header } from './components/Header';

import { SelecaoCanal } from './routes/canal/SelecaoCanal';
import { Login } from './routes/login/Login';
import { Home } from './routes/home/Home';
import { Cardapio } from './routes/cardapio/Cardapio';
import { Carrinho } from './routes/carrinho/Carrinho';
import { Checkout } from './routes/checkout/Checkout';
import { Pedido } from './routes/pedido/Pedido';
import { Fidelidade } from './routes/fidelidade/Fidelidade';
import { Promocoes } from './routes/promocoes/Promocoes';
import { Totem } from './routes/totem/Totem';

import { AdminLayout } from './routes/admin/AdminLayout';
import { Dashboard } from './routes/admin/Dashboard';
import { Auditoria } from './routes/admin/Auditoria';

// Providers globais envolvem a aplicacao para que o estado de
// unidade e carrinho fique disponivel em qualquer tela/canal.
export default function App() {
  return (
    <BrowserRouter>
      <UnidadeProvider>
        <CarrinhoProvider>
          <Header />
          <Routes>
            {/* Entrada multicanal */}
            <Route path="/" element={<SelecaoCanal />} />
            <Route path="/login" element={<Login />} />
            <Route path="/totem" element={<Totem />} />

            {/* Jornada do cliente (app/web) */}
            <Route path="/inicio" element={<Home />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/pedido" element={<Pedido />} />
            <Route path="/promocoes" element={<Promocoes />} />
            <Route path="/fidelidade" element={<Fidelidade />} />

            {/* Painel da matriz (admin) */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="auditoria" element={<Auditoria />} />
            </Route>
          </Routes>
        </CarrinhoProvider>
      </UnidadeProvider>
    </BrowserRouter>
  );
}
