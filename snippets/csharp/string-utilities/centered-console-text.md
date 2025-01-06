---
title: Centered Console Text
description: Output console text centered in the window.
author: BitMap7487
tags: console, csharp, string-formatting, text-alignment
---

```csharp
static void CenteredOutput(object input)
{
    if (input is IEnumerable enumerable && !(input is string))
    {
        foreach (var message in enumerable)
        {
            PrintCentered(message.ToString());
        }
    }
    else
    {
        PrintCentered(input.ToString());
    }
}

private static void PrintCentered(string str)
{
    int centerPosition = Console.WindowWidth / 2 + str.Length / 2;
    Console.WriteLine(string.Format("{0," + centerPosition + "}", str));
}

// Usage:
List<string> messages = new List<string>()
{
    "Hello world!",
    "This is a test"
};

string[] messageArray = { "Array test 1", "Array test 2" };

CenteredOutput(messages);
CenteredOutput(messageArray);
CenteredOutput("Single string test");
```
