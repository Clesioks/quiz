import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Como se diz em inglês "Entendi"?', [
        RespostaModel.errada('get all')
        RespostaModel.errada('ok')
        RespostaModel.errada('lets go')
        RespostaModel.certa('Got it')        
    ]),
        new QuestaoModel(306, 'Como se diz em inglês "Carro"?', [
        RespostaModel.errada('bike')
        RespostaModel.errada('mobile')
        RespostaModel.errada('motocycle')
        RespostaModel.certa('Car')        
    ]),
]

export default questoes