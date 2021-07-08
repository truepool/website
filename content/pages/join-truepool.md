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

25% of all XCH operator fees are donated back to the [TrueNAS project](http://www.truenas.com "TrueNAS project"), to support its continuted growth and success as the world's #1 software defined storage system.

Following it's open-source ethos, Truepool strives to run and manage itself in the best spirit of open source collaboration, by providing [docker images](https://www.truepool.io/kb/truepool-docker-image/) and other [helpful resources](https://github.com/kmoore134/iocage-plugin-chia) to prospective Chia farmers running TrueNAS CORE and SCALE.

# How to join Truepool?

TruePool can be joined now by using the connection instructions below on any official Chia client running version 1.2.0 and later.

As a further service to our community and TrueNAS users, we also publish a [TruePool docker image](https://www.truepool.io/kb/truepool-docker-image/), that includes not only the latest Chia farmer, but also tools such as MadMax Plotter, PlotMan and Farmr.net agents. 

### Connection Information

| URL  | Network | Status |
| ------------ | ------------ | ------------ |
| https://pool.truepool.io | mainnet | Online |

### Joining HOWTO

First, you will need to make sure your wallet has a small amount of Chia (Mojo) to join a pool. Mojo can be obtained daily from the official [Chia Faucet](https://faucet.chia.net/ "Chia Faucet"). With some Mojo in place, you can run the following from the command-line:

```bash
chia plotnft create -u https://pool.truepool.io -s pool
```

Review the pool information and press "y" to accept. Then wait for confirmation.

```bash
chia plotnft show
```
You should see **pool.truepool.io** listed, along with:
**P2 singleton address** (pool contract address for plotting): **xch.....**
Copy this address and begin plotting with:
```bash
chia plots create -c <contract address from above> -f <your farmers key> [other options]
```

Congratulations! Plots should now be created using truepool as your preferred pooling partner and farming happening automatically. Welcome to the TruePool farmers family!
