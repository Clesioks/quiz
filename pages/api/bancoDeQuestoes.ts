import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(306, 'Como se diz em inglês "Entendi"?', [
    RespostaModel.errada("get all"),
    RespostaModel.errada("ok"),
    RespostaModel.errada("lets go"),
    RespostaModel.certa("Got it"),
  ]),
  new QuestaoModel(307, 'Como se diz em inglês "Carro"?', [
    RespostaModel.errada("bike"),
    RespostaModel.errada("mobile"),
    RespostaModel.errada("motocycle"),
    RespostaModel.certa("Car"),
  ]),
  new QuestaoModel(308, 'Como que significa a frase "I want to eat.', [
    RespostaModel.errada("Eu quero nadar."),
    RespostaModel.errada("Eu quero correr."),
    RespostaModel.errada("Eu preciso jogar."),
    RespostaModel.certa("Eu quero comer"),
  ]),
  new QuestaoModel(309, 'Como se diz em inglês "navio"?', [
    RespostaModel.errada("boat"),
    RespostaModel.errada("bike"),
    RespostaModel.errada("motocycle"),
    RespostaModel.certa("ship"),
  ]),
];

export default questoes;
