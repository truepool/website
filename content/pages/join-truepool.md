---
title: "Join Truepool"
draft: false
slug: join-truepool
aliases:
    - /pages/
---

# Why Truepool?

{{< robot align="right" variant="1" >}}

Truepool is unique in that it is one of the only pools run by a team of experienced Crypto and Open Source storage experts, that actively contributes back to Open Source development.

10% of all XCH operator fees are donated back to the [TrueNAS project](http://www.truenas.com "TrueNAS project"), to support its continuted growth and success as the world's #1 software defined storage system.

Following it's open-source ethos, Truepool strives to run and manage itself in the best spirit of open source collaboration, by providing [plugins](https://github.com/truenas/charts/tree/master/charts/chia) and other [helpful resources](https://github.com/kmoore134/iocage-plugin-chia) to prospective Chia farmers running TrueNAS CORE and SCALE.

# How to join Truepool?

Connection Information:

| URL  | Network | Status |
| ------------ | ------------ | ------------ |
| http://pool.truepool.io:9002  | testnet  | LIVE |
| http://pool.truepool.io:9001 | mainnet | Coming soon! |

Joining Truepool is easy.

First, you will need to make sure your wallet has a small amount of Chia (Mojo) to join a pool. Mojo can be obtained daily from the official [Chia Faucet](https://faucet.chia.net/ "Chia Faucet") for mainnet, or the Chia [Testnet Faucet](http://chia-faucet.com/). With some Mojo in place, you can run the following from the command-line:

```bash
# chia plotnft create -u http://pool.truepool.io:9001
```

Confirm that the pool information shows up, and then enter "y" to continue.

Once confirmed, you can run ```# chia plotnft show``` to confirm your plotting address, which can be used to create new plots for use by Truepool.
