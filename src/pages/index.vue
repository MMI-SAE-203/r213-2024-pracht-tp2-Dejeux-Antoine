<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
interface MaisonRecord {
  adresse: string;
  collectionId: string;
  collectionName: string;
  created: string;
  favori: boolean;
  id: string;
  image: string;
  nbChambres: number;
  nbSdb: number;
  nomMaison: string;
  prix: number;
  surface: number;
  updated: string;
}

const maisonsListe: MaisonRecord[] = [
  {
    "adresse": "3 rue du bleu",
    "collectionId": "0vwm8kqkc6n47nn",
    "collectionName": "maison",
    "created": "2024-04-12 12:08:43.233Z",
    "favori": false,
    "id": "i1sf7kl3spd9gjn",
    "image": "224001738_a_26brO2nUtx.jpg",
    "nbChambres": 3,
    "nbSdb": 1,
    "nomMaison": "MaisonBleu",
    "prix": 155000,
    "surface": 100,
    "updated": "2024-04-12 12:43:03.520Z"
  },
  {
    "adresse": "Château de Chambord, 41250 Chambord",
    "collectionId": "0vwm8kqkc6n47nn",
    "collectionName": "maison",
    "created": "2024-04-12 12:30:39.355Z",
    "favori": true,
    "id": "69muwuji1mbnixc",
    "image": "chambord_septembre_2023_dnc_olivier_marchant_1_1600x900_N7xx93Ple9.jpg",
    "nbChambres": 54,
    "nbSdb": 24,
    "nomMaison": "chateau",
    "prix": 54480000,
    "surface": 4520,
    "updated": "2024-04-12 12:31:21.737Z"
  },
  {
    "adresse": "1026 rue de York à Elmore",
    "collectionId": "0vwm8kqkc6n47nn",
    "collectionName": "maison",
    "created": "2024-04-12 12:39:41.641Z",
    "favori": true,
    "id": "ypv2dybo21wu1d9",
    "image": "mgxg9h4zlbm51_e5cTRj40t6.webp",
    "nbChambres": 3,
    "nbSdb": 1,
    "nomMaison": "Maison des Watterson",
    "prix": 25000,
    "surface": 100,
    "updated": "2024-04-12 12:39:41.641Z"
  },
  {
    "adresse": "5 rue de la merde",
    "collectionId": "0vwm8kqkc6n47nn",
    "collectionName": "maison",
    "created": "2024-04-12 12:42:43.570Z",
    "favori": false,
    "id": "wy7wsnedsdjpq84",
    "image": "sans_titre_n5uXYDoTjI.jpg",
    "nbChambres": 1,
    "nbSdb": 0,
    "nomMaison": "MaisonTerre",
    "prix": 1000,
    "surface": 15,
    "updated": "2024-04-12 12:42:43.570Z"
  },
  {
    "adresse": "5 rue de herobraine",
    "collectionId": "0vwm8kqkc6n47nn",
    "collectionName": "maison",
    "created": "2024-04-12 12:47:09.883Z",
    "favori": true,
    "id": "abzo8pwz4hnk86o",
    "image": "maxresdefault_zPjdWx9EwR.jpg",
    "nbChambres": 8,
    "nbSdb": 3,
    "nomMaison": "VillaDeLuxe",
    "prix": 1000000,
    "surface": 369,
    "updated": "2024-04-12 12:47:09.883Z"
  }
]

console.log(maisonsListe);

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>

</template>
