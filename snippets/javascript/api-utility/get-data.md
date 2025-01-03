---
title: Get Data 
description: Fetch data from an API endopint
author: capu25
tags: api,fetch,get
---

```js
const getData = async (endpoint) => {
    try {
        const response = await axios.get(endpoint);
        console.log("Fetched Data:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error occurred: ", error);
        throw error;
    }
};

// Usage:
const endpoint = "https://api.example.com/data";
getData(endpoint); //be sure to have AXIOS imported

```
