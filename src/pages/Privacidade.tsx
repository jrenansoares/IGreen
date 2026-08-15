import { motion } from "motion/react";

export function Privacidade() {
  return (
    <main className="pt-32 pb-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-4xl font-black text-bp-purple mb-4">Política de Privacidade e LGPD</h1>
          <p className="text-gray-500 mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">1. Introdução</h2>
              <p>
                Esta Política de Privacidade descreve como <strong>J. Renan M. S.</strong> (CNPJ 54.730.192/0001-10), atuando como Licenciado Autorizado da iGreen Seguros, coleta, usa, compartilha e protege as informações pessoais de acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">2. Dados Coletados</h2>
              <p>Coletamos as informações estritamente necessárias para a prestação dos nossos serviços de cotação e intermediação de seguro auto. Isso pode incluir:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Dados de Identificação:</strong> Nome completo, CPF, e-mail e telefone de contato.</li>
                <li><strong>Dados do Veículo:</strong> Placa, marca, modelo, ano de fabricação e chassi.</li>
                <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas e tempo de permanência no site (via cookies essenciais).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">3. Finalidade do Uso dos Dados</h2>
              <p>Os dados coletados são utilizados exclusivamente para as seguintes finalidades:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Realizar cotações precisas de seguro auto e proteções veiculares.</li>
                <li>Viabilizar a contratação e emissão de apólices junto à BP Seguradora S.A.</li>
                <li>Entrar em contato para atendimento, suporte e envio de propostas solicitadas.</li>
                <li>Cumprir obrigações legais e regulatórias da SUSEP.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">4. Compartilhamento de Dados</h2>
              <p>
                Como atuamos como Licenciados Autorizados, suas informações são compartilhadas de forma segura com a <strong>iGreen Seguros</strong> e a <strong>BP Seguradora S.A.</strong> (CNPJ 50.180.527/0001-13) exclusivamente para fins de precificação, análise de risco, emissão de apólice e prestação dos serviços de assistência 24h. 
                <br /><br />
                Nós <strong>nunca vendemos, alugamos ou comercializamos</strong> seus dados pessoais para terceiros não relacionados à prestação do serviço contratado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">5. Segurança das Informações</h2>
              <p>
                Implementamos medidas técnicas e organizacionais rigorosas para proteger seus dados pessoais contra acessos não autorizados, perda, destruição ou alteração indevida. O tráfego de dados neste site é protegido por criptografia de ponta a ponta (SSL/TLS).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">6. Seus Direitos (LGPD)</h2>
              <p>Você tem o direito de solicitar a qualquer momento:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>A confirmação da existência de tratamento de dados;</li>
                <li>O acesso aos seus dados;</li>
                <li>A correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>A anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>A revogação do consentimento (quando aplicável).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">7. Contato para Privacidade</h2>
              <p>
                Se você tiver dúvidas sobre esta Política de Privacidade ou desejar exercer seus direitos sob a LGPD, entre em contato através do nosso canal de atendimento: <strong>+55 21 98445-8464</strong>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
