

export const minutesConverter = (milisegundos) => {
    const segundos = Math.floor((milisegundos / 1000) % 60);
    const minutos = Math.floor((milisegundos / (1000 * 60)) % 60);
    const horas = Math.floor(milisegundos / (1000 * 60 * 60));
  
    const segundosFormateados = segundos.toString().padStart(2, '0');
    const minutosFormateados = minutos.toString().padStart(2);
    const horasFormateadas = horas.toString().padStart(2);
  
    return `${horasFormateadas > 0 ? `${horasFormateadas}:`: ''}${minutosFormateados}:${segundosFormateados}`;
}