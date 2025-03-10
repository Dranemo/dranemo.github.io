const Medal = {
    common: require('../../assets/images/medalBigHole/woodMedal.png'),
    uncommon: require('../../assets/images/medalBigHole/ironMedal.png'),
    rare: require('../../assets/images/medalBigHole/bronzeMedal.png'),
    epic: require('../../assets/images/medalBigHole/silverMedal.png'),
    legendary: require('../../assets/images/medalBigHole/goldMedal.png'),

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

const Flag = {
    fr: require('../../assets/images/flags/fr.png'),
    en: require('../../assets/images/flags/en.png'),
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
    projectGalacticPolice: require('../../assets/images/bigImages/GalacticPolice.png'),
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
    projectGalacticPolice: [
        {image: require('../../assets/images/smallImages/GalacticPolice/Lvl1.png'), alt: 'Lvl1'},
        {image: require('../../assets/images/smallImages/GalacticPolice/Lvl2.png'), alt: 'Lvl2'},
        {image: require('../../assets/images/smallImages/GalacticPolice/Lvl3.png'), alt: 'Lvl3'},

    ],
    projectZoryaSisters: [
        {image: require('../../assets/images/smallImages/ZoryaSisters/MainMenu.png'), alt: 'Main Menu Zorya Sisters'},
        {image: require('../../assets/images/smallImages/ZoryaSisters/Power.png'), alt: 'Power Select Zorya Sisters'},
        {image: require('../../assets/images/smallImages/ZoryaSisters/Lvl1.png'), alt: 'Level Zorya Sisters'},
        {image: require('../../assets/images/smallImages/ZoryaSisters/Lvl2.png'), alt: 'Level Zorya Sisters'},
    ],
    projectPathfinding: [
        {image: require('../../assets/images/smallImages/PathfindingSim/Dijkstra.png'), alt: 'Dijkstra'},
        {image: require('../../assets/images/smallImages/PathfindingSim/Greedy.png'), alt: 'Greedy'},
    ],
    projectGameOfLifeC: [
        {image: require('../../assets/images/smallImages/GameOfLife/1.png'), alt: 'GameOfLife'},
        {image: require('../../assets/images/smallImages/GameOfLife/2.png'), alt: 'GameOfLife'},
    ],
}



export { Medal, Arrow, Flag, BigImageGetter, SmallImageGetter };
