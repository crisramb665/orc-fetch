const { expect } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Fetch prices from blockchain itself", () => {
    const deployContractFixture = async () => {
        const orcFetching = await ethers.getContractFactory("ORCFetching");
        const [owner] = await ethers.getSigners();

        hardhatOrc = await orcFetching.deploy();
        await hardhatOrc.deployed();

        return { orcFetching, owner, hardhatOrc };
    }

    describe("Deployment", () => {
        it("Should show the input prices", async () => {
            const { hardhatOrc } = await loadFixture(deployContractFixture);
            const fetchingResult = await hardhatOrc.fetchPricesBasic();
            expect(fetchingResult).to.be.a("array");
        });
    });
});