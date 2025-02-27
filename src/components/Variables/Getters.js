import { Medal } from './ImageGetter';


import { RarityEnum, StatusEnum, YearEnum, LanguageEnum } from './Enums';




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
            return '#FFB800 '; 
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
            return '#9e582c';
        default:
            return 'black';
    }
};

var defaultLanguage = LanguageEnum.FR;
const setDefaultLanguage = (language) => {
    defaultLanguage = language;
    document.documentElement.lang = language.html;
}



  export { getRarityColor, getMedalImage, getStatusColor, defaultLanguage, setDefaultLanguage };
