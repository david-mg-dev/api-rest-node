import familyData from '../data/db.json'

const listWithHierarchy = familyData.map(function () {
  return {
    Abuelos: familyData.filter(function (element) {
      return element.tipo_dispositivo === 3
    }),
    Padres: familyData.filter(function (element) {
      return element.tipo_dispositivo === 2
    }),
    Hijos: familyData.filter(function (element) {
      return element.tipo_dispositivo === 1
    })
  }
})

const getFamilia = (): object => listWithHierarchy[0]

export { getFamilia }
