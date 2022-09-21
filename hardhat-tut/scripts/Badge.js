/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-19 10:14:19
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-19 10:17:11
 * @FilePath: \hardhat-tut\scripts\Badge.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const BadgeTest = async () =>{
    const address = '0x0aeED7F20dCe05c32aDd3bF28C57280C57916298 ';
    const token721 = await ethers.getContractAt("BadgeToken", address);

    const accounts = await hre.ethers.getSigners();
    owner = accounts[0].address;
    toAddress = accounts[1].address;

    await token721.symbol()
}

BadgeTest()