export function getRandom (array, cantidad) {
  const copiaArray = [...array]
  const objetosAleatorios = []

  for (let i = 0; i < cantidad; i++) {
    const indiceAleatorio = Math.floor(Math.random() * copiaArray.length)
    const objetoAleatorio = copiaArray.splice(indiceAleatorio, 1)[0]
    objetosAleatorios.push(objetoAleatorio)
  }

  return objetosAleatorios
}
