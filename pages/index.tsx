import { useEffect, useState } from "react";
import Questionario from "../components/Questionario";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";

const questaoMock = new QuestaoModel(1, "What's color of ocean?", [
  RespostaModel.errada("Green"),
  RespostaModel.errada("Red"),
  RespostaModel.errada("black"),
  RespostaModel.certa("Grêmio"),
]);

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock);

  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const idsDasQuestoes = await resp.json();
    console.log(idsDasQuestoes);
    setIdsDasQuestoes(idsDasQuestoes);
  }

  async function carregarQuestoes(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao);
  }

  useEffect(() => {
    carregarIdsDasQuestoes();
  }, []);

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestoes(idsDasQuestoes[0]);
  }, [idsDasQuestoes]);

  function questaoRespondida(questao: QuestaoModel) {}

  function irPraProximoPasso() {}

  return (
    <Questionario
      questao={questao}
      ultima={true}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  );
}
