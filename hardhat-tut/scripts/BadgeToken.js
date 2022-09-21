/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-19 10:01:56
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-19 10:02:06
 * @FilePath: \hardhat-tut\scripts\BadgeToken.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const hre = require("hardhat");

    async function main() {

        const BadgeToken = await hre.ethers.getContractFactory("BadgeToken");
        console.log('Deploying BadgeToken ERC721 token...');
        const token = await BadgeToken.deploy('BadgeToken','Badge');

        await token.deployed();
        console.log("BadgeToken deployed to:", token.address);
    }

    main()
        .then(() => process.exit(0))
        .catch((error) => {
            console.error(error);
            process.exit(1);
    });