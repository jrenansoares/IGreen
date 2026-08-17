import { motion } from "motion/react";
import { SEO } from "../components/SEO";

export function Termos() {
  return (
    <main className="pt-32 pb-16 px-4 bg-gray-50 min-h-screen">
      <SEO 
        title="Termos de Uso | iGreen"
        description="Termos de uso e condições gerais para navegação e utilização dos serviços de cotação e intermediação de soluções iGreen."
        canonical="https://igreen.conexoes.workers.dev/termos"
      />
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-4xl font-black text-bp-purple mb-4">Termos de Uso</h1>
          <p className="text-gray-500 mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">1. Condições Gerais</h2>
              <p>
                O presente documento ("Termos de Uso") estabelece as condições gerais para utilização deste site, operado por <strong>J. Renan M. S.</strong> (CNPJ 54.730.192/0001-10), na qualidade de Licenciado independente da iGreen. 
                Ao navegar neste site e preencher formulários de cotação, você concorda plenamente e sem reservas com estes Termos de Uso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">2. Natureza dos Serviços</h2>
              <p>
                Este site atua como um canal de captação, cotação e direcionamento de propostas de seguro de automóvel. Os produtos de seguro comercializados por intermédio desta plataforma são subscritos, emitidos e garantidos integralmente pela <strong>BP Seguradora S.A.</strong> (Código Susep 01546 | CNPJ 50.180.527/0001-13).
              </p>
              <p className="mt-2">
                As cotações fornecidas têm caráter informativo inicial e estão sujeitas à emissão e aceitação da proposta pela seguradora, conforme os parâmetros oficiais e tabela FIPE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">3. Responsabilidades do Usuário</h2>
              <p>O usuário concorda em:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Fornecer informações verdadeiras, precisas, atuais e completas no momento da cotação do seguro.</li>
                <li>Estar ciente de que a prestação de informações falsas ou omissão de dados pode acarretar a recusa do seguro ou a negativa de indenização de sinistro, conforme legislação de seguros vigente.</li>
                <li>Não utilizar a plataforma para fins ilícitos, fraudulentos ou de forma que possa danificar a operação tecnológica do sistema.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">4. Propriedade Intelectual</h2>
              <p>
                As marcas, logotipos, nomes comerciais, imagens, layouts e conteúdos exibidos neste site relacionados à "iGreen" e "BP Seguradora" são de propriedade exclusiva destas respectivas empresas e estão sendo utilizados sob autorização de parceria comercial e licenciamento. É terminantemente proibida a reprodução não autorizada de qualquer conteúdo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">5. Independência do Licenciado</h2>
              <p>
                Fica claro e acordado que o administrador deste site é um <strong>Licenciado Independente da iGreen</strong>. O atendimento comercial inicial e apresentação das soluções é realizado pelo licenciado, porém o acionamento de sinistros, assistências 24 horas e regulação de apólices são garantidos diretamente pela BP Seguradora S.A.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">6. Modificações dos Termos</h2>
              <p>
                Estes Termos de Uso podem ser atualizados a qualquer momento, sem aviso prévio, para refletir melhorias no serviço ou mudanças regulatórias. Recomendamos a leitura periódica desta página.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">7. Foro e Legislação</h2>
              <p>
                Estes Termos são regidos pelas leis da República Federativa do Brasil. Para dirimir quaisquer dúvidas ou controvérsias oriundas deste documento, fica eleito o foro da comarca de domicílio do Licenciado ou do cliente.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
