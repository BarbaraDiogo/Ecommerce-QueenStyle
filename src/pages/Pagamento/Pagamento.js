import React, { useState } from "react";
import { IoHourglassOutline } from "react-icons/io5";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { paymentCard } from "../../assets/images";


const Pagamento = () => {
  const [mensagemPagamento, setMensagemPagamento] = useState("");
  const [mensagemCartao, setMensagemCartao] = useState("");
  const [outraMensagem, setOutraMensagem] = useState("");
  const [botaoAtivo, setBotaoAtivo] = useState(null);
  const [dadosCartao, setDadosCartao] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    endereco: "",
    numeroCartao: "",
    cvv: "",
    dataVencimento: "",
    numeroParcelas: 1,
  });

  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const handlePagamentoClick = (tipoPagamento) => {
    // Limpar os dados do formulário ao mudar o tipo de pagamento
    setDadosCartao({
      nome: "",
      cpf: "",
      numeroCartao: "",
      cvv: "",
      dataVencimento: "",
      numeroParcelas: 1,
    });

    // Atualizar as mensagens com base no tipo de pagamento escolhido
    if (tipoPagamento === "pix") {
      setMensagemPagamento("Aguardando pagamento via Pix.");
      setOutraMensagem("Enviamos em seu e-mail o Qrcode para efetuar o pagamento.");
    } else if (tipoPagamento === "cartao") {
      setMensagemCartao("Aguardando pagamento via Cartão de Crédito.");
      setOutraMensagem("");
      setMensagemPagamento("");
    } else if (tipoPagamento === "boleto") {
      setMensagemPagamento("Aguardando pagamento via Boleto.");
      setOutraMensagem("Enviamos em seu e-mail o boleto para efetuar o pagamento.");
    }

    // Atualizar o botão ativo
    setBotaoAtivo(tipoPagamento);
    setFormularioEnviado(false); // Reinicializar o estado de envio do formulário
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDadosCartao((prevDados) => ({
      ...prevDados,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário
    console.log("Dados do formulário de cartão de crédito:", dadosCartao);
    setFormularioEnviado(true); // Atualizar o estado para indicar que o formulário foi enviado
  };

  const scrollToTop = () => {
    // Scroll suave para o topo da página
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Pagamento" />
      <div className="pb-10">
        <h4 className="font-titleFont decoration-[1px] text-3xl mdl:text-4xl mb-4">
          Escolha o tipo de pagamento:
        </h4>
        <div className="w-full h-20 bg-[#F5F7F7] rounded-md flex items-center justify-center mt-5 mb-10">
          <button
            onClick={() => handlePagamentoClick("pix")}
            className={`mr-2 py-2 px-10 border ${
              botaoAtivo === "pix" ? "border-green-500 bg-green-500 text-white" : "border-gray-500"
            } text-black font-semibold uppercase mb-4 duration-300`}
          >
            Pix
          </button>
          <button
            onClick={() => handlePagamentoClick("cartao")}
            className={`mr-2 py-2 px-10 border ${
              botaoAtivo === "cartao" ? "border-blue-800 bg-blue-800 text-white" : "border-gray-500"
            } text-black font-semibold uppercase mb-4 duration-300`}
          >
            Cartão de Crédito
          </button>
          <button
            onClick={() => handlePagamentoClick("boleto")}
            className={`py-2 px-10 border ${
              botaoAtivo === "boleto" ? "border-purple-700 bg-purple-700 text-white" : "border-gray-500"
            } text-black font-semibold uppercase mb-4 duration-300`}
          >
            Boleto
          </button>
        </div>
        {/* Exibir o formulário se o tipo de pagamento for cartão */}
        {botaoAtivo === "cartao" && !formularioEnviado && (
          <div className="flex items-center justify-center">
            <div className="bg-gray-100 lgl:w-1/2 h-[600px] border border-gray-800 rounded-md flex items-center justify-center">
              <div className="lgl:w-[450px] flex items-center justify-center">
                <form onSubmit={handleFormSubmit}>
                  <p className="font-titleFont decoration-[1px] font-semibold text-xl mdl:text-2xl mb-4">
                    Informações do Cartão de Crédito
                  </p>
                  <div className="flex flex-col gap-3">
                    <img src={paymentCard} className="w-30 h-10 mb-2" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-.5">
                      <p className="font-titleFont text-base font-semibold text-gray-600">
                        Numero do Cartão
                      </p>
                      <input
                        onChange={handleInputChange}
                        value={dadosCartao.numeroCartao}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                        type="number"
                        name="numeroCartao"
                        maxLength="16"
                        placeholder="1234 1234 1234 1234"
                        disabled={false}
                      />
                    </div>
                    <div className="flex flex-col gap-.5">
                      <p className="font-titleFont text-base font-semibold text-gray-600">
                        Nome no Cartão
                      </p>
                      <input
                        onChange={handleInputChange}
                        value={dadosCartao.nome}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                        type="text"
                        name="nome"
                        placeholder="Digite seu nome"
                      />
                    </div>
                    <div className="flex flex-col gap-.5">
                      <p className="font-titleFont text-base font-semibold text-gray-600">
                        Data de Vencimento
                      </p>
                      <input
                        onChange={handleInputChange}
                        value={dadosCartao.dataVencimento}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                        type="month"
                        name="dataVencimento"
                        placeholder="MM/AA"
                        min={new Date().toISOString().split("T")[0]} 
                      />
                    </div>
                    <div className="flex flex-col gap-.5">
                      <p className="font-titleFont text-base font-semibold text-gray-600">
                        CVV
                      </p>
                      <input
                        onChange={handleInputChange}
                        value={dadosCartao.cvv}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                        type="number"
                        name="cvv"
                        placeholder="***"
                        maxLength="3"
                      />
                    </div>
                    <div className="flex flex-col gap-.5">
                      <p className="font-titleFont text-base font-semibold text-gray-600">
                        CPF
                      </p>
                      <input
                        onChange={handleInputChange}
                        value={dadosCartao.cpf}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                        type="number"
                        name="cpf"
                        id="cpf"
                        maxLength="11"
                        placeholder="000.000.000-00"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formularioEnviado}
                      onClick={() => {
                        scrollToTop(); // Chamando a função de scroll ao clicar no botão "Finalizar"
                      }}
                      className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                    >
                      Finalizar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        {formularioEnviado && (
          <div className="flex items-center">
            <span className="text-sm mr-2"><IoHourglassOutline /></span>
            <p className="font-bold text-xl">{mensagemCartao}</p>
          </div>
        )}
        {/* Exibir a mensagem de aguardando pagamento */}
        {mensagemPagamento && (
          <div className="flex items-center">
            <span className="text-sm mr-2"><IoHourglassOutline /></span>
            <p className="font-bold text-xl">{mensagemPagamento}</p>
          </div>
        )}
        {outraMensagem && (
          <div className="m-2 flex items-center">
            <span className="text-sm mr-2"></span>
            <p className="text-xl">{outraMensagem}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagamento;
