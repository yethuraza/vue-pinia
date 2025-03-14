<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import Chat from "@/components/Chat.vue";
import { useProductStore } from "@/stores/ProductStore";
import { useCartStore } from "@/stores/CartStore";
import { storeToRefs } from "pinia";
const productStore = useProductStore();
const cartStore = useCartStore();
// const { products } = storeToRefs(useProductStore());
productStore.fill();
</script>

<template>
  <div class="container">
    <Chat />
  </div>
</template>
