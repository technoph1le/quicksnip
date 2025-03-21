---
title: Get Desktop Enviroment
description: Get the Desktop Enviroment that the user is currently using.
author: sponkurtus2 
tags: linux,file 
---

```rust
fn get_desktop_env() -> String {
    // Return empty string if no X display is available
    if env::var("DISPLAY").is_err() {
        return String::new();
    }

    // Check common desktop environment variables.
    for env_var in &[
        "XDG_SESSION_DESKTOP",
        "XDG_CURRENT_DESKTOP",
        "DESKTOP_SESSION",
    ] {
        if let Ok(de) = env::var(env_var) {
            return de;
        }
    }

    // As fallback, try to get desktop name from last word of last line in .xinitrc
    let path = format!("{}/.xinitrc", env::var("HOME").unwrap_or_default());
    if let Ok(mut file) = File::open(&path) {
        let mut buf = String::new();
        if file.read_to_string(&mut buf).is_ok() {
            if let Some(last_line) = buf.lines().last() {
                let last_word = last_line.split(' ').last().unwrap_or("");
                return last_word.to_string();
            }
        }
    }

    // Return "N/A" if no desktop environment could be detected
    String::from("N/A")
}

// Usage:
get_desktop_env(); // Returns: the desktop enviroment that the user actually has e.g. i3.
```