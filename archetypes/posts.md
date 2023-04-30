---
title: {{ replace .Name "-" " " | title }}
subtitle:
date: {{ .Date }}
draft: true
description:
keywords:
tags:
  - {{ substr .Dir 6 (sub (len .Dir) (len .Name) 8)}}
categories:
  - {{ substr .Dir 6 (sub (len .Dir) (len .Name) 8)}}
summary:

---


<!--more-->
