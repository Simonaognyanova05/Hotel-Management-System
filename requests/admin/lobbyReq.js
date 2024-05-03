const mongoose = require('mongoose');
const Lobby = require('../../models/Lobby');

const dbUrl = 'mongodb://localhost:27017/hotel_db';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function lobbyReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const {
        caffe1, descriptionCaffe1, imgCaffe1, caffe2, descriptionCaffe2, imgCaffe2, caffe3, descriptionCaffe3, imgCaffe3, cocktail1, descriptionCocktail1, imgCocktail1, cocktail2, descriptionCocktail2, imgCocktail2, cocktail3, descriptionCocktail3, imgCocktail3, whiskey, descriptionWhiskey, imgWhiskey, champagne, descriptionChampagne, imgChampagne, vodka, descriptionVodka, imgVodka, tequila, descriptionTequila, imgTequila, beer, descriptionBeer, imgBeer, hookah, descriptionHookah, imgHookah, sandwiches, descriptionSandwiches, imgSandwiches, sweets, descriptionSweets, imgSweets
    } = req.body;

    try {
        await Lobby.updateOne({
            $set: {
                caffe1, descriptionCaffe1, imgCaffe1, caffe2, descriptionCaffe2, imgCaffe2, caffe3, descriptionCaffe3, imgCaffe3, cocktail1, descriptionCocktail1, imgCocktail1, cocktail2, descriptionCocktail2, imgCocktail2, cocktail3, descriptionCocktail3, imgCocktail3, whiskey, descriptionWhiskey, imgWhiskey, champagne, descriptionChampagne, imgChampagne, vodka, descriptionVodka, imgVodka, tequila, descriptionTequila, imgTequila, beer, descriptionBeer, imgBeer, hookah, descriptionHookah, imgHookah, sandwiches, descriptionSandwiches, imgSandwiches, sweets, descriptionSweets, imgSweets
            }
        });
        res.redirect('/admin/lobby');

        // const double = new Lobby({
        //     caffe1, descriptionCaffe1, imgCaffe1, caffe2, descriptionCaffe2, imgCaffe2, caffe3, descriptionCaffe3, imgCaffe3, cocktail1, descriptionCocktail1, imgCocktail1, cocktail2, descriptionCocktail2, imgCocktail2, cocktail3, descriptionCocktail3, imgCocktail3, whiskey, descriptionWhiskey, imgWhiskey, champagne, descriptionChampagne, imgChampagne, vodka, descriptionVodka, imgVodka, tequila, descriptionTequila, imgTequila, beer, descriptionBeer, imgBeer, hookah, descriptionHookah, imgHookah, sandwiches, descriptionSandwiches, imgSandwiches, sweets, descriptionSweets, imgSweets
        // })
        // await double.save();
    } catch (e) {

    }
}
module.exports = { lobbyReq }