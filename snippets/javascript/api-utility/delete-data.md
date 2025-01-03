---
title: Delete Data 
description: Delete data trough api
author: capu25
tags: api,delete
---

```js
const deleteData = async (id) => {
   const endpoint = `https://api.example.com/users/${id}`;
   try {
       const response = await axios.delete(endpoint);
       console.log(`Deleted user ${id}:`, response.data);
       return response.data;
   } catch (error) {
       console.error(`Error deleting user ${id}:`, error);
       throw error;
   }
};


// Usage:
const userId = "123";
deleteData(userId); //be sure to have AXIOS imported

```
