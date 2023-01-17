<template>
  <div class="tabs-container-wrapper" :style="{ justifyContent: align, height: !vertical ? height : width, width: !vertical ? width : height }">
    <nav class="tabs-container-content" :style="{ width: align === 'justify' ? '100%' : '50%' }">
      <ul class="tabs-container-items" :class="{ 'tabs-container-items--vertical': vertical }">
        <!-- <li v-for="tab in tabs" :key="tab" class="tabs-item" :class="{ active: tabSelected === tab, 'tabs-item--vertical': vertical }" tabindex="0" @click="tabClick(tab)" @focus="handleFocus">
          <span class="tabs-item-content"> {{ noCaps ? tab : tab.toLocaleUpperCase() }} </span>
        </li> -->

        <slot></slot>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUpdated, PropType, ref } from 'vue'

export default defineComponent({
  name: 'TabsComponent',
  props: {
    noCaps: { type: Boolean, default: false },
    vertical: { type: Boolean, default: false },
    height: { type: String, default: '3em' },
    align: { type: String as PropType<'center' | 'justify' | 'left' | 'right'>, default: 'center' },
    modelValue: { type: String, default: '', required: true },
    width: { type: String, default: '100%' },
  },
  setup(props, { emit, slots }) {
    const tabSelected = ref(props.modelValue)
    const tabs = ref<string[]>()

    const initTabs = () => {
      if (slots.default?.().length) tabs.value = slots.default?.().map((tab) => tab.props?.name)
      else tabs.value = []
    }

    const tabClick = (tab: string) => {
      tabSelected.value = tab
      emit('update:modelValue', tabSelected.value)
    }

    const handleFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement
      target.click()
    }

    const widthByTab = computed(() => `calc(${props.width} / ${tabs.value?.length})`)

    onMounted(initTabs)
    onUpdated(() => {
      if (slots.default?.().length !== tabs.value?.length) tabs.value = slots.default?.().map((tab) => tab.props?.name)
    })

    return { tabs, tabSelected, tabClick, handleFocus, widthByTab }
  },
})
</script>

<style scoped>
.tabs-container-wrapper {
  background-color: var(--primary-color);
  box-shadow: 0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f;
  display: flex;
  width: 100%;
}

/* .tabs-container-content {
  position: relative;
} */

.tabs-container-content {
  display: flex;
  /* width: 100%; */
}

.tabs-container-items {
  display: flex;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

.tabs-container-items.tabs-container-items--vertical {
  flex-direction: column;
}

/* .tabs-item {
  align-items: center;
  background-color: #1976d2;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  overflow: hidden;
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
  width: 100%;
}

.tabs-item:hover {
  opacity: 0.8;
} */

/* .tabs-item:focus {
  outline: none;
} */

.tabs-item.tabs-item--vertical {
  height: 100%;
}

/* .tabs-item-content {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  padding: 0.5em;
  position: relative;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  width: 100%;
} */

/* .active::before {
  background-color: white;
  border-radius: 15px;
  bottom: 0;
  content: '';
  display: block;
  height: 3px;
  position: absolute;
  width: v-bind(widthByTab);
} */

.active.tabs-item--vertical::after {
  background-color: white;
  border-radius: 15px;
  right: 0;
  content: '';
  display: block;
  height: v-bind(widthByTab);
  position: absolute;
  width: 3px;
}

.active.tabs-item--vertical::before {
  background-color: transparent;
}
</style>
