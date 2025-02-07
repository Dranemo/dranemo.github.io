const Medal = {
    common: require('../../assets/images/medals/woodMedal.png'),
    uncommon: require('../../assets/images/medals/ironMedal.png'),
    rare: require('../../assets/images/medals/bronzeMedal.png'),
    epic: require('../../assets/images/medals/silverMedal.png'),
    legendary: require('../../assets/images/medals/goldMedal.png'),

    commonWhole: require('../../assets/images/oldMedals/woodMedal.png'),
    uncommonWhole: require('../../assets/images/oldMedals/ironMedal.png'),
    rareWhole: require('../../assets/images/oldMedals/bronzeMedal.png'),
    epicWhole: require('../../assets/images/oldMedals/silverMedal.png'),
    legendaryWhole: require('../../assets/images/oldMedals/goldMedal.png'),
}

const Arrow = {
    right: require('../../assets/images/ArrowRight.png'),
    left: require('../../assets/images/ArrowLeft.png'),
}


const BigImageGetter = {
    projectPortfolio: require('../../assets/images/bigImages/1024px-0698Amaura.png'),
    projectTheFinalExit: require('../../assets/images/bigImages/TheFinalExit.png'),
    projectPathfinding: require('../../assets/images/bigImages/pathfinding.png'),
    projectBranCastle: require('../../assets/images/bigImages/BranCastle.jpg'),
    projectBuildToScale: require('../../assets/images/bigImages/BuildToScale.png'),
    projectFoxLeague: require('../../assets/images/bigImages/FoxLeague.png'),
    projectPokemonASCII: require('../../assets/images/bigImages/PokemonASCII.png'),
    projectZoryaSisters: require('../../assets/images/bigImages/ZoryaSisters.png'),
    projectGameOfLifeC: require('../../assets/images/bigImages/GameOfLife.png'),
    projectVxVEngine: require('../../assets/images/bigImages/VxVEngine.png'),
}

const SmallImageGetter = {
    projectVxVEngine: [
        {image: require('../../assets/images/smallImages/VxV/VxV_Sample.png'), alt: 'VxV Engine Sample'},
    ],
    projectPokemonASCII : [
        {image: require('../../assets/images/smallImages/PokemonASCII/Chen.png'), alt: 'Oak'},
        {image: require('../../assets/images/smallImages/PokemonASCII/BourgPalette.png'), alt: 'Palette Bourg'},
        {image: require('../../assets/images/smallImages/PokemonASCII/Stats.png'), alt: 'Stats'},
        {image: require('../../assets/images/smallImages/PokemonASCII/Fight.png'), alt: 'Fight'},
    ],
}



export { Medal, Arrow, BigImageGetter, SmallImageGetter };
