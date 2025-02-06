import { Medal } from './ImageGetter';


import { RarityEnum, StatusEnum, YearEnum } from './Enums';




const getRarityColor = (rarity) => {
    switch (rarity) {
        case RarityEnum.COMMON:
            return '#737373';
        case RarityEnum.UNCOMMON:
            return '#4A7F32 ';
        case RarityEnum.RARE:
            return '#004aad';
        case RarityEnum.EPIC:
            return '#8c52ff';
        case RarityEnum.LEGENDARY:
            return '#805D09 '; 
        default:
            return 'black';
    }
  };


  const getMedalImage = (rarity) => {
    switch (rarity) {
        case YearEnum.FIRST:
            return Medal.common;
        case YearEnum.SECOND:
            return Medal.uncommon;
        case YearEnum.THIRD:
            return Medal.rare;
        case YearEnum.FOURTH:
            return Medal.epic;
        case YearEnum.FIFTH:
            return Medal.legendary;
        default:
            return null;
    }
};


// Définir la couleur en fonction du status
const getStatusColor = (status) => {
    switch (status) {
        case StatusEnum.IN_PROGRESS:
            return '#B22222  ';
        case StatusEnum.COMPLETED:
            return '#4A7F32 ';
        case StatusEnum.NOT_STARTED:
            return '#ff914d';
        default:
            return 'black';
    }
};


  export { getRarityColor, getMedalImage, getStatusColor };
