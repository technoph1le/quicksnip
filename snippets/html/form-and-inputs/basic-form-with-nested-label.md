---
title: Basic Form With Nested Label
description: Basic form using nested label.
author: alanb4rt
tags: form,input,html,css,flex
---

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        section {
            max-width: 400px; /* Change as you want */
            margin-inline: auto;
        }

        h2 {
            text-align: center;
        }

        label {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: 1rem;

            & input {
                padding: 0.5rem;
            }
        }

        button {
            margin-top: 1rem;
            padding: 0.25rem 1rem;
        }
    </style>
</head>
<body>
    <section>
        <h2>Form</h2>
        <form action="https://example.com/submit" method="get">
            <label>First name
                <input type="text" name="firstname">
            </label>
            <label>Last name
                <input type="text" name="lastname">
            </label>
            <label>Email
                <input type="email" name="email">
            </label>
            <label>Telephone
                <input type="tel" name="phone">
            </label>
            <label>Message
                <textarea name="message" rows="4"></textarea>
            </label>
            <button type="submit">Send</button>
        </form>
    </section>
</body>
</html>
```
