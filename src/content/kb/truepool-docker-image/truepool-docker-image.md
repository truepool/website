![Robot](/assets/img/robots/robot1.png)

## What is it?

To assist our Chia farmers, TruePool.io is pleased to make available a customized docker image which includes the *official* chia client, as well as a handful of helpful tools for serious farmers.

This image is used as the basis of the official [TrueNAS Plugin](https://www.truenas.com) for TrueNAS SCALE, but can be used by anybody with the ability to run containers.

The image includes the following:

- [Chia Blockchain](https://github.com/Chia-Network/chia-blockchain)
- [MadMax Plotter](https://github.com/madMAx43v3r/chia-plotter)
- [Farmr Client](https://github.com/joaquimguimaraes/farmr)
- [Plotman](https://github.com/ericaltendorf/plotman)
- [BladeBit](https://github.com/harold-b/bladebit/)
- [PlotNG](https://github.com/maded2/plotng)

## How do I get it?

TrueNAS users are encouraged to use the [Official TrueNAS App store](/kb/how-to-use-chia-on-truenas/), which will be kept up to date with the latest releases automatically.

Users wishing to run the container manually can do so by fetching it from [Docker Hub](https://hub.docker.com/repository/docker/ixsystems/chia-docker).


## Can I build my own?

Absolutely!

You can view and build from source on our [GitHub repository](https://github.com/truepool/chia-docker).

## What commands can be used from this docker image?

Once the container is running the commands used most often will be:

- chia - The main Chia program
- chia_plot - The MadMax Plotter
- bladebit - The BladeBit RAM Plotter
- plotman - The tool for enabling plotman monitoring / plotting
- /farmr - Location for the farmr chia monitoring bot/service.

## Runtime options

Apart from the usual chia-docker options, this container adds the following:

```
-e farmr="farmer"
```

```
-e farmr="harvester"
```

Specifying these options will auto-start the farmr bot at container initialization. You can view your farmr.net ID by running ```tail /farmr/log.txt``` inside the running container. 

