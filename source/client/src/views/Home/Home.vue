<template>
  <div class="home">
    <div class="messages">
      <div v-for="(message, index) in messages" :key="index">
        {{message.username}}: {{message.text}}
      </div>
    </div>
    <div class="input-zone">
      <input v-model="form.message" placeholder="Message" />
      <button v-on:click.stop.prevent="sendMessage">Send</button>
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
<style lang="scss" src="./styles.scss"></style>
