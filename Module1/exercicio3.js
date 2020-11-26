// Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
// e retorna um booleano true/false caso exista ou não.
// function temHabilidade(skills) {
//  // código aqui
// }
// var skills = ["Javascript", "ReactJS", "React Native"];
// temHabilidade(skills); // true ou false
// Dica: para verificar se um vetor contém um valor, utilize o método indexOf

const validaSkill = skills => {
  if (skills.indexOf("Javascript") !== -1) {
    return console.log("Tem a skill");
  } else {
    console.log("Não tem a skill");
  }
};
var skills = ["Boostrap", "React", "CSS", "HTML"];
validaSkill(skills);
validaSkill([...skills, "Javascript"]);