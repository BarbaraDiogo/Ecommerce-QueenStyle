import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { GiPartyPopper } from "react-icons/gi";

const Troca = () => {
  const [formEnviado, setFormEnviado] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [outraMensagem, setOutraMensagem] = useState("");
  const [mostrarDescricao, setMostrarDescricao] = useState(true);

  const [email, setEmail] = useState("");
  const [produtoDescricao, setProdutoDescricao] = useState("");
  const [tempoUso, setTempoUso] = useState("");
  const [tipoTecido, setTipoTecido] = useState("");
  const [formaTroca, setFormaTroca] = useState("");
  const [arquivo, setArquivo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Scroll suave para o topo da página
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setFormEnviado(true);
    setMostrarFormulario(false); // Oculta o form após envio
    setOutraMensagem(
      "Seu produto está sendo avaliado e entraremos em contato através do e-mail fornecido em breve."
    );
  };

  const mostrarOcultarFormulario = () => {
    // Scroll suave para o topo da página
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMostrarFormulario(true);
    setMostrarDescricao(false);
  };

  return (
    <div className="max-w-container mx-auto px-4" id="form">
      <Breadcrumbs title="Troca" />
      {!mostrarFormulario && !formEnviado && mostrarDescricao && (
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold">
            Moda Sustentável: Troca Consciente de Peças
          </h1>
          <div className="mx-auto text-left">
            <p className="text-base w-full xl:w-[50%]">
              Bem-vindo à nossa iniciativa de moda sustentável onde o ato de
              trocar suas peças usadas torna-se uma experiência consciente e
              ambientalmente responsável. Acreditamos que cada peça de roupa tem
              uma história, e através da troca, você não apenas renova seu
              guarda-roupa, mas também contribui para a redução do desperdício
              têxtil.
            </p>
          </div>
          <h2 className="text-xl font-bold mt-4">Como Funciona:</h2>
          <p className="text-base w-full xl:w-[50%]">
            Ao escolher a opção de troca, você tem duas alternativas que
            refletem nosso compromisso com a sustentabilidade:
          </p>
          <ol className="ml-5">
            <li className="mb-2">
              <strong>1- Troca por Peças de Igual Tempo de Uso:</strong>
              <p className="text-base w-full xl:w-[50%]">
                Opte por trocar suas roupas usadas por outras de nosso catálogo,
                com tempo de uso equivalente. Dessa forma, prolongamos a vida
                útil das peças, promovendo um ciclo de moda mais duradouro.
              </p>
            </li>
            <li className="mb-2">
              <strong>2- Acumule Pontos para Desconto:</strong>
              <p className="text-base w-full xl:w-[50%]">
                Se preferir, acumule pontos com suas trocas, gerando cupons de
                desconto para serem utilizados em nossa loja. Essa opção não
                apenas valoriza suas escolhas conscientes, mas também incentiva
                a participação em práticas de consumo mais sustentáveis.
              </p>
            </li>
          </ol>
          <h2 className="text-xl font-bold mt-4">Variedade de Opções:</h2>
          <p className="text-base w-full xl:w-[50%]">
            Em nossa loja, oferecemos não apenas roupas novas, mas também uma
            seleção cuidadosa de peças usadas de alta qualidade. Cada item é
            inspecionado para garantir a satisfação do cliente, proporcionando
            uma experiência de compra única que une estilo, economia e
            sustentabilidade.
          </p>
          <p className="text-base w-full xl:w-[50%]">
            Ao escolher a troca consciente, você não só expressa seu estilo
            pessoal, mas também contribui para a construção de um futuro mais
            sustentável para a moda. Junte-se a nós nessa jornada de moda com
            propósito!
          </p>
          <div className="flex justify-center md-4 mb-5">
            <Link
              onClick={mostrarOcultarFormulario}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md duration-300"
            >
              Iniciar Troca
            </Link>
          </div>
        </div>
      )}

      {mostrarFormulario && (
        <div className="flex items-center justify-center">
          <div className="bg-gray-100 lgl:w-1/2 h-[600px] border border-gray-800 rounded-md flex items-center justify-center mb-5">
            <div className="lgl:w-[450px] flex items-center justify-center">
              <form>
                <p className="font-titleFont decoration-[1px] font-semibold text-xl mdl:text-2xl mb-4">
                  Troca de Produto
                </p>
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600 mt-4">
                    E-mail:
                  </p>
                  <input
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="E-mail para contato"
                    disabled={false}
                  />
                </div>
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600 mt-4">
                    Descreva o Produto:
                  </p>
                  <input
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="Camisa, jaqueta, calça..."
                    disabled={false}
                  />
                </div>
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600 mt-4">
                    Tempo de Uso:
                  </p>
                  <div className="flex gap-2">
                    <input
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="number"
                      name="numeroCartao"
                      placeholder="0"
                      disabled={false}
                    />
                    {/* Select */}
                    <select
                      className="w-32 h-8 text-base font-medium rounded-md border-[1px] border-gray-400 outline-none"
                      name="tempoDeUso"
                    >
                      <option value="meses">Meses</option>
                      <option value="anos">Anos</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-.5">
                  <label className="font-titleFont text-base font-semibold text-gray-600 mt-4">
                    Tipo de Tecido:
                  </label>
                  <select className="w-32 h-8 text-base font-medium rounded-md border-[1px] border-gray-400 outline-none">
                    <option value="">Selecione</option>
                    <option value="Algodão">Algodão</option>
                    <option value="Linho">Linho</option>
                    <option value="Lã">Lã</option>
                    <option value="Poliéster">Poliésters</option>
                    <option value="Cetin">Cetim</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600 mt-4">
                    Escolha a Forma de Troca:
                  </p>
                  <div className="flex gap-4">
                    {/* Radio para trocar por pontos */}
                    <label>
                      <input
                        type="radio"
                        name="formaDeTroca"
                        value="pontos"
                        className="mr-2"
                      />
                      Trocar por Pontos
                    </label>

                    {/* Radio para trocar por outra peça */}
                    <label>
                      <input
                        type="radio"
                        name="formaDeTroca"
                        value="outraPeca"
                        className="mr-2"
                      />
                      Trocar por Outra Peça
                    </label>
                  </div>
                  <div className="flex flex-col gap-.5">
                    <label className="font-titleFont text-base font-semibold text-gray-600 mt-4">
                      Fotos do Produto:
                      <input
                        type="file"
                        name="selecionarArquivo"
                        className="mt-2"
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="mt-4 bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                  >
                    Finalizar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {outraMensagem && (
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-green-500">
              <GiPartyPopper /> Parabéns pela iniciativa!
            </h1>
          </div>
          <div className="mx-auto text-left">
            <p className="text-xl">{outraMensagem}</p>
          </div>
          <div className="flex justify-center md-4 mb-5">
            <Link
              to="/"
              onClick={mostrarOcultarFormulario}
              className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded-md duration-300"
            >
              Voltar
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Troca;
