---
title: Post Data 
description: Post data trough api
author: capu25
tags: api,post
---

```js
const postData = async (endpoint, data) => {
    try {
        const posteData = await axios.post(endpoint, data);
        console.log("Posted Data:", posteData.data);
        return posteData.data;
    } catch (error) {
        console.error("Error occurred: ", error);
        throw error;
    }
};

// Usage:
const endpoint = "https://api.example.com/data";
const data = { key: "value" };
postData(endpoint, data); //be sure to have AXIOS imported

```
