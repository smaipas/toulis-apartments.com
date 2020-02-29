<template>
  <component
    :is="tag"
    class="section__header"
    :style="margin ? `margin: ${margin}` : ''"
  >
    <slot></slot>
  </component>
</template>

<script>
/**
 * Section header component.
 */
export default {
  name: 'SectionHeader',
  props: {
    tag: { type: String, default: 'div' },
    margin: { type: String, default: '2em 0 1em' },
  },
};
</script>

<style lang="scss" scoped>
.section__header {
  color: #595959;
  font-size: 1.5em;
  text-transform: uppercase;
  padding: 0.25em 0;
  margin: 1em 0;
  border-bottom: 1px solid #c1c1c1;
  text-align: center;
}
</style>
