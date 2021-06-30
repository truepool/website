---
title: "How to use Chia on TrueNAS"
date: 2021-06-13T17:26:48+03:00
category: TrueNAS
draft: false
slug: how-to-use-chia-on-truenas
---

# How to use Chia on TrueNAS

{{< robot align="right" variant="2" >}}

## TrueNAS SCALE 21.08


The preferred method of running Chia on TrueNAS is to use the containerized application on [TrueNAS SCALE 21.06](https://www.truenas.com/truenas-scale/) and later. 

Chia is available as an app in the official TrueNAS SCALE Applications repository

{{< page-img "*chia-truenas*" "SCALE Setup Process" >}}

Setup of Chia on TrueNAS scale is very straight-forward.

1. Navigate to the "Apps" section
2. Locate Chia and click *install*
3. Give the application a name, I.E. chia1
4. Review the other pages, and click "Submit" when finished.

To use Chia, you can click the installed App, and select the "Shell" option from the TrueNAS UI

#### NOTES

You'll want to make sure you setup proper port forwarding for port 8444 so that your Chia node can be reached by other clients on the network.

New users to Chia will want to get started reading some of the [official Chia wiki documentation](https://github.com/Chia-Network/chia-blockchain/wiki).
