---
title: Spacing
description: This SCSS snippet dynamically generates utility classes for managing spacing in a consistent and efficient manner. The classes are built using a loop, ensuring scalability and flexibility. use .mt-* for margin-top, and .pb-* for padding bottom
author: dinesh-here
tags: clearfix,utility,css, spacing
---

```scss
$step: 5;
$start_limit: 0;
$end_limit: 50;

  @while $start_limit <= $end_limit {
    .mt-#{$start_limit} {
        margin-top: $start_limit + px;
    }
    .mb-#{$start_limit} {
        margin-bottom: $start_limit + px;
    }

    .ml-#{$start_limit} {
        margin-left: $start_limit + px;
    }

    .mr-#{$start_limit} {
        margin-right: $start_limit + px;
    }

    .pt-#{$start_limit} {
        padding-top: $start_limit + px;
    }
    .pb-#{$start_limit} {
        padding-bottom: $start_limit + px;
    }

    .pl-#{$start_limit} {
        padding-left: $start_limit + px;
    }

    .pr-#{$start_limit} {
        padding-right: $start_limit + px;
    }
    .mx-#{$start_limit} {
        margin-left: $start_limit + px;
        margin-right: $start_limit + px;
    }

    .px-#{$start_limit} {
        padding-left: $start_limit + px;
        padding-right: $start_limit + px;
    }

    .my-#{$start_limit} {
        margin-top: $start_limit + px;
        margin-bottom: $start_limit + px;
    }

    .py-#{$start_limit} {
        padding-top: $start_limit + px;
        padding-bottom: $start_limit + px;
    }


    $start_limit: $start_limit + $step;
}

```
