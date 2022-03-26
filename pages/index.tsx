import Questao from "../components/Questao";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";

export default function Home() {
  const questaoTeste = new QuestaoModel(1, "What's color of ocean?", [
    RespostaModel.errada("Green"),
    RespostaModel.errada("Red"),
    RespostaModel.errada("black"),
    RespostaModel.certa("Grêmio"),
  ]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Questao valor={questaoTeste} />
    </div>
  );
}
