import LoanNFTCard from '../LoanNftCard';
import { Box, Button, Text } from 'degen';
import Link from 'next/link';
import React from 'react';
import * as styles from './LoanHeaderComponent.css';

interface LoanHeaderComponentProps {
  handleCreateMarket: () => void;
  openPositions: number;
}

const LoanHeaderComponent = (props: LoanHeaderComponentProps) => {
  const { handleCreateMarket, openPositions } = props;

  return (
    <Box className={styles.headerWrapper}>
      <Box>
        <Text>
          Health Factor <span>Healthy</span>
        </Text>
        <Text weight="medium" color="textSecondary">
          100%
        </Text>
      </Box>
      <Box>
        <Text>Borrow Balance</Text>
        <Text weight="medium" color="textSecondary">
          0$
        </Text>
      </Box>
      <Box>
        <Text>Supply Balance</Text>
        <Text weight="medium" color="textSecondary">
          0$
        </Text>
      </Box>
      <Box>
        <Text>Your positions</Text>
        <Text weight="medium" color="textSecondary">
          {openPositions}
        </Text>
      </Box>
      <Button size="small" onClick={handleCreateMarket}>
        Create market
      </Button>

      <Button size="small">
        <a href="https://cofre.so/#/" target="_blank" rel="noreferrer">Mint Cofre NFT</a>
      </Button>
    </Box>
  );
};

export default LoanHeaderComponent;
