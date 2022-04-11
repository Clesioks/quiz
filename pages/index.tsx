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

const BASE_RUL = "http//localhost:3000/api";

export default function Home() {
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock);

  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_RUL}/questionario`);
    const idsDasQuestoes = await resp.json();

    setIdsDasQuestoes(idsDasQuestoes);
  }
  async function carregarQuestoes(idQuestao: number) {
    const resp = await fetch(`${BASE_RUL}/questoes/${idQuestao}`);
    const json = await resp.json();
    console.log(json);
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Questionario
        questao={questao}
        ultima={true}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
      />
    </div>
  );
}
