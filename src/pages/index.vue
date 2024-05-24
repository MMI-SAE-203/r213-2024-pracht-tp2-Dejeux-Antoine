<script setup lang="ts">
  
import MaisonCard from '@/components/MaisonCard.vue'
import { pb } from '@/backend';

const maisonsListe = await pb.collection('maison').getFullList({
  filter: "favori = true"
}) 
console.log(maisonsListe);

</script>

<template>
  <h1 class="text-2xl">Seulement celles en favori</h1>
  <MaisonCard v-for="uneMaison of maisonsListe" v-bind="uneMaison"/>
</template>
