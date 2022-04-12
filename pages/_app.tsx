import type { AppProps } from 'next/app';
import { ThemeProvider } from 'degen';
import { HoneyProvider, AnchorProvider } from '@honey-defi/sdk';
import 'degen/styles';
import { WalletKitProvider } from '@gokiprotocol/walletkit';
import '../styles/globals.css';
import { Network } from '@saberhq/solana-contrib';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PartialNetworkConfigMap } from "@saberhq/use-solana/src/utils/useConnectionInternal";
import { useConnectedWallet, useConnection, WalletAdapter } from '@saberhq/use-solana';
import React, { FC, ReactNode, useEffect, useState } from "react";
import SecPopup from 'components/SecPopup';

const network = process.env.NETWORK as Network;

const networkConfiguration = () => {
  if (process.env.NETWORK_CONFIGURATION) {
    return process.env.NETWORK_CONFIGURATION as PartialNetworkConfigMap;
  } else {
    return undefined;
  }
};

const OnChainProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const wallet = useConnectedWallet();
  const connection = useConnection();
  const network = 'devnet';

  return (
    <AnchorProvider wallet={wallet} connection={connection} network={network}>
     <HoneyProvider wallet={wallet}> 
        {children}
      </HoneyProvider>
    </AnchorProvider>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const [showPopup, setShowPopup] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const cautionAgreed = localStorage.getItem('caution-agreed');
    setShowPopup(cautionAgreed === 'true' ? false : true);
    setShouldRender(true);
  }, []);

  if (!shouldRender) return null;

  return (
    <ThemeProvider defaultMode="dark" defaultAccent="red">
      <WalletKitProvider
        defaultNetwork={network}
        app={{
          name: 'Honey Finance'
        }}
        networkConfigs={networkConfiguration()}
      >
        {showPopup ? (
          <SecPopup setShowPopup={setShowPopup} />
        ) : (
          <>
            {/* {children} */}
            <OnChainProvider>
              <Component {...pageProps} />
              <ToastContainer theme="dark" position="bottom-right" />
            </OnChainProvider>
          </>
        )

        }
      </WalletKitProvider>
    </ThemeProvider>
  );
}

export default MyApp;
