const Auction = require("../models/Auction");

const  auctionController= {
    createauction: async(req, res) => {
        try{
            const image = req.file.path
            const owner = req.params.user
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
                owner: owner,
                ImgURL: image
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
    },

    allAuction: async(req, res) => {
        try{
            const getallAuction = await Auction.find()

            return res.json({ Result: getallAuction })
        }
        catch(err){
            console.log(err)
        }
    },

    getbyidAuction: async(req, res) => {
        try{
            const AuctionID = req.params.id

            const getAuctionID = await Auction.findById(AuctionID)

            return res.json({ Result: getAuctionID })
        }
        catch(err){
            console.log(err)
        }
    },

    updateAuction: async(req, res) => {
        try{
            const AuctionID = req.params.id
            const {
                description,
                endDate,
            } = req.body

            const checkAuction = await Auction.findOne({_id: AuctionID})

            if(checkAuction){
                const Auctionupdate = await Auction.findOneAndUpdate(
                    { _id: AuctionID }, 
                    {
                        description: description,
                        endDate: endDate
                    }, 
                    { new: true } 
                )

                if(Auctionupdate){
                    return res.json({ Status: "Success"})
                }
                else{
                    return res.json({ Error: "Internal Server Error White Updating Auction"})
                }
            }
            else{
                return res.json({ Error: "Error Finding Auction" })
            }
        }
        catch(err){
            console.log(err)
        }
    },

    auctionupdateStatus: async(req, res) => {
        try{
            const AuctionID = req.params.id
            const {
                status
            } = req.body

            const checkAuction = await Auction.findOne({_id: AuctionID})

            if(checkAuction){
                const StatusUpdate = await Auction.findOneAndUpdate(
                    { _id: AuctionID }, 
                    { status: status }, 
                    { new: true } 
                )

                if(StatusUpdate){
                    return res.json({ Status: "Success"})
                }
                else{
                    return res.json({ Error: 'Interal Server Error while update stauts'})
                }
            }
        }
        catch(err){
            console.log(err)
        }
    }

};

module.exports = auctionController;