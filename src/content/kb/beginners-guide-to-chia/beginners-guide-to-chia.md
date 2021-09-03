![Robot](/assets/img/robots/robot3.png)

# Table of contents

- [What is Chia?](/kb/beginners-guide-to-chia/#what-is-chia)
- [How do I get Chia Installed?](/kb/beginners-guide-to-chia/#how-do-i-get-chia-installed)
- [How do I get started farming?](/kb/beginners-guide-to-chia/#how-do-i-get-started-farming)
- [Checking Blockchain Status](/kb/beginners-guide-to-chia/#checking-blockchain-status)
- [Creating a Wallet](/kb/beginners-guide-to-chia/#creating-a-wallet)
- [Joining a Pool](/kb/beginners-guide-to-chia/#joining-a-pool)
- [Creating Plots](/kb/beginners-guide-to-chia/#creating-plots)

## What is Chia

[Chia](https://www.chia.net/) is a new "Green" cryptocurrency which is Proof of Space based, allowing you to turn disk space into Chia Plots used in the farming of Chia coins (XCH). 

[https://www.chia.net/faq/#faq-1](https://www.chia.net/faq/#faq-1)


## How do I get Chia Installed?

First, you will want to download a Chia client. There are several options depending on your technical skill level.

 - [Windows, Mac and Linux GUI Images](https://www.chia.net/download/) - Best for desktop users or less technical farmers
 - [Docker Images](https://truepool.io/kb/truepool-docker-image) - Recommended by TruePool for power farmers, [TrueNAS SCALE](https://www.truenas.com/truenas-scale/) users, or others comfortable with running Docker.
 - [Machinaris](https://www.machinaris.app/) - Docker which provide a WebUI for users that do not prefer a CLI

## How do I get started farming?

For the purposes of this guide we will be mainly focusing on the CLI/Docker method of farming Chia. The process is similar for users of the other methods, but you will need to navigate around in the UI to locate some things.

The first time you launch the Chia service from Docker, you will need to perform some initial setup to prepare your node, create a wallet (keys) and then join a pool or create plots.

![Chia2](/kb/img/chia1.png)

### Checking Blockchain Status

When you start a Chia Farmer, the first thing Chia will attempt to do is sync with the blockchain. This is a long process and can take many hours to complete. You can check the status of this proces by running the command `chia show -s -c`

![Chia2](/kb/img/chia2.png)

In the example above, you can see a blockchain beginning to sync, along with a list of peers that we are currently connected to.

NOTE: Port 8444 should be open and accesible from the public internet to your Chia instance to speed up this process.

NOTE: If you are syncing slowly or having trouble locating peers, you may need to manually add a peer, or connect to an "Introducer" using a command such as `chia show -a introducer-or.chia.net:8444` or similar. [Click here](http://chiasync.network/) for a list of nodes or introducers to add. 

### Creating a Wallet

While your blockchain has begun to sync in the background, it's often best to next setup your own local wallet. If you are using the TruePool recommended Docker image, a key will automatically be created for you the first time you launch the container. You will want to immediately take a look at the generated key, and write down somewhere the "Mnemonic seed" which is a sequence of 24 words that are used to import your keys. This is the only Key information you need to keep, and this Mnemonic should never be shared with anybody (Pools or other Humans) unless you wish to give them complete access to your wallet. 

To display the key information, run `chia keys show --show-mnemonic-seed`

![Chia3](/kb/img/chia3.png)

If you have installed Chia using another method which does not automatically create a new wallet at launch, you can do so by running `chia keys generate`

At this time you should also copy your "Farmer public key" which will be used to create plots in a later step.


### Joining a pool

At this stage in the Chia lifecycle, Solo farming is very difficult unless you plan on having several PetaBytes (PiB) of space dedicated to Chia. However a pool makes farming at a small scale much more viable, with rewards more evenly dispersed by cooperating with your fellow farmers. For obvious reasons, we recommend joining us in [TruePool.io](https://truepool.io/pages/join-truepool) on your Chia farming journey. However if you wish to use another pool, we highly recommend avoiding pools which require "custom" clients to be installed, since that often can lead to a compromising of your wallet information. Chia officially supports [native pooling](https://github.com/Chia-Network/chia-blockchain/wiki/Pooling-User-Guide), and this method should be used wherever possible.

To get started with a pool, you first need to request a small amount of XCH called a "mojo" from a Chia Faucet. This can be done by joining the [TruePool Discord Server]() or by putting your "First Wallet Address" from the previous step into the [Official Chia Faucet](https://faucet.chia.net/) website. Once the XCH(Mojo) has been sent, you will want to watch for it to show up in your wallet by monitoring the output of `chia wallet show`. Note, this will only show up after your blockchain sync has finished and you are current with the network.

Now, with your Mojo in hand, you are ready to join a pool. You can start this process by running `chia plotnft create -u https://pool.truepool.io -s pool`

![Chia4](/kb/img/chia4.png)

Select "Y" to continue, and a transaction will be created to generate your NFT token used for pooled plotting. Using this token it is possible to switch between pools, or even convert to solo farming at any time down the road. After a few moments, you can run `chia plotnft show` to check the status of your token, and make a copy of your "Pool Contract Address". Save this address, it will be used for plotting in the next steps.

![Chia5](/kb/img/chia5.png)

### Creating Plots
 
Now that your local node is setup, it is time to create some plots and get onto the business of farming! Plots are the files which are used to "Farm" for winning blocks. The current plot sizes are referred to as K32's, which roughly amounts to 100GiB per plot file. The more of these files you create and farm, the better your chances of winning a block and earning some XCH. Creating these files can take some time and there are lots of methods for doing so. In this guide we will focus on using the [MadMax](https://github.com/madMAx43v3r/chia-plotter/) plotting tool, which is one of the more popular methods, due to is speed. To get make your first plot, you can run a command similar to the following:

```chia_plot -t <tmpdir> -d <plot dir> -f <farmer public key> -c <pool contract address>```

Replace <tmpdir> with a location suitable for writing 200+GiB of temp files, that will be used in the plot generation process. Typically users point this to a fast SSD or other ramdisk type solution. The <plot dir> is the location where you want your finished plot to end up for Chia to begin farming. Replace the <farmer public key> and <pool contract address> with the values you saved from the previous steps. 

Once your plot has finished, we need to tell Chia about the location of the new plot file. You can do so by running `chia plots add -d <plot dir>`.

With a plot in place, you can monitor the status of your farm via the `chia farm summary` command, and your pooling status via `chia plotnft show`.

Congrats! You have now joined the Chia farming community! However, much like real farming, there is far more to learn and adapt into your technique. We highly recommend joining us on [Discord](https://discord.com/invite/hWwAfGFyBz) to interact with fellow farmers on the journey. Good luck Plotting and Farming!
