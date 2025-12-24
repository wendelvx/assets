import { useState } from 'react'
import { Button } from './components/ui/button' 
import { Input } from './components/ui/input';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleSave = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <header className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-neutral-900">UI Library Showcase</h1>
        <p className="text-neutral-500">Testando componentes da minha biblioteca personalizável.</p>
      </header>

      <main className="max-w-4xl mx-auto space-y-12">
        
        <section>
          <h2 className="text-lg font-semibold mb-4 text-neutral-800">Botões: Variantes</h2>
          <div className="flex flex-wrap gap-4 p-6 bg-white border border-neutral-200 rounded-lg shadow-sm">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger Action</Button>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4 text-neutral-800">Tamanhos e Estados</h2>
          <div className="flex flex-wrap items-center gap-4 p-6 bg-white border border-neutral-200 rounded-lg shadow-sm">
            <Button size="sm">Small</Button>
            <Button size="md" onClick={() => setCount(count + 1)}>
              Count is: {count}
            </Button>
            <Button size="lg" isLoading={loading} onClick={handleSave}>
              {loading ? 'Salvando...' : 'Salvar Alterações'}
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4 text-neutral-800">Responsividade (Full Width no Mobile)</h2>
          <div className="p-6 bg-white border border-neutral-200 rounded-lg shadow-sm">
            <Button variant="primary" fullWidth className="md:w-auto">
              Botão Responsivo
            </Button>
            <p className="mt-2 text-xs text-neutral-400">
              *Este botão ocupa 100% da largura em telas pequenas e largura automática em desktops.
            </p>
          </div>
        </section>

        <section className="max-w-md mx-auto p-6 bg-white border border-neutral-200 rounded-lg shadow-sm">
  <h2 className="text-lg font-semibold mb-6 text-neutral-800">Exemplo de Formulário</h2>
  
  <div className="space-y-4">
    <Input 
      label="Nome Completo" 
      placeholder="Ex: Wendel Silva" 
      id="nome"
    />
    
    <Input 
      label="E-mail" 
      type="email" 
      placeholder="seu@email.com" 
      id="email"
    />

    <Input 
      label="Senha" 
      type="password" 
      error="A senha deve ter pelo menos 8 caracteres" 
      id="password"
    />

    <Button variant="primary" fullWidth className="mt-2">
      Criar Conta
    </Button>
  </div>
</section>

      </main>
    </div>
  )
}

export default App