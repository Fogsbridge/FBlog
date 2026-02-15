<template>
  <span class="relative">
    {{ displayText }}
    <slot name="textCursor"> <!-- 光标插槽 -->
      <span class="h-5 absolute ml-1 w-0.5  bg-black animate-blink"></span>
    </slot>
  </span>
</template>

<script setup>
import { ref, toRefs, onMounted } from 'vue'

const props = defineProps({
  text: {
    type: [String, Array]
  },
  config: {
    type: Object,
    default: () => ({
      // 打字机动画参数
      typingDelay: 100, // 输入下一个字的延迟时间
      deletingDelay: 60, // 删除下一个字的延迟时间
      preDeleteDelay: 2500, // 输入完成后，准备删除前的停顿时间
      preNextTextDelay: 1000 // 开始执行下一段文本前的停顿时间
    })
  }
})

const { text, config } = toRefs(props)
const textArr = ref(typeof text.value === 'string' ? [text.value] : text.value)

const displayText = ref('')
let titleIndex = 0
let isTyping = true

const typewriter = () => {
  const currentText = textArr.value[titleIndex]
  if (isTyping) {
    // 输入
    if (displayText.value.length < currentText.length) {
      displayText.value = currentText.substring(0, displayText.value.length + 1)
      setTimeout(typewriter, config.value.typingDelay)
    } else {
      isTyping = false
      setTimeout(typewriter, config.value.preDeleteDelay)
    }
  } else {
    // 删除
    if (displayText.value.length > 0) {
      displayText.value = displayText.value.substring(0, displayText.value.length - 1)
      setTimeout(typewriter, config.value.deletingDelay)
    } else {
      isTyping = true
      titleIndex = (titleIndex + 1) % textArr.value.length
      setTimeout(typewriter, config.value.preNextTextDelay)
    }
  }
}

onMounted(() => {
  typewriter()
})
</script>

<style scoped>
/* 光标闪烁动画 */
.animate-blink {
  animation: blink 1.3s step-end infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}
</style>