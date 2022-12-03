function formatDateFromApi(dateStr){
    console.log(dateStr);
    const newDate = new Date(dateStr);
    if (!(newDate instanceof Date)) {
        return null;
    }
    console.log(newDate);
    const ano = newDate.getFullYear();
    const mes =  newDate.getMonth() + 1;
    const dia = newDate.getDate();
    console.log(ano, mes, dia);
    const frmDate = ano + "-" + (mes < 10 ? "0" + mes : mes) + "-" + (dia < 10 ? "0" + dia : dia);
    console.log(frmDate);
    return frmDate;
}

function formatDateBR(dateStr){
    const newDate = new Date(dateStr);
    if (!(newDate instanceof Date)) {
        return null;
    }
    console.log(newDate);
    // const ano = newDate.getFullYear();
    // const mes =  newDate.getMonth() + 1;
    // const dia = newDate.getDate();
    // console.log(ano, mes, dia);
    // const frmDate = (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano;
    const frmDate = newDate.toLocaleDateString('pt-BR')
    console.log(frmDate);
    return frmDate;
}

export { formatDateFromApi, formatDateBR }