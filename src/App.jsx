import { useState } from 'react'
import { LayoutDashboard, Package, Users, Settings, LogOut, Code2, Bell, Smartphone } from 'lucide-react'

import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/card'
import { Modal, ModalHeader, ModalBody, ModalFooter } from './components/ui/modal'
import { Sidebar, SidebarLogo, SidebarItem, SidebarFooter } from './components/ui/sidebar'
import { Alert } from './components/ui/alert'
import { Toast } from './components/ui/toast'
import { Dropdown } from './components/ui/dropdown'
import { Badge } from './components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs'
import { Table, THead, TBody, TR, TH, TD } from './components/ui/table'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState(null)
  const [activeSidebar, setActiveSidebar] = useState('Componentes')

  const roleOptions = [
    { label: 'Administrador', value: 'admin' },
    { label: 'Editor', value: 'editor' },
    { label: 'Visualizador', value: 'viewer' },
  ];

  const teamData = [
  { id: 1, name: 'Paulo Wendel', email: 'paulo@nexus.com', role: 'Admin', status: 'Ativo' },
  { id: 2, name: 'Ana Silva', email: 'ana.s@nexus.com', role: 'Designer', status: 'Pendente' },
  { id: 3, name: 'Lucas Rocha', email: 'lucas@nexus.com', role: 'Developer', status: 'Ativo' },
  { id: 4, name: 'Carla Dias', email: 'carla@nexus.com', role: 'Manager', status: 'Inativo' },
];

  const handleSave = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setShowToast(true)
    }, 2000)
  }

  return (
    <div className="flex min-h-screen bg-neutral-50 font-['Plus_Jakarta_Sans']">
      <Sidebar>
        <SidebarLogo icon={Code2} label="Nexus UI" />

        <div className="flex-1 px-4 py-6 space-y-1.5">
          <SidebarItem
            icon={LayoutDashboard}
            label="Dashboard"
            active={activeSidebar === 'Dashboard'}
            onClick={() => setActiveSidebar('Dashboard')}
          />
          <SidebarItem
            icon={Package}
            label="Componentes"
            active={activeSidebar === 'Componentes'}
            onClick={() => setActiveSidebar('Componentes')}
          />
          <SidebarItem
            icon={Users}
            label="Equipe"
            active={activeSidebar === 'Equipe'}
            onClick={() => setActiveSidebar('Equipe')}
          />
          <SidebarItem
            icon={Settings}
            label="Configurações"
            active={activeSidebar === 'Configurações'}
            onClick={() => setActiveSidebar('Configurações')}
          />
        </div>

        <SidebarFooter>
          <SidebarItem icon={LogOut} label="Sair da conta" />
        </SidebarFooter>
      </Sidebar>

      <main className="flex-1 ml-64 p-8 transition-all">
        
        <header className="max-w-5xl mx-auto mb-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900 tracking-tight">
                Nexus Showcase
              </h1>
              <p className="text-neutral-500 mt-1">
                Gerencie e visualize os componentes do seu Design System.
              </p>
            </div>
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              + Novo Cadastro
            </Button>
          </div>
        </header>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="forms">
            <TabsList>
              <TabsTrigger value="forms">Formulários & Inputs</TabsTrigger>
              <TabsTrigger value="feedback">Feedback & Status</TabsTrigger>
              <TabsTrigger value="visual">Botões & Estilos</TabsTrigger>
            </TabsList>

            <TabsContent value="forms" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <section className="space-y-6">
                <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Autenticação</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Entrar</CardTitle>
                    <CardDescription>Combine inputs e dropdowns no seu formulário.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input label="E-mail" placeholder="seu@email.com" />
                    <Dropdown
                      label="Nível de Acesso"
                      options={roleOptions}
                      onSelect={setSelectedRole}
                      placeholder="Selecione um cargo"
                    />
                    <Input label="Senha" type="password" error="A senha é obrigatória" />
                  </CardContent>
                  <CardFooter>
                    <Button variant="primary" fullWidth onClick={handleSave} isLoading={loading}>
                      Acessar Plataforma
                    </Button>
                  </CardFooter>
                </Card>
              </section>

              <section className="space-y-6">
                <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Preview de Dados</h2>
                <Card className="bg-primary-50/30 border-primary-100">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <p className="text-xs text-primary-600 font-bold uppercase">Estado Atual</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-neutral-600">Cargo Selecionado:</span>
                        {selectedRole ? (
                          <Badge variant="primary">{selectedRole.label}</Badge>
                        ) : (
                          <Badge variant="outline">Nenhum</Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>

            <TabsContent value="feedback" className="space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <section className="space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Alertas Globais</h2>
                  <Alert variant="success" title="Sistema Online">
                    Todos os serviços estão operando normalmente.
                  </Alert>
                  <Alert variant="warning" title="Backup Necessário">
                    Sua última sincronização foi há 24 horas.
                  </Alert>
                  <Alert variant="error" title="Falha na API">
                    Não foi possível carregar os dados do perfil.
                  </Alert>
                </section>

                <section className="space-y-6">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Sistema de Badges</h2>
                  <Card>
                    <CardContent className="flex flex-wrap gap-3 pt-6">
                      <Badge variant="success">Pago</Badge>
                      <Badge variant="error">Atrasado</Badge>
                      <Badge variant="warning">Processando</Badge>
                      <Badge variant="primary" pill>Novo</Badge>
                      <Badge variant="secondary" pill size="sm">Beta</Badge>
                    </CardContent>
                    <CardFooter className="justify-center border-t border-neutral-100 pt-4">
                       <Button variant="outline" size="sm" onClick={() => setShowToast(true)}>
                         Disparar Toast
                       </Button>
                    </CardFooter>
                  </Card>
                </section>

                <section className="space-y-4">
  <div className="flex items-center justify-between">
    <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Membros da Equipe</h2>
    <Badge variant="secondary">{teamData.length} Usuários</Badge>
  </div>
  
  <Table>
    <THead>
      <TR>
        <TH>Membro</TH>
        <TH>Cargo</TH>
        <TH>Status</TH>
        <TH className="text-right">Ações</TH>
      </TR>
    </THead>
    <TBody>
      {teamData.map((user) => (
        <TR key={user.id}>
          <TD>
            <div className="flex flex-col">
              <span className="font-medium text-neutral-900">{user.name}</span>
              <span className="text-xs text-neutral-500">{user.email}</span>
            </div>
          </TD>
          <TD>
            <span className="text-neutral-600">{user.role}</span>
          </TD>
          <TD>
            <Badge 
              variant={user.status === 'Ativo' ? 'success' : user.status === 'Pendente' ? 'warning' : 'error'}
              size="sm"
            >
              {user.status}
            </Badge>
          </TD>
          <TD className="text-right">
            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm">Editar</Button>
            </div>
          </TD>
        </TR>
      ))}
    </TBody>
  </Table>
</section>
              </div>
            </TabsContent>

            <TabsContent value="visual" className="space-y-8">
              <section className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Variantes de Ação</h2>
                <Card>
                  <CardContent className="flex flex-wrap gap-4 pt-6">
                    <Button variant="primary">Primary Action</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="danger">Danger Zone</Button>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Escalabilidade</h2>
                <Card>
                  <CardContent className="flex items-center gap-4 pt-6">
                    <Button size="sm">Pequeno</Button>
                    <Button size="md" onClick={() => setCount(c => c + 1)}>Contador: {count}</Button>
                    <Button size="lg">Grande</Button>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>
          </Tabs>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalHeader title="Novo Cadastro" onClose={() => setIsModalOpen(false)} />
          <ModalBody>
            <div className="space-y-4 pt-2">
              <Input label="Nome completo" placeholder="Ex: Paulo Wendel" />
              <Dropdown label="Departamento" options={[
                {label: 'Engenharia', value: 'eng'},
                {label: 'Design', value: 'des'}
              ]} />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
            <Button variant="primary">Confirmar</Button>
          </ModalFooter>
        </Modal>

        <Toast
          message="Ação realizada com sucesso!"
          isOpen={showToast}
          onClose={() => setShowToast(false)}
        />

      </main>
    </div>
  )
}

export default App