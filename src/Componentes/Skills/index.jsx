import Card from "../Card";

function Skills() {

const habilidade = [
  {
    titulo: "HTML",
    nivel: "Avançado"
  },
  {
    titulo: "React",
    nivel: "Básico"
  },
  {
    titulo: "JavaScript",
    nivel: "Pro"
  },
  {
    titulo: "Python",
    nivel: "Básico"
  }

]

  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <Card dataHabilidades={habilidade}/>
    </div>
  );
}

export default Skills;