<script setup lang="ts">
import { NuxtLink } from "#components";
import type { TTransformedYacht } from "~/types/types";
import IconBookmark from "../icons/IconBookmark.vue";

interface Props {
  item: TTransformedYacht;
}
const props = defineProps<Props>();
</script>

<template>
  <li>
    <NuxtLink :to="`/yachts/${item.permalink}`">
      <article>
        <picture>
          <IconBookmark />
          <img :src="item.coverImage.url" />
        </picture>

        <div>
          <h4>price</h4>
          <p>
            {{
              item.buyPrice?.EUR
                ? `${item.buyPrice.EUR.toLocaleString()}€`
                : "Price not available"
            }}
          </p>
        </div>

        <div>
          <div>
            <h4>Length:</h4>
            <p>{{ item.length.meters }}m</p>
          </div>

          <div>
            <h4>Guests:</h4>
            <p>{{ item.guestsNumber }}</p>
          </div>

          <div>
            <h4>Cabins:</h4>
            <p>{{ item.cabinsNumber }}</p>
          </div>
        </div>

        <div>
          <h3>{{ item.name }}</h3>
          <button>Enquiry</button>
        </div>
      </article>
    </NuxtLink>
  </li>
</template>
