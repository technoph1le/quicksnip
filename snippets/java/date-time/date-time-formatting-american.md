---
title: Date Time Formatting American
description: Formats a timestamp to a human-readable date-time string in the format "MM/dd/yyyy hh:mm:ss a"
author: Mcbencrafter
tags: date,time,date-time,formatting,american
---

```java
import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.concurrent.TimeUnit;

// using the system default time zone
public static String formatDateTimeAmerican(long time, TimeUnit timeUnit) {
    return formatDateTimeAmerican(time, timeUnit, ZoneId.systemDefault());
}

public static String formatDateTimeAmerican(long time, TimeUnit timeUnit, ZoneId timeZone) {
    return DateTimeFormatter.ofPattern("MM/dd/yyyy hh:mm:ss a")
            .withZone(
                timeZone != null ? timeZone : ZoneId.systemDefault()
            )
            .format(Instant.ofEpochSecond(
                timeUnit.toSeconds(time)
            ));
}

// Usage:
System.out.println(formatDateTimeAmerican(1735689599, TimeUnit.SECONDS)); // "12/31/2024 | 11:59:59 PM" for GMT+0000
System.out.println(formatDateTimeAmerican(1735689599, TimeUnit.SECONDS, ZoneId.of("GMT+0000"))); // "12/31/2024 | 11:59:59 PM"
```