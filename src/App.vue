<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="app-header">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <nav>
      <RouterLink class="nav-btn" active-class="nav-active" to="/">Home</RouterLink>
      <RouterLink class="nav-btn" active-class="nav-active" to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', tahoma, sans-serif;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  html {
      -webkit-tap-highlight-color: transparent;
  }

  html {
    font-family: sans-serif;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
  }

  html {
    display: block;
  }

  * {
    -webkit-box-sizing: border-box !important;
      -moz-box-sizing: border-box !important;
    box-sizing: border-box !important;
    margin: 0;
  }

  *::before, *:after {
    -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
  }

  a {
    color: #337ab7;
    text-decoration: none;
    background-color: transparent;
  }

  b, strong {
    font-weight: 700;
  }

  ul ul, ul ol, ol ul, ol ol {
    margin-bottom: 0;
  }

  ul, ol {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .app-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    text-decoration: none;
    margin-bottom: 20px;
  }

  nav :first-child {
    margin-right: 10px;
  }

  .nav-btn {
    background-color: #40B280;
    width: 75px;
    text-align: center;
    padding: 10px 0 10px 0;
    border-radius: 10px;
    text-decoration: none;
    color: black;
  }

  .nav-btn:hover {
    background-color: #126440;
    cursor: pointer;
  }

  .nav-active {
    background-color: #126440;
  }
</style>
