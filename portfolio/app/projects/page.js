import ProjectCard from '@/components/project-card';

const ProjectPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="px-20 mt-10 mb-6 grid grid-cols-1 justify-center text-center w-full space-y-8 max-w-4xl">
        <ProjectCard
          title="LOSTBOY Dashboard"
          description="A personal dashboard that integrates web3auth and sign-in with Ethereum(SIWE), enabling users to view all their Lostboy digital assets from various collections within a single wallet. It also provides specialized features for specific owned collections."
          imgSrc="/dashboard.png"
          githubLink="https://github.com/youssefojeil/thirdweb-auth/tree/main"
          websiteLink="https://dashboard.lostboy.io/"
        />

        <ProjectCard
          title="LOSTBOY ArtistXP"
          description="The ArtistXP is a front-end interface for an ERC-721 smart contract associated with an ongoing series of digital music collections. It allows users with a specific ERC-20 token to mint a unique music collectible. Both the front-end platform and the smart contract have checks in place to ensure the correct minting amount and to confirm that each wallet address can only mint one token."
          imgSrc="/artitsxp.png"
          githubLink="https://github.com/youssefojeil/nft-mint-using-ipfs"
          websiteLink="https://artist-xp.lostboy.io/"
          smartContractLink="https://etherscan.io/token/0x87a6bdf9efe8c6129e67fc1fc46e938ab4b997a4"
        />

        <ProjectCard
          title="Oyster"
          description="A MERN application using GraphQL to track live NFT data, allows users to signup and login to unlock extra functionalities such as creating projects to collaborate with other users, create a personalized NFT watchlist and connect their MetaMask wallet using RainbowKit, Wagmi & ethers to display their NFTs"
          imgSrc="/oyster-test.png"
          githubLink="https://github.com/youssefojeil/Oyster"
          websiteLink="https://immense-refuge-82677.herokuapp.com/"
        />
      </div>
    </div>
  );
};
export default ProjectPage;
