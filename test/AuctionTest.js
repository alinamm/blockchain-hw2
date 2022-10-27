const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("AucEngine", function () {
  let owner
  let seller
  let buyer
  let auct

  beforeEach(async function () {
    [owner, seller, buyer] = await ethers.getSigners()

    const AucEngine = await ethers.getContractFactory("Auction", owner)
    auct = await AucEngine.deploy()
    await auct.deployed()
  })

  it("sets owner", async function() {
    const currentOwner = await auct.owner()
    expect(currentOwner).to.eq(owner.address)
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
