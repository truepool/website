![Robot](/assets/img/robots/robot2.png)

# Table of contents

- [What is TrueNAS?](#what-is-truenas)
- [What is TrueNAS SCALE?](#what-is-truenas-scale)
- [Why TrueNAS for Chia?](#why-truenas-for-chia)
  - [TrueNAS Plotting Best Practices](#truenas-plotting-best-practices)
  - [TrueNAS Farming Best Practices](#truenas-farming-best-practices)
- [Can I use TrueNAS CORE/Enterprise to Farm?](#can-i-use-truenas-coreenterprise-to-farm)
- [Installing Chia on TrueNAS SCALE](#installing-chia-on-truenas-scale)
- [Installing Chia on TrueNAS CORE/Enterprise](#installing-chia-on-truenas-coreenterprise)

## What is TrueNAS?

[TrueNAS](https://www.truenas.com) is the worlds most popular software defined storage, used everywhere from small 2-drive home NAS deployments, up to to the largest Enterprises with often hundreds of disks and multiple PiB's on a single system. TrueNAS is 100% Open Source and available freely to download and run on home-brew hardware, while supported hardware platforms can be purchased directly from [iXsystems Inc.](https://www.ixsystems.com).

## What is TrueNAS SCALE?

TrueNAS SCALE is the next-generation iteration of the rock solid TrueNAS software, based upon [Debian Linux](https://www.debian.org/), and bringing with it scale-out capabilities, as well as Docker/K8's and KVM hypervisor support as some of its major highlights. It is the preferred method for TruePool Chia Farming, due to its Linux container capabilities that allows easy, rapid deployment and updating of the TruePool-Sponsored, [TrueNAS Official Chia App](https://truepool.io/kb/truepool-docker-image).

## Why TrueNAS for Chia?

TrueNAS (Especially TrueNAS SCALE) can be particularly well-suited to be used as the base operating system of a Chia Farm when tuned for this use-case.
Its included ZFS filesystem includes some unique characteristics for monitoring the health of your individual farming disks, while also providing some options for RAID / Stripe layouts that can enhance your plotting performance. Below is a collection of tips and best practices that your fellow Chia Farmers have been using on TrueNAS for farming / plotting.

### TrueNAS Plotting Best Practices

1. Use a SSD or group of HDD’s / SSD’s as scratch space. In the TrueNAS pool creation, you can create a dedicated pool for scratch space. To gain more write performance, you can stripe 2-3 drives or more with no redundancy, giving you the speed of multiple drives simultaneously. This is one method to give you near SSD speeds with multiple spinning disks acting in concert. The pool will be mounted at /mnt/<poolname> automatically, and you can attach that to your Chia container for plotting using the MadMax plotter.

2. Move your plots! It’s best to keep your scratch pool empty, be sure to move your plots to a final farming location as soon as they are created.

### TrueNAS Farming Best Practices

1. Since no Chia plots are more likely to win than any other, it's often not worth the cost of redundancy for your plot drives. Create a ZFS pool for each drive and fill them to 99% or more of their available space. Once the pool is filled, it can be left alone until the drive dies, at which point you can replace it and re-plot to fill the new disk. I.E. “ch100, ch101, ch102, ch103, …”

2. ZFS’s ARC / L2ARC will be helpful to keep recent plot reads in RAM, helping reduce overall lookup times as challenges are issued. This works out of the box, and the more RAM / L2ARC space available will help this run more efficiently.

3. It’s often best to not plot and run your master farm / blockchain node on the same system. Plotting is resource intensive and if not done carefully can starve your Farmer node for resources, causing the blockchain to get out of sync, and your Farmer to miss out on challenges.

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

1. View container namespaces: ```k3s kubectl get namespaces.```
2. View pods by namespace: ```k3s kubectl get -n <NAMESPACE> pods.```
3. Access container shell: ```k3s kubectl exec -n <NAMESPACE> --stdin --tty <POD> -- /bin/bash.```

## Installing Chia on TrueNAS CORE/Enterprise

Browse to the Plugins section of the TrueNAS UI, and select the drop-down to change to viewing the Community Repository. Chia will show up in the default list when switched, and can be installed via the normal plugin mechanisms. 

#### NOTES

You'll want to make sure you setup proper port forwarding for port 8444 so that your Chia node can be reached by other clients on the network.

New users to Chia will want to get started reading some of the [official Chia wiki documentation](https://github.com/Chia-Network/chia-blockchain/wiki).
