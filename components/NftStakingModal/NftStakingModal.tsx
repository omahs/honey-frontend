import { Box, Button, Input, Stack, Text, Tag } from 'degen';
import * as styles from './NftStakingModal.css';
import useGemFarm from 'hooks/useGemFarm';

import { useState } from 'react';
import FarmNFTsContainer from 'components/FarmNFTsContainer/FarmNFTsContainer';

const NftStakingModal = () => {
  const [vestingPeriod, setVestingPeriod] = useState<number>(12);
  const {
    onWalletNFTSelect,
    onWalletNFTSelectAll,
    onWalletNFTUnselect,
    onStakedNFTSelect,
    onStakedNFTSelectAll,
    onStakedNFTUnselect,
    initializeFarmerAcc,
    handleStakeButtonClick,
    handleUnstakeButtonClick,
    isFetching,
    stakedNFTsInFarm,
    walletNFTsInFarm,
    farmerAcc,
    selectedVaultNFTs,
    selectedWalletNFTs,
    farmerState,
    farmerVaultLocked,
    rewardTokenName,
    lockVault
  } = useGemFarm();

  const [txLoading, setTxLoading] = useState({
    value: false,
    txName: ''
  });
  const withTxLoading = async (tx: Function, txName: string) => {
    try {
      setTxLoading({ value: true, txName });
      await tx();
      setTxLoading({ value: false, txName: '' });
    } catch (error) {
      console.log(error);
      setTxLoading({ value: false, txName: '' });
    }
  };

  return (
    <>
      <Box width="112">
        <Box borderBottomWidth="0.375" paddingX="6" paddingY="4">
          <Text
            variant="large"
            color="textPrimary"
            weight="bold"
            align="center"
          >
            Stake Honey Genesis Bee
          </Text>
        </Box>
        <Box padding="6">
          <Stack space="6">
            <Text align="center" weight="semiBold">
              Deposit HONEY and receive veHONEY
            </Text>
            <Stack space="2">
        
              <Stack direction="horizontal" justify="space-between">
                <Text variant="small" color="textSecondary">
                  Vesting period
                </Text>
                <Box>
                  <select
                    name="vestingPeriod"
                    value={vestingPeriod}
                    className={styles.select}
                    onChange={event =>
                      setVestingPeriod(Number(event.target.value))
                    }
                  >
                    <option value="1">1 month</option>
                    <option value="3">3 months</option>
                    <option value="6">6 months</option>
                    <option value="12">1 year</option>
                    <option value="48">4 years</option>
                  </select>
                </Box>
              </Stack>
            </Stack>
            {/* <Input
              type="number"
              label="Amount"
              // labelSecondary={<Tag>{honeyAmoun/t} pHONEY max</Tag>}
              // max={honeyAmount || ''}
              min={0}
              // value={amount || ''}
              // disabled={!honeyAmount}
              hideLabel
              units="HONEY"
              placeholder="0"
              // onChange={handleOnChange}
            /> */}
            <FarmNFTsContainer
              isFetching={isFetching}
              title="Select your NFTs"
              buttons={[
                {
                  title: `Select All`,
                  disabled: !farmerAcc
                    ? false
                    : Object.values(walletNFTsInFarm).length > 0
                    ? false
                    : true,
                  onClick: () => onWalletNFTSelectAll()
                },
                {
                  title: !farmerAcc
                    ? 'Initialize'
                    : `Stake ( ${selectedWalletNFTs.length} )`,
                  disabled: !farmerAcc
                    ? false
                    : selectedWalletNFTs.length
                    ? false
                    : true,
                  loading: txLoading.value && txLoading.txName === 'deposit',
                  onClick: !farmerAcc
                    ? () => withTxLoading(initializeFarmerAcc, 'deposit')
                    : () => withTxLoading(handleStakeButtonClick, 'deposit')
                }
              ]}
              NFTs={Object.values(walletNFTsInFarm)}
              selectedNFTs={selectedWalletNFTs}
              onNFTSelect={onWalletNFTSelect}
              onNFTUnselect={onWalletNFTUnselect}
            />

            <Button
            // onClick={handleLock}
            // disabled={amount ? false : true}
            // width="full"
            >
              Stake HGB
            </Button>
            <Button disabled={true} width="full">
              Unlock
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default NftStakingModal;
function walletNFTsInFarm(walletNFTsInFarm: any) {
  throw new Error('Function not implemented.');
}

function onWalletNFTSelectAll(): void {
  throw new Error('Function not implemented.');
}
