<script setup lang="ts"></script>
<style src="./App.css" />

<template>
  <div id="main-wrapper">
    <div id="left-section">
      <section id="text-section">
        <article>
          <h1 class="title">This is Luis Azcuaga</h1>
          <p>Hello! I'm a software engineer with experience in Ruby on Rails, Node and other web technologies.</p>
          <p>I started my programming journey in 2018, and since then, I've worked on various personal and professional
            projects. I'm passionate about writing clean, scalable, and efficient code.</p>
        </article>
      </section>
      <section id="anchors-section">
        <a href="https://github.com/luisAzcuaga" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github-alt" />
          <p class="tooltip">github</p>
        </a>
        <a href="https://www.linkedin.com/in/luis-azcuaga" target="_blank">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
          <p class="tooltip">linkedIn</p>
        </a>
        <p class="noselect">&nbsp;|&nbsp;</p>
        <a href="https://sortfella.azkawa.dev" target="_blank">
          <font-awesome-icon icon="fa-solid fa-music" />
          <p class="tooltip wide">Sortfella:
            <small>
              Sort your playlists easily.
            </small>
          </p>
        </a>
        <a href="https://mind.azkawa.dev" target="_blank">
          <font-awesome-icon icon="fa-solid fa-water" />
          <p class="tooltip wide">Mindfulness Assistant:
            <small>
              Vanilla HTML Breathing assistant
            </small>
          </p>
        </a>
        <a href="https://turnips.azkawa.dev" target="_blank">
          <font-awesome-icon icon="fa-solid fa-leaf" />
          <p class="tooltip wide">Turnips Calculator:
            <small>
              Predict turnips value for 'Animal Crossing: New Horizons'
            </small>
          </p>
        </a>
      </section>

    </div>
    <div id="right-section">
      <img src="./luis.jpg" alt="logo" />
    </div>

  </div>
</template>