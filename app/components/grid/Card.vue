<script setup lang="ts">
import { NuxtLink } from "#components";
import type { TTransformedYacht } from "~/types/types";
import IconBookmark from "../icons/IconBookmark.vue";

type Props = {
  item: TTransformedYacht;
}

defineProps<Props>();
</script>

<template>
  <li class="card">
    <article>
      <NuxtLink :to="`/${item.permalink}`" class="image-container">
        <button class="btn--bookmark">
          <IconBookmark class="bookmark-icon" />
        </button>
        <img :src="item.coverImage.url" :alt="item.name" class="img" />
      </NuxtLink>

      <div class="price">
        <h4>Price:</h4>
        <p>
          {{
            item.buyPrice?.EUR
              ? `${item.buyPrice.EUR.toLocaleString()}€`
              : "Price not available"
          }}
        </p>
      </div>

      <div class="specs">
        <div class="spec-item">
          <h4>Length:</h4>
          <p>{{ item.length.meters }}m</p>
        </div>

        <span>|</span>

        <div class="spec-item">
          <h4>Guests:</h4>
          <p>{{ item.guestsNumber }}</p>
        </div>

        <span>|</span>

        <div class="spec-item">
          <h4>Cabins:</h4>
          <p>{{ item.cabinsNumber }}</p>
        </div>
      </div>

      <div class="footer">
        <NuxtLink :to="`/${item.permalink}`">
          <h3>{{ item.name }}</h3>
        </NuxtLink>
        <button class="btn--primary">
          Enquiry
        </button>
      </div>
    </article>
  </li>
</template>
