---
title: TIL
---

<script setup>
import { data } from './til.data.ts'

const byCategory = data.reduce((acc, page) => {
  const cat = page.url.split('/')[1]
  ;(acc[cat] ??= []).push(page)
  return acc
}, {})
</script>

**{{ data.length }} TILs so far.**

## Recently Added

<ul>
  <li v-for="page in data.slice(-5).reverse()" :key="page.url">
    <a :href="page.url">{{ page.frontmatter.title }}</a>
  </li>
</ul>

## Categories

<template v-for="[cat, pages] in Object.entries(byCategory)" :key="cat">

### {{ cat.charAt(0).toUpperCase() + cat.slice(1) }}

<ul>
  <li v-for="page in pages" :key="page.url">
    <a :href="page.url">{{ page.frontmatter.title }}</a>
  </li>
</ul>

</template>
