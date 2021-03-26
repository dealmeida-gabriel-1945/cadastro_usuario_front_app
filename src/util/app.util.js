export const AppUtil = {
    FORMATA_DATA: (toFormat) => ((toFormat) ? `${(toFormat.getDate() < 10) ? '0':''}${toFormat.getDate()}/${(toFormat.getMonth() < 9) ? '0':''}${toFormat.getMonth()+1}/${toFormat.getFullYear()}` : ''),
    NUMBER_OF_PAGES: (qtdTotal, qtdPorPag) => {
        let div = qtdTotal/qtdPorPag;
        if((div < 1) || (div == 1)){
            return 1
        }else{
            return Math.floor(div) + 1;
        }
    },
};
