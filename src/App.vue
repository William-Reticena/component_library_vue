<template>
  <div>
    <InputComponent
      v-model="model"
      label="sddef"
      disabled
      errorMessage="efrooswesdsadfsdfdfsdffk dsdfsdffgdfgedbdgbdgbdghfdghbfghbfghfghfgdfsdf fsdfsdfj lskdfjlksd lksdjflks djflksdjflk sjlksjflksdfjlkdslçfdjglkdfjlkdfglk dlfdglkdfglkdfgklg lkdflfdglkdfm dfmgvlk dfmldfdfgfd"
      error
    >
    </InputComponent>
    <InputComponent
      v-model="model"
      label="sddef"
      disabled
      errorMessage="efrooswesdsadfsdfdfsdffk dsdfsdffgdfgedbdgbdgbdghfdghbfghbfghfghfgdfsdf fsdfsdfj lskdfjlksd lksdjflks djflksdjflk sjlksjflksdfjlkdslçfdjglkdfjlkdfglk dlfdglkdfglkdfgklg lkdflfdglkdfm dfmgvlk dfmldfdfgfd"
      error
    >
    </InputComponent>
    {{ model }}
  </div>

  <div>
    <InputComponent
      v-model="model"
      label="sddef"
      disabled
      errorMessage="efrooswesdsadfsdfdfsdffk dsdfsdffgdfgedbdgbdgbdghfdghbfghbfghfghfgdfsdf fsdfsdfj lskdfjlksd lksdjflks djflksdjflk sjlksjflksdfjlkdslçfdjglkdfjlkdfglk dlfdglkdfglkdfgklg lkdflfdglkdfm dfmgvlk dfmldfdfgfd"
      error
    >
    </InputComponent>
    {{ model }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import InputComponent from './components/library/Input/index.vue'

export default defineComponent({
  components: {
    InputComponent,
  },
  setup() {
    const model = ref('')
    return { model }
  },
})
</script>

<style>
:root {
  --primary-color: #1976d2;
  --secondary-color: #26a69a;

  font-size: 16px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>