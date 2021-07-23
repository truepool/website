![Robot](/assets/img/robots/robot2.png)

## What is TrueNAS?

[TrueNAS](https://www.truenas.com) is the worlds most popular software defined storage, used everywhere from small 2-drive home NAS deployments, up to to the largest Enterprises with often hundreds of disks and multiple PiB's on a single system. TrueNAS is 100% Open Source and available freely to download and run on home-brew hardware, while supported hardware platforms can be purchased directly from [iXsystems Inc.](https://www.ixsystems.com).

## What is TrueNAS SCALE?

TrueNAS SCALE is the next-generation iteration of the rock solid TrueNAS software, based upon [Debian Linux](https://www.debian.org/), and bringing with it scale-out capabilities, as well as Docker/K8's and KVM hypervisor support as some of its major highlights. It is the preferred method for TruePool Chia Farming, due to its Linux container capabilities that allows easy, rapid deployment and updating of the TruePool-Sponsored, [TrueNAS Official Chia App](https://truepool.io/kb/truepool-docker-image).

## Can I use TrueNAS CORE/Enterprise to Farm?

Absolutely! There is a Chia application in the "Community Plugin" repository of TrueNAS CORE, which contains only the Chia base software.

## Installing Chia on TrueNAS SCALE

The preferred method of running Chia on TrueNAS is to use the containerized application on [TrueNAS SCALE 21.06](https://www.truenas.com/truenas-scale/) and later. 

Chia is available as an app in the official TrueNAS SCALE Applications repository

![](/content/kb/img/how-to-use-chia-on-truenas.gif)

Setup of Chia on TrueNAS scale is very straight-forward.

1. Navigate to the "Apps" section
2. Locate Chia and click *install*
3. Give the application a name, I.E. chia1
4. Review the other pages, and click "Submit" when finished.

To use Chia, you can click the installed App, and select the "Shell" option from the TrueNAS UI.

TIP - You can also access the Shell via SSH using the following:

View container namespaces: ```k3s kubectl get namespaces.```
View pods by namespace: ```k3s kubectl get -n <NAMESPACE> pods.```
Access container shell: ```k3s kubectl exec -n <NAMESPACE> --stdin --tty <POD> -- /bin/bash.```

## Installing Chia on TrueNAS CORE/Enterprise

Browse to the Plugins section of the TrueNAS UI, and select the drop-down to change to viewing the Community Repository. Chia will show up in the default list when switched, and can be installed via the normal plugin mechanisms. 

#### NOTES

You'll want to make sure you setup proper port forwarding for port 8444 so that your Chia node can be reached by other clients on the network.

New users to Chia will want to get started reading some of the [official Chia wiki documentation](https://github.com/Chia-Network/chia-blockchain/wiki).
