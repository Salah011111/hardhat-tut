/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-19 10:05:29
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-19 10:05:39
 * @FilePath: \hardhat-tut\test\BadgeToken-test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// test/BadgeToken-test.js
const { expect } = require("chai");

describe("BadgeToken contract", function () {
    let BadgeToken;
    let token721;
    let _name='BadgeToken';
    let _symbol='Badge';
    let account1,otheraccounts;

    beforeEach(async function () {
        BadgeToken = await ethers.getContractFactory("BadgeToken");
    [owner, account1, ...otheraccounts] = await ethers.getSigners();

        token721 = await BadgeToken.deploy(_name,_symbol);
    });

    // You can nest describe calls to create subsections.
    describe("Deployment", function () {

        it("Should has the correct name and symbol ", async function () {
        expect(await token721.name()).to.equal(_name);
        expect(await token721.symbol()).to.equal(_symbol);
        });

        it("Should mint a token with token ID 1 & 2 to account1", async function () {
        const address1=account1.address;
        await token721.mintTo(address1);
        expect(await token721.ownerOf(1)).to.equal(address1);

        await token721.mintTo(address1);
        expect(await token721.ownerOf(2)).to.equal(address1);

        expect(await token721.balanceOf(address1)).to.equal(2);      
        });
    });
});