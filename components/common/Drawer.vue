<template>
  <v-navigation-drawer v-model="status" temporary app>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <LanguageSelector />
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-for="item in menuItems"
        :key="item.routeName"
        @click="goToPath(item.routeName)"
      >
        <v-list-item-content>
          <div
            :class="
              `drawer__nav-item ${
                isNavActive(item.routeName) ? 'nav--active' : ''
              }`
            "
          >
            {{ $t(item.title) }}
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
/**
 * Drawer component.
 */
import LanguageSelector from '@/components/common/LanguageSelector.vue';

export default {
  name: 'Drawer',
  components: { LanguageSelector },
  props: {
    value: { type: Boolean, default: false }, // Drawer status
    menuItems: { type: Array, default: null },
  },
  computed: {
    status: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },
  methods: {
    /**
     * Go to path.
     */
    goToPath(name) {
      this.$emit('go-to-path', name);
    },
    /**
     * Check if nav link is active.
     */
    isNavActive(name) {
      return this.$route.name.includes(name);
    },
  },
};
</script>

<style lang="scss" scoped>
.drawer {
  &__nav-item {
    cursor: pointer;
    transition: color ease-in-out 0.2s;
    text-transform: uppercase;
    &:hover {
      color: $primary;
    }
  }
}
.nav--active {
  font-weight: 500;
  color: $primary;
}
</style>
