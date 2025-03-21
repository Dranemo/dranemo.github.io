import { Medal, Flag } from './ImageGetter';


import { RarityEnum, StatusEnum, YearEnum, LanguageEnum, ModeEnum } from './Enums';




const getRarityColor = (rarity) => {
    switch (rarity) {
        case RarityEnum.COMMON:
            switch (defaultMode) {
                case ModeEnum.LIGHT:
                    return '#BFBFBF'; // Gris clair pour contraster en mode clair
                case ModeEnum.DARK:
                    return '#737373'; // Même couleur que l'original en mode sombre
                default:
                    return 'black';
            }
        case RarityEnum.UNCOMMON:
            switch (defaultMode) {
                case ModeEnum.LIGHT:
                    return '#74C365'; // Vert plus clair pour un bon contraste
                case ModeEnum.DARK:
                    return '#4A7F32'; // Même couleur que l'original
                default:
                    return 'black';
            }
        case RarityEnum.RARE:
            switch (defaultMode) {
                case ModeEnum.LIGHT:
                    return '#3686FF'; // Bleu plus clair et vif pour un bon contraste
                case ModeEnum.DARK:
                    return '#004aad'; // Même couleur que l'original
                default:
                    return 'black';
            }
        case RarityEnum.EPIC:
            switch (defaultMode) {
                case ModeEnum.LIGHT:
                    return '#B480FF'; // Violet plus doux pour mode clair
                case ModeEnum.DARK:
                    return '#7A3D9B'; // Même couleur que l'original
                default:
                    return 'black';
            }
        case RarityEnum.LEGENDARY:
            switch (defaultMode) {
                case ModeEnum.LIGHT:
                    return '#B88D3C'; // Jaune plus doux mais toujours doré
                case ModeEnum.DARK:
                    return '#B77C1A'; // Même couleur que l'original
                default:
                    return 'black';
            }
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

const getMedalImageWhole = (rarity) => {
    switch (rarity) {
        case YearEnum.FIRST:
            return Medal.commonWhole;
        case YearEnum.SECOND:
            return Medal.uncommonWhole;
        case YearEnum.THIRD:
            return Medal.rareWhole;
        case YearEnum.FOURTH:
            return Medal.epicWhole;
        case YearEnum.FIFTH:
            return Medal.legendaryWhole;
        default:
            return null;
    }
};


// Définir la couleur en fonction du status
const getStatusColor = (status) => {
    switch (status) {
        case StatusEnum.IN_PROGRESS:
            switch (defaultMode) {
                case ModeEnum.LIGHT:
                    return '#FFC66D';
                case ModeEnum.DARK:
                    return '#9e582c';
                default:
                    return 'black';
            }
        case StatusEnum.COMPLETED:
            switch (defaultMode) {
                case ModeEnum.LIGHT:
                    return '#A0FF7A ';
                case ModeEnum.DARK:
                    return '#4A7F32 ';
                default:
                    return 'black';
            }
        case StatusEnum.NOT_STARTED:
            switch (defaultMode) {
                case ModeEnum.LIGHT:
                    return '#FF6B6B ';
                case ModeEnum.DARK:
                    return '#B22222  ';
                default:
                    return 'black';
            }
        default:
            return 'black';
    }
};

var defaultLanguage = LanguageEnum.FR;
const setDefaultLanguage = (language) => {
    defaultLanguage = language;
    document.documentElement.lang = language.html;
}

var defaultMode = ModeEnum.DARK;
const SetDefaultMode = (mode) => {
    defaultMode = mode;
}

var isMobile = false;
const setIsMobile = (value) => {
    isMobile = value;
}

const getFlagLanguage = (language) => {
    switch (language) {
        case LanguageEnum.FR:
            return Flag.fr;
        case LanguageEnum.EN:
            return Flag.en;
        default:
            return null;
    }
}



  export { getRarityColor, getMedalImage, getMedalImageWhole, getStatusColor, defaultLanguage, setDefaultLanguage, getFlagLanguage, defaultMode, SetDefaultMode, isMobile, setIsMobile };
