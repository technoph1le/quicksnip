---
title: Basic Form
description: Basic form with fields for name, email, phone number, and a message.
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

        .ctn-input {
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
            <div class="ctn-input">
                <label for="firstname">First name</label>
                <input type="text" id="firstname" name="firstname">
            </div>
            <div class="ctn-input">
                <label for="lastname">Last name</label>
                <input type="text" id="lastname" name="lastname">
            </div>
            <div class="ctn-input">
                <label for="email">Email</label>
                <input type="email" id="email" name="email">
            </div>
            <div class="ctn-input">
                <label for="phone">Telephone</label>
                <input type="tel" id="phone" name="phone">
            </div>
            <div class="ctn-input">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <button type="submit">Send</button>
        </form>
    </section>
</body>
</html>
```
