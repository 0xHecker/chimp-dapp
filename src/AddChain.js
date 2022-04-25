export const addChain = async function addNetwork() {
  let networkData;

  networkData = [
    {
      chainId: "0xfa",

      chainName: "Fantom Opera",

      rpcUrls: ["https://rpc.ftm.tools/"],

      nativeCurrency: {
        name: "Fantom",

        symbol: "FTM",

        decimals: 18,
      },
      blockExplorerUrls: ["https://ftmscan.com"],
    },
  ];

  return window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: networkData,
  });
};
