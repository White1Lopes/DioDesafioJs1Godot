let nome = "Luiz Gustavo";
let xp = 10001;

let rank = defineRank(xp);

console.log(`O player ${nome} tem o rank ${rank}`);


function defineRank(xp) {
    if (xp <= 1000) return "Fero";
    if (xp >= 1001 && xp <= 2000) return "Bronze";
    if (xp >= 2001 && xp <= 5000) return "Prata";
    if (xp >= 5001 && xp <= 7000) return "Ouro";
    if (xp >= 7001 && xp <= 8000) return "Platina";
    if (xp >= 8001 && xp <= 9000) return "Ascendente";
    if (xp >= 9001 && xp <= 10000) return "Imortal";
    if (xp >= 10001) return "Radiante";

    return "Sem rank";
}