---
title: System Resource Monitor
description: Monitors system resources (CPU, RAM, disk, users) at specified intervals
author: sponkurtus2
tags: file,system
---

```bash
monitor_resources() {
  local interval="${1:-5}" # Seconds between checks
  local checks="${2:-12}"  # Number of checks to perform
  local log_file="system_stats.log"

  for ((i = 1; i <= checks; i++)); do
    {
      echo "=== Check $i of $checks ==="
      date "+%Y-%m-%d %H:%M:%S"
      echo "CPU Load: $(top -bn1 | grep "Cpu(s)" | awk '{print $2}')%"
      echo "Memory Used: $(free -m | awk 'NR==2{printf "%.2f%%", $3*100/$2}')"
      echo "Disk Used: $(df -h / | awk 'NR==2{print $5}')"
      echo "Active Users: $(who | wc -l)"
    } >>"$log_file"

    sleep "$interval"
  done

  echo "Log saved to $log_file"
}

monitor_resources

// Usage:
./system-resource-monitor.sh 3 12 // First argument is the seconds between checks, and second parameter is the number of checks you want to perform
```
