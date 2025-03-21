---
title: Date Time Formatting European
description: Formats a timestamp to a human-readable date-time string in the format "dd.MM.yyyy HH:mm:ss"
author: Mcbencrafter
tags: date,time,date-time,formatting,european
---

```java
import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.concurrent.TimeUnit;

// using the system default time zone
public static String formatDateTimeEuropean(long time, TimeUnit timeUnit) {
    return formatDateTimeEuropean(time, timeUnit, ZoneId.systemDefault());
}

public static String formatDateTimeEuropean(long time, TimeUnit timeUnit, ZoneId timeZone) {
    return DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss")
            .withZone(
                timeZone != null ? timeZone : ZoneId.systemDefault()
            )
            .format(Instant.ofEpochSecond(
                    timeUnit.toSeconds(time)
            ));
}

// Usage:
System.out.println(formatDateTimeEuropean(1735689599, TimeUnit.SECONDS)); // "31.12.2024 | 23:59:59" for GMT+0000
System.out.println(formatDateTimeEuropean(1735689599, TimeUnit.SECONDS, ZoneId.of("GMT+0000"))); // "31.12.2024 | 23:59:59"
```