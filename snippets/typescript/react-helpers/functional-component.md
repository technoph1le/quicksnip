---
title: Fuctional Component
description: Functional component for React JS with props.
author: gihanrangana
tags: typescript,fuctional-component,react-props,reactjs
---

```tsx
import React from 'react';

interface ComponentNameProps {
    // Define specific props here
}

const ComponentName: React.FC<ComponentNameProps> = (props) => {
    return (
        <div>
            {/* Add component content here */}
        </div>
    );
};

export default ComponentName;
```