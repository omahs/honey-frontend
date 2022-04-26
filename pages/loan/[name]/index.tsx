import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { Box, Stack, Button, IconChevronLeft, Text } from 'degen';
import Layout from '../../../components/Layout/Layout';
import LoanNFTsContainer from 'components/LoanNFTsContainer/LoanNFTsContainer';
import BorrowNFTsModule from 'components/BorrowNFTsModule/BorrowNFTsModule';
import useFetchNFTByUser from '../../../hooks/useNFTV2';
import { useConnection, useConnectedWallet } from '@saberhq/use-solana';
import { useBorrowPositions } from '@honey-finance/sdk';
import ConfigureSDK from '../../../helpers/config';
import Link from 'next/link';
import * as styles from '../../../styles/name.css';

const marketNFTs = [
  {
    name: 'SMB #2721',
    image:'/nfts/2721.png',
    borrowApy: '4.2%',
    estValue: '$25,800',
    assetsBorrowed: 0,
    netBorrowBalance: 0,
    key: 1
  },
  {
    name: 'SMB #273',
    image:'/nfts/273.png',
    borrowApy: '4.2%',
    estValue: '$23,500',
    assetsBorrowed: 0,
    netBorrowBalance: 0,
    key: 2
  },
  {
    name: 'SMB #1912',
    image:'/nfts/1912.png',
    borrowApy: '4.2%',
    estValue: '$55,000',
    assetsBorrowed: 0,
    netBorrowBalance: 0,
    key: 3
  },
  {
    name: 'SMB #2738',
    image:'/nfts/2738.png',
    borrowApy: '4.2%',
    estValue: '$33,300',
    assetsBorrowed: 0,
    netBorrowBalance: 0,
    key: 4
  },
  {
    name: 'SMB #3956',
    image:'/nfts/3956.png',
    borrowApy: '4.2%',
    estValue: '$39,500',
    assetsBorrowed: 0,
    netBorrowBalance: 0,
    key: 5
  }
]

const Loan: NextPage = (props) => {
  /**
   * @description loads sdk config object
   * @params none
   * @returns connection | wallet | honeyID | marketID
  */
  const sdkConfig = ConfigureSDK()
  
  /**
   * @description wip testing with fetching nft hook - for now no nfts in wallet
   * @params wallet
   * @returns array of nfts held by user in wallet
  */
  const wallet = useConnectedWallet();
  const availableNFTs = useFetchNFTByUser(wallet)

  /**
   * @description calls upon useBorrowPositions
   * @params connection && wallet && HONEY_PROGRAM_ID
   * @returns loading state | NFTs posted as collateral | loan positions | error
  */
  const { loading, collateralNFTPositions, loanPositions, error } = useBorrowPositions(sdkConfig.saberHqConnection, sdkConfig.sdkWallet!, sdkConfig.honeyId, sdkConfig.marketID);

  /**
   * @TODO when loading state is true show loader in NFTs block
  */
  useEffect(() => {
    console.log("collateral nft positions ", collateralNFTPositions);
    console.log("loan positions: ", loanPositions);
    console.log('availableNFTs', availableNFTs)
    console.log('loading', loading)
  }, [collateralNFTPositions, loanPositions, availableNFTs, loading])

  const [selectedId, setSelectedId] = useState(1);

  function selectNFT(key: number) {
    setSelectedId(key);
  };

  return (
    <Layout>
      <Box marginY="4">
        <Stack
          direction="horizontal"
          justify="space-between"
          wrap
          align="center"
        > 
          <Box display="flex" alignSelf="center" justifySelf="center">
            <Link href="/loan" passHref>
              <Button
                size="small"
                variant="transparent"
                rel="noreferrer"
                prefix={<IconChevronLeft />}
              >
                Pools
              </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
      <Box display="flex" height="full" className={styles.loanCardsContainer}>
        <LoanNFTsContainer
          // title="Open positions"
          selectedId={selectedId}
          onSelectNFT={selectNFT}
          buttons={[
            {
              title: 'Open position'
            },
            {
              title: 'Withdraw NFT',
              // onClick: () => { executeWithdraw() }
            },
            {
              title: 'New position',
            },
            {
              title: 'Deposit NFT'
              // onClick: () => { executeDepositNFT() }
            }
          ]}
          openPositions={collateralNFTPositions}
          NFTs={availableNFTs}
        />
        <BorrowNFTsModule NFT={marketNFTs.find(
          (NFT) => NFT.key === selectedId) || marketNFTs[0]} />
      </Box>
    </Layout>
  );
};

export default Loan;
