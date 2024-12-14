---
title: InvincibleMin/Max
prev: false
next: false
---

# InvincibleMin and Max
Official maps use `"InvincibleMin": [-1, 0, -1],` to make the bottom layer of the map invincible.

There is no way to make an invincible border around the map using `InvincibleMin`/`InvincibleMax`.
::: tip WORKAROUND
To make an invincible border, use a duplicate index with the `invincible` block attribute for every index in the invincible border.
:::

```json
"InvincibleMin": [ -1, 0, -1 ],
"InvincibleMax": [ 1, 0, 1 ],
```