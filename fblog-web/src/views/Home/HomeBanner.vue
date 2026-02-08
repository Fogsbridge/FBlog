<template>
  <div class="min-h-screen bg-[url('/images/home-full-screen-2.jpg')] bg-center bg-cover">
    <!-- 点阵遮罩 -->
    <div class="absolute inset-0 dot-mask backdrop-brightness-80 dark:backdrop-brightness-70 transition duration-500" ></div>

    <div class="min-h-screen h-full flex flex-col items-center">
      <div class="h-full flex flex-col justify-center items-center select-none text-white/95 dark:text-white/85 text-shadow-black/50 text-shadow-lg transition-all duration-500">
        <img src="/images/avatar-1.jpg" alt="avatar" class="z-10 size-28 mb-8 rounded-full ring-base-100/20 ring-6 opacity-90 shadow-black/80 shadow-2xl" />
        <span class="z-10 text-3xl md:text-4xl lg:text-5xl mb-6">云桥雾的Blog</span>
        <div class="z-10">
          <span class="h-5 md:h-6 lg:h-7.5 text-xl md:text-2xl lg:text-3xl leading-none mb-10 block px-10">
            {{ displayText }}
            <span class="h-5 md:h-6 lg:h-7.5 absolute ml-1 w-1 rounded-full bg-white/90 dark:bg-white/90 animate-blink"></span>
          </span>
        </div>
      </div>

      <div class="z-10 p-2 mb-6 animate-bounce" @click="scrollToMain">
        <svg class="size-10 fill-white/90 stroke-white/60 stroke-1 drop-shadow-xl drop-shadow-black/50" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// 滚动到 main
const navHeight = ref(0)
onMounted(() => navHeight.value = document.getElementsByTagName('nav')[0].offsetHeight)
const scrollToMain = () => {
  window.scrollTo({
    top: window.innerHeight - navHeight.value,
    behavior: 'smooth'
  })
}

const titleArr = ref([
  'title标题1',
  'title标题2',
  'title标题3',
  'title标题4',
])

// 打字机动画参数
const TYPING_DELAY = 150 // 输入下一个字的延迟时间
const DELETING_DELAY = 80 // 删除下一个字的延迟时间
const PRE_DELETE_DELAY = 1500 // 输入完成后，准备删除前的停顿时间
const PRE_NEXT_TEXT_DELAY = 2500 // 开始执行下一段文本前的停顿时间

const displayText = ref('')
let titleIndex = 0
let isTyping = true

const typewriter = () => {
  const currentText = titleArr.value[titleIndex]
  if (isTyping) {
    // 输入
    if (displayText.value.length < currentText.length) {
      displayText.value = currentText.substring(0, displayText.value.length + 1)
      setTimeout(typewriter, TYPING_DELAY)
    } else {
      isTyping = false
      setTimeout(typewriter, PRE_DELETE_DELAY)
    }
  } else {
    // 删除
    if (displayText.value.length > 0) {
      displayText.value = displayText.value.substring(0, displayText.value.length - 1)
      setTimeout(typewriter, DELETING_DELAY)
    } else {
      isTyping = true
      titleIndex = (titleIndex + 1) % titleArr.value.length
      setTimeout(typewriter, PRE_NEXT_TEXT_DELAY)
    }
  }
}

onMounted(() => {
  typewriter()
})
</script>

<style >
/* 点阵遮罩 */
.dot-mask {
  background-image: radial-gradient(
    circle at 4px 4px,
    rgba(0, 0, 0, 0.1) 2px,
    transparent 1px
  );
  background-size: 8px 8px;
  animation: flow 20s linear infinite;
}

@keyframes flow {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 200px 200px;
  }
}

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