const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  startingPrice: {
    type: Number,
    required: true,
  },
  currentPrice: {
    type: Number,
    required: true,
  },
  bids: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Reference to a user model (make sure you have a User model)
        required: true,
      },
      bidAmount: {
        type: Number,
        required: true,
      },
      bidDate: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  status: {
    type: String,
    enum: ['open', 'closed', 'canceled'],
    default: 'open',
  },
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to a user model
  },
}, {
  timestamps: true,
});

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;
