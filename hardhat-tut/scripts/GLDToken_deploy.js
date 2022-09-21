/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-16 15:11:29
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-19 09:49:20
 * @FilePath: \hardhat-tut\scripts\GLDToken_deploy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
  const hre = require("hardhat");

  async function main() {

    const GLDToken = await hre.ethers.getContractFactory("GLDToken");
    console.log('Deploying GLDToken...');
    const token = await GLDToken.deploy('10000000000000000000000');

    await token.deployed();
    console.log("GLDToken deployed to:", token.address);
  }

  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
  });