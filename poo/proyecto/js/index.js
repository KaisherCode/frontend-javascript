import Curso from "./clases/Curso.js"

const html = new Curso("HTML desde cero", "https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 10)
const css = new Curso("CSS desde cero","https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",8)


console.log(html)

const elem = document.getElementById("courses") | null

function mostrarCurso(curso) {
  const hijo = document.createElement("div") | null
  hijo.innerHTML = `
    <img src="${curso.getPoster()}" />
    <p>${curso.getNombre()}</p>
    <span>${curso.getClases()}</span>
`
elem.appendChild(hijo)
}

mostrarCurso(html)