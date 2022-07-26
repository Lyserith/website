<template>
	<div class="select-none sticky top-0 z-20">
		<header class="absolute w-full custom-header">
			<div class="max-w-7xl mx-auto px-2 sm:px-4 md:flex md:justify-between lg:px-8">
				<nav class="hidden md:flex md:py-2 md:space-x-4 lg:space-x-8" aria-label="Global navigation">
					<router-link
						v-for="link in links.to"
						:to=link.to
						class="
							custom-button
							rounded-md
							py-2
							px-3
							inline-flex
							items-center
							focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white
						"
					>
						{{ link.text }}
					</router-link>
					<a
						v-for="link in links.href"
						:href=link.href
						class="
							custom-button
							rounded-md
							py-2
							px-3
							inline-flex
							items-center
							focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white
						"
						rel="noopener"
					>
						<span class="mr-2">{{ link.text }}</span><heroicons-outline-external-link class="h-5 w-5" />
					</a>
				</nav>
				<div class="relative h-14 flex md:max-w-md md:w-full lg:max-w-lg">
					<div class="w-8">
					</div>
					<div class="relative z-0 flex-1 flex lg:gap-2 items-center justify-center md:justify-end">
					</div>
					<div class="relative z-10 flex items-center md:hidden">
						<button
							type="button"
							class="
								custom-button
								rounded-md
								p-2
								inline-flex
								items-center
								justify-center
								focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white
							"
							aria-controls="mobile-menu"
							:aria-expanded="isOpen"
							@click="isOpen = !isOpen"
						>
							<span class="sr-only">Open menu</span>
							<heroicons-outline-menu :class="{ hidden: isOpen, block: !isOpen }" aria-hidden="true" />
							<heroicons-outline-x :class="{ block: isOpen, hidden: !isOpen }" aria-hidden="true" />
						</button>
					</div>
				</div>
			</div>
			<transition
				enter-active-class="transition transform-gpu duration-300 ease-out"
				enter-from-class="translate-y-4 opacity-0"
				enter-to-class="translate-x-0 opacity-100"
			>
				<nav v-if="isOpen" id="mobile-menu" class="md:hidden" aria-label="Global navigation">
					<div class="pt-2 pb-3 px-2 sm:px-4 space-y-1 text-center">
						<router-link
							v-for="link in links.to"
							:to=link.to
							class="
								custom-button-mobile
								block
								rounded-md
								py-2
								px-3
								text-base
								focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white
							"
							@click="isOpen = !isOpen"
						>
							{{ link.text }}
						</router-link>
						<a
							v-for="link in links.href"
							:href=link.href
							class="
								custom-button-mobile

								block
								rounded-md
								py-2
								px-3
								text-base
								focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white
							"
							rel="noopener"
							@click="isOpen = !isOpen"
							><span class="mr-2">{{ link.text }}</span><heroicons-outline-external-link class="h-5 w-5 inline-block"
						/></a>
					</div>
				</nav>
			</transition>
		</header>
	</div>
</template>
<script setup lang="ts">
	import { ref } from 'vue'
	import { useBreakpoints, breakpointsTailwind, whenever, onClickOutside } from '@vueuse/core'
	const breakpoints = useBreakpoints(breakpointsTailwind)
	const lgAndLarger = breakpoints.greater('md')
	const isOpen = ref(false)
	const searchElement = ref()
	const isSearchOpen = ref(false)
	const searchScrollPosition = ref(-1)
	whenever(lgAndLarger, () => (isOpen.value = false))
	onClickOutside(searchElement, () => {
		isSearchOpen.value = false
		searchScrollPosition.value = -1
	})
	const links = {
		// to: [
		// 	{
		// 		to: '/',
		// 		text: 'Home'
		// 	}
		// ],
		href: [
			{
				href: 'https://github.com/Lyserith',
				text: 'Github'
			}
		],
	}
</script>
<style>
	#search::-webkit-search-cancel-button {
		display: none
	}
	.custom-button {
		color: #fff;
		transition: 75ms;
	}
	.custom-button:hover {
		color: #ffffff99;
	}
	.custom-button-mobile {
		transition: 75ms;
		color: #fff;
		background-color: #00000099;
	}
	.custom-button-mobile:hover {
		background-color: #000000aa;
	}
	.custom-header {
		background-color: #00000006;
		transition: 100ms;
	}
	.custom-header:hover {
		background-color: #00000066;
	}
</style>