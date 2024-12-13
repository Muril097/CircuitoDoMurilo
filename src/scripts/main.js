AOS.init();

const dataDoEvento = new Date("jul 20, 2025 06:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    // dia
    const diasAteOEvento = Math.floor(distanciAteOEvento / diaEmMs);

    // horas
    const horasAteOEvento = Math.floor((distanciAteOEvento % diaEmMs) / horasEmMs);

    // minutos
    const minutosAteOEvento = Math.floor((distanciAteOEvento % horasEmMs) / minutosEmMs);

    // segundos
    const segundosAteOEvento = Math.floor((distanciAteOEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    // expirado
    if (diasAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);