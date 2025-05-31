interface Course {
  name: string
  mode: string
}

interface Category {
  key: string
  label: string
  title: string
  courses: Course[]
}

export const categories: Category[] = [
  {
    key: "tecnologia",
    label: "TECNOLOGIA",
    title: "Tecnologia",
    courses: [
      { name: "Big Data Ecosystem", mode: "REMOTO • LIVE" },
      { name: "Creating Dashboards for BI", mode: "REMOTO • LIVE" },
      { name: "Big Data Science - Machine Learning & Data Mining", mode: "REMOTO • LIVE + MULTIMIDIA" },
      { name: "Storytelling", mode: "REMOTO • LIVE" }
    ]
  },
  {
    key: "inovacao",
    label: "INOVAÇÃO",
    title: "Inovação",
    courses: [
      { name: "UX", mode: "DIGITAL" },
      { name: "UX Writing", mode: "LIVE" },
      { name: "Storytelling para Negócios", mode: "LIVE" },
      { name: "Chatbots", mode: "LIVE" },
    ]
  },
  {
    key: "negocios",
    label: "NEGÓCIOS",
    title: "Negócios",
    courses: [
      { name: "Agile Culture", mode: "DIGITAL" },
      { name: "DPO Data Protection Officer", mode: "LIVE" },
      { name: "IT Business Partner", mode: "LIVE" },
      { name: "Perícia Forense Computacional", mode: "LIVE" },
    ]
  }
]