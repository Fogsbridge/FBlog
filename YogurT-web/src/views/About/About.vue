<template>
  <div class="max-w-8xl mx-auto py-6">
    <div class="mx-auto grid md:grid-cols-6 gap-4">

      <div class="md:col-span-2 group transition duration-300">
        <div class="card h-full bg-linear-to-bl from-teal-400 to-cyan-400 bg-clip-padding text-white">
          <h2 class="text-lg md:mb-4">hi, 我是</h2>
          <div class="flex flex-col items-center justify-center gap-6 py-8 md:py-0">
            <div class="relative size-36 rounded-full duration-400 group-hover:scale-110 group-hover:bg-primary/70">
              <img src="/images/avatar-1.jpg" alt="云桥雾" class="border-base-content/10 border-8 rounded-full"/>
              <div class="group-hover:opacity-0 duration-300 absolute z-1 w-1/5 h-1/5 bg-green-400 rounded-full bottom-1/15 right-1/15 border-base-200 border-5"></div>
            </div>
            <div>
              <p class="text-4xl font-bold">云桥雾</p>
            </div>
            <div class="flex flex-row gap-8">
              <a href="/" class="size-8 fill-current duration-200 hover:scale-130">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a href="/" class="size-8 fill-current duration-200 hover:scale-130">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a href="/" class="size-8 fill-current duration-200 hover:scale-130">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5v14c0 2.2091 1.79086 4 4 4h14c2.2091 0 4 -1.7909 4 -4V5c0 -2.20914 -1.7909 -4 -4 -4H5Zm-0.33429 3.5c-0.17536 0.06527 -0.32332 0.19509 -0.40968 0.3683 -0.12689 0.2545 -0.09892 0.55889 0.07223 0.78601l5.61418 7.45029 -5.91591 6.344c-0.01551 0.0167 -0.03011 0.0338 -0.04382 0.0514h2.04691l4.82948 -5.179 3.7133 4.9278c0.0871 0.1155 0.2043 0.2018 0.3364 0.2512h4.4223c0.1748 -0.0654 0.3224 -0.195 0.4085 -0.3679 0.1269 -0.2545 0.099 -0.5589 -0.0722 -0.786l-5.6142 -7.4503L20.0173 4.5h-2.051l-4.8298 5.17932 -3.7133 -4.92774c-0.08729 -0.11583 -0.20496 -0.20227 -0.3375 -0.25158H4.66571ZM15.5454 18.0475 6.4315 5.95294h2.01878L17.5642 18.0475h-2.0188Z"></path></svg>
              </a>
              <a href="/" class="size-8 fill-current duration-200 hover:scale-130">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="md:col-span-4">
        <div class="card text-white font-bold bg-[url('/images/about/img-2.png')] bg-center bg-cover">
          <div class="absolute bg-black/15 h-full top-0 left-0 w-full rounded-2xl"></div>
          <div class="z-1">
            <h2 class="text-2xl text-center md:text-left md:ml-8 mt-2 mb-8">站点统计</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-14 mb-6 md:mb-10">
              <div class="text-center">
                <h2 class="text-base md:text-lg mb-3">今日访问</h2>
                <p class="text-3xl md:text-4xl">99</p>
              </div>
              <div class="text-center">
                <h2 class="text-base md:text-lg mb-3">昨日访问</h2>
                <p class="text-3xl md:text-4xl">230</p>
              </div>
              <div class="text-center">
                <h2 class="text-base md:text-lg mb-3">总访问量</h2>
                <p class="text-3xl md:text-4xl">94325</p>
              </div>
              <div class="text-center">
                <h2 class="text-base md:text-lg mb-3">建站天数</h2>
                <p class="text-3xl md:text-4xl">365</p>
              </div>
              <div class="text-center">
                <h2 class="text-base md:text-lg mb-3">文章数</h2>
                <p class="text-3xl md:text-4xl">23</p>
              </div>
              <div class="text-center">
                <h2 class="text-base md:text-lg mb-3">分类数</h2>
                <p class="text-3xl md:text-4xl">16</p>
              </div>
              <div class="text-center">
                <h2 class="text-base md:text-lg mb-3">标签数</h2>
                <p class="text-3xl md:text-4xl">20</p>
              </div>
              <div class="text-center">
                <h2 class="text-base md:text-lg mb-3">评论数</h2>
                <p class="text-3xl md:text-4xl">666</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FlipCard axis="y" class="md:col-span-3 duration-500 h-60 md:h-80">
        <template #front>
          <div class="hover-3d w-full h-full">
            <div class="card relative">
              <h2 class="text-lg mb-4">MBTI</h2>
              <p class="text-4xl md:text-5xl">INTP <span class="text-primary font-bold">逻辑学家</span></p>
              <img class="h-50" src="/images/about/16personalities/desktop-intp.svg" alt="intp"/>
            </div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
        </template>
        <template #back>
          <div class="hover-3d w-full h-full">
            <div class="card relative">
              <h2 class="text-lg mb-4">MBTI<span class="mx-2 font-bold">·</span><span class="font-bold text-primary">INTP</span></h2>
              <img class="absolute -bottom-8 -right-6 h-40 md:h-60 -z-1" src="/images/about/16personalities/svg/intp.svg" alt="intp"/>
              <p class="text-xl">这是一段文本 巴拉巴拉~</p>
            </div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
        </template>
      </FlipCard>

      <FlipCard axis="y" class="md:col-span-3 duration-500 h-60 md:h-80">
        <template #front>
          <div class="hover-3d w-full h-full">
            <div class="card bg-[url('/images/about/yuanshen-1.png')] bg-cover bg-center bg-origin-padding bg-no-repeat">
              <div class="absolute bg-black/15 top-0 left-0 w-full h-full -z-1"></div>
              <h2 class="text-white text-lg mb-4">游戏</h2>
              <p class="text-white text-5xl md:text-6xl font-bold text-shadow-lg">原神</p>
            </div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
        </template>
        <template #back>
          <div class="hover-3d w-full h-full">
            <div class="card bg-[url('/images/about/yuanshen-2.jpg')] bg-cover bg-center bg-origin-padding bg-no-repeat">
              <div class="absolute bg-black/15 top-0 left-0 w-full h-full -z-1"></div>
              <h2 class="text-white text-lg mb-4">游戏</h2>
              <p class="text-white text-4xl md:text-5xl font-bold text-shadow-lg mb-4">原神</p>
              <p class="text-white text-2xl font-bold text-shadow-lg">UID 1234567</p>
            </div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
        </template>
      </FlipCard>

      <FlipCard axis="y" class="md:col-span-2 duration-500 h-60 md:h-80">
        <template #front>
          <div class="hover-3d w-full h-full">
            <div class="card bg-[url('/images/about/gta-1.png')] bg-cover bg-center bg-origin-padding bg-no-repeat">
              <div class="absolute bg-black/15 top-0 left-0 w-full h-full -z-1"></div>
              <h2 class="text-white text-lg text-shadow-lg mb-4">游戏</h2>
              <h2 class="text-white text-5xl text-shadow-lg font-bold">GTA</h2>
            </div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
        </template>
        <template #back>
          <div class="hover-3d w-full h-full">
            <div class="card bg-[url('/images/about/gta-1.png')] bg-cover bg-center bg-origin-padding bg-no-repeat">
              <div class="absolute bg-black/15 top-0 left-0 w-full h-full -z-1"></div>
              <h2 class="text-white text-lg text-shadow-lg mb-4">游戏</h2>
              <h2 class="text-white text-5xl text-shadow-lg font-bold">道德与法制</h2>
            </div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
        </template>
      </FlipCard>

      <FlipCard axis="y" class="md:col-span-2 duration-500 h-60 md:h-80">
        <template #front>
          <div class="hover-3d w-full h-full">
            <div class="card bg-[url('/images/about/guangyu-1.jpg')] bg-cover bg-center bg-origin-padding bg-no-repeat">
              <div class="absolute bg-black/15 top-0 left-0 w-full h-full -z-1"></div>
              <h2 class="text-white text-lg text-shadow-lg mb-4">游戏</h2>
              <h2 class="text-white text-5xl text-shadow-lg font-bold">光·遇</h2>
            </div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
        </template>
        <template #back>
          <div class="hover-3d w-full h-full">
            <div class="card bg-[url('/images/about/guangyu-1.jpg')] bg-cover bg-center bg-origin-padding bg-no-repeat">
              <div class="absolute bg-black/15 top-0 left-0 w-full h-full -z-1"></div>
              <h2 class="text-white text-lg text-shadow-lg mb-4">游戏</h2>
              <h2 class="text-white text-5xl text-shadow-lg font-bold">光遇</h2>
            </div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
        </template>
      </FlipCard>

      <FlipCard axis="y" class="md:col-span-2 duration-500 h-60 md:h-80">
        <template #front>
          <div class="hover-3d w-full h-full">
            <div class="card bg-[url('/images/about/lol-1.jpg')] bg-cover bg-center bg-origin-padding bg-no-repeat">
              <div class="absolute bg-black/15 top-0 left-0 w-full h-full -z-1"></div>
              <h2 class="text-white text-lg text-shadow-lg mb-4">游戏</h2>
              <h2 class="text-white text-5xl text-shadow-lg font-bold">英雄联盟</h2>
            </div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
        </template>
        <template #back>
          <div class="hover-3d w-full h-full">
            <div class="card bg-[url('/images/about/lol-1.jpg')] bg-cover bg-center bg-origin-padding bg-no-repeat">
              <div class="absolute bg-black/15 top-0 left-0 w-full h-full -z-1"></div>
              <h2 class="text-white text-lg text-shadow-lg mb-4">游戏</h2>
              <h2 class="text-white text-5xl text-shadow-lg font-bold mb-2">锐雯</h2>
              <h2 class="text-white text-4xl text-shadow-lg font-bold">Riven</h2>
            </div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
        </template>
      </FlipCard>

      <div class="md:col-span-2 md:row-span-2 h-80">
        <div class="h-full card bg-[url('/images/about/music-1.jpg')]  bg-cover bg-center bg-origin-padding bg-no-repeat">
          <div class="absolute bg-black/25 h-full top-0 left-0 w-full rounded-2xl"></div>
          <div class="z-1">
            <h2 class="text-lg text-white mb-2">音乐</h2>
            <div class="flex flex-col h-full justify-around text-white font-bold">
              <p class="text-4xl text-shadow-lg">Hiphop</p>
              <p class="text-4xl text-shadow-lg">纯音乐</p>
              <p class="text-4xl text-shadow-lg">梦核 / 怪核 / 后室</p>
              <p class="text-4xl text-shadow-lg">欧美</p>
            </div>
          </div>
        </div>
      </div>

      <div class="md:col-start-3 md:col-span-4">
        <div class="card h-full bg-teal-400! bg-clip-padding">
          <h2 class="text-white text-lg mb-4">最近在干嘛</h2>
          <p class="text-white text-4xl">
            忙！！！！！！！！！！！！！
          </p>
        </div>
      </div>

      <div class="md:col-start-3 md:col-span-4">
        <div class="card h-full bg-indigo-400! bg-clip-padding">
          <h2 class="text-white text-lg mb-4">感兴趣的领域</h2>
          <p class="text-white text-4xl">
            睡觉，谁都不要吵我睡觉！！
          </p>
        </div>

      </div>

      <div class="md:col-span-6">
        <div class="card min-h-60">
          <h2 class="text-3xl mt-2 mb-4">关于我</h2>
          <p class="text-lg mb-2">
            这是一段文本
            这是一段文本
            这是一段文本
            这是一段文本
            这是一段文本
            这是一段文本
            这是一段文本
            这是一段文本
            这是一段文本
            这是一段文本
            这是一段文本
          </p>
          <p class="text-lg">
            啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧 啊吧
          </p>
        </div>
      </div>

<!--      <div>-->
<!--        <div>打赏作者</div>-->
<!--      </div>-->

<!--      <div>-->
<!--        <div>技能</div>-->
<!--      </div>-->

    </div>
  </div>

</template>

<script setup>
import FlipCard from '@/components/base/FlipCard.vue'
</script>

<style scoped>
@reference "@/assets/styles/index.css";

.card {
  @apply bg-base-100 rounded-2xl border border-base-content/10 wrap-anywhere py-4 px-8;
}

/*
  覆盖掉 hover-3d 原来的放大效果，改为缩小
 */
.hover-3d:hover > :first-child, .md\:hover-3d:hover > :first-child {
  @apply scale-97;
}
</style>