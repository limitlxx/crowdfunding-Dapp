"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "../wagmi";
import { WagmiProvider, cookieToInitialState } from "wagmi";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";


const queryClient = new QueryClient();

type Props = {
    children: React.ReactNode;
    cookie?: string | null;
  };

export function Provider({ children, cookie }: Props) {
  const initialState = cookieToInitialState(config, cookie)
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#0E76FD",
            accentColorForeground: "white",
            borderRadius: "large",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          {children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}