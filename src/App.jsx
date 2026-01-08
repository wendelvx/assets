import { useState } from 'react'
import { LayoutDashboard, Package, Users, Settings, LogOut, Code2 } from 'lucide-react'

import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/card'
import { Modal, ModalHeader, ModalBody, ModalFooter } from './components/ui/modal'
import { Sidebar, SidebarLogo, SidebarItem, SidebarFooter } from './components/ui/sidebar'
import { Alert } from './components/ui/alert';
import { Toast } from './components/ui/toast';
import { Dropdown } from './components/ui/dropdown'
import { Badge } from './components/ui/badge';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [showToast, setShowToast] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState(null)
  const [activeTab, setActiveTab] = useState('Dashboard')

  const roleOptions = [
    { label: 'Administrador', value: 'admin' },
    { label: 'Editor', value: 'editor' },
    { label: 'Visualizador', value: 'viewer' },
  ];

  const handleSave = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <Sidebar>
        <SidebarLogo icon={Code2} label="Nexus UI" />

        <div className="flex-1 px-4 py-6 space-y-1.5">
          <SidebarItem
            icon={LayoutDashboard}
            label="Dashboard"
            active={activeTab === 'Dashboard'}
            onClick={() => setActiveTab('Dashboard')}
          />
          <SidebarItem
            icon={Package}
            label="Componentes"
            active={activeTab === 'Componentes'}
            onClick={() => setActiveTab('Componentes')}
          />
          <SidebarItem
            icon={Users}
            label="Equipe"
            active={activeTab === 'Equipe'}
            onClick={() => setActiveTab('Equipe')}
          />
          <SidebarItem
            icon={Settings}
            label="Configurações"
            active={activeTab === 'Configurações'}
            onClick={() => setActiveTab('Configurações')}
          />
        </div>

        <SidebarFooter>
          <SidebarItem icon={LogOut} label="Sair da conta" />
        </SidebarFooter>
      </Sidebar>

      <main className="flex-1 ml-64 p-8 transition-all">

        <header className="max-w-5xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900 tracking-tight">
                {activeTab} Showcase
              </h1>
              <p className="text-neutral-500">
                Visualize os componentes da sua biblioteca com o novo estilo Hyper-Modern.
              </p>
            </div>
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              + Novo Cadastro
            </Button>
          </div>
        </header>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="space-y-8">
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">Botões: Variantes</h2>
              <Card>
                <CardContent className="flex flex-wrap gap-4 pt-6">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="danger">Danger</Button>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">Tamanhos e Lógica</h2>
              <Card>
                <CardContent className="flex flex-wrap items-center gap-4 pt-6">
                  <Button size="sm">Small</Button>
                  <Button size="md" onClick={() => setCount(count + 1)}>Count: {count}</Button>
                  <Button size="lg" isLoading={loading} onClick={handleSave}>Salvar</Button>
                </CardContent>
              </Card>
            </section>
            <section>
  <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">Badges / Status</h2>
  <Card>
    <CardContent className="flex flex-wrap gap-3 pt-6">
      <Badge variant="primary">Ativo</Badge>
      <Badge variant="secondary">Pendente</Badge>
      <Badge variant="outline">Rascunho</Badge>
      <Badge variant="success">Pago</Badge>
      <Badge variant="error">Cancelado</Badge>
      <Badge variant="warning">Atenção</Badge>
      
      <div className="w-full border-t border-neutral-100 my-2" />
      <Badge size="sm" pill variant="primary">New Feature</Badge>
      <Badge size="md" pill variant="secondary">v2.0</Badge>
    </CardContent>
  </Card>
</section>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">Formulário de Acesso</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>Teste de Inputs e Dropdowns combinados.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input label="E-mail" placeholder="seu@email.com" />

                  <Dropdown
                    label="Nível de Acesso"
                    options={roleOptions}
                    onSelect={(opt) => setSelectedRole(opt)}
                    placeholder="Selecione seu cargo"
                  />

                  <Input label="Senha" type="password" error="A senha é obrigatória" />
                </CardContent>
                <CardFooter>
                  <Button variant="primary" fullWidth>Entrar na plataforma</Button>
                </CardFooter>
              </Card>
            </section>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalHeader title="Novo Cadastro" onClose={() => setIsModalOpen(false)} />
          <ModalBody>
            <div className="space-y-4 pt-2">
              <Input label="Nome do Membro" placeholder="Digite o nome..." />
              <Input label="Cargo" placeholder="Ex: Desenvolvedor Senior" />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
            <Button variant="primary">Salvar Membro</Button>
          </ModalFooter>
        </Modal>
        <div className="space-y-6 p-8">
          <section className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-sm font-bold uppercase text-neutral-400">Mensagens de Sistema</h2>

            <Alert variant="success" title="Sucesso!" onClose={() => alert('fechou')}>
              Sua conta foi criada com sucesso. Bem-vindo ao Nexus UI!
            </Alert>

            <Alert variant="error" title="Erro Crítico">
              Não foi possível conectar ao servidor. Tente novamente mais tarde.
            </Alert>

            <Alert variant="warning" title="Atenção">
              Seu plano expira em 3 dias. Renove agora para não perder o acesso.
            </Alert>
          </section>

          {/* Exemplo de Toast */}
          <div className="flex justify-center">
            <Button onClick={() => setShowToast(true)}>
              Enviar Notificação (Toast)
            </Button>
          </div>

          <Toast
            message="Dados salvos com sucesso!"
            isOpen={showToast}
            onClose={() => setShowToast(false)}
          />
        </div>

      </main>
    </div>
  )
}

export default App