---
title: Dark Theme
description: SCSS mixin to change styles for dark themes.
author: gihanrangana
tags: css, mixin, snippet, dark-theme, layout
---

```scss
@mixin isDark($type: 'module') {
  $root: &;

  @if $type == 'module' {
    :global {
      @at-root body[theme='dark'] #{$root} {
        @content;
      }
    }
  } @else {
    &[theme='dark'] {
      @content;
    }
  }
}

// Usage:
.container{
	background: #f0f0f0;
	@include isDark {
		background: #222;
	}
}
```