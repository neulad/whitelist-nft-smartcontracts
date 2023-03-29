import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("CryptoDevs", {
    from: deployer,
    log: true,
    args: [process.env.METADATA_URL, process.env.WHITELIST_ADDRESS],
  });
};

export default func;
func.tags = ["all", "crypto-devs"];
