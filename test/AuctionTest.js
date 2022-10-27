const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Auction", function () {
  let owner
  let seller
  let buyer
  let auct

  beforeEach(async function () {
    [owner, seller, buyer] = await ethers.getSigners()

    const Auction = await ethers.getContractFactory("Auction", owner)
    auct = await Auction.deploy()
    await auct.deployed()
  })

  describe("createAuction", function () {
    it("creates auction correctly", async function() {

    })
  })

  describe("buy", function () {
    it("allows to buy", async function() {

    })
  })
})
