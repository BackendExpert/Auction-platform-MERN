const Auction = require("../models/Auction");

const  auctionController= {
    createauction: async(req, res) => {
        try{
            const {
                title,
                description, 
                startDate, 
                endDate, 
                startingPrice
            } = req.body

            const newauction = new Auction({
                title: title,
                description: description,
                startDate: startDate,
                endDate: endDate,
                startingPrice: startingPrice,
                currentPrice: startingPrice,
            })

            const resultAuction = newauction.save()

            if(resultAuction){
                return res.json({ Status: "Success"})
            }
            else{
                return res.json({ Error: "Error While Creating Auction"})
            }
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = auctionController;