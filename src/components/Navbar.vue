<style scoped>
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
<template>
	<div class="select-none sticky top-0 z-20">
		<header class="absolute w-full custom-header">
			<div class="max-w-7xl mx-auto px-4 flex justify-between lg:px-8">
				<nav class="flex py-2 space-x-4 lg:space-x-8" aria-label="Global navigation">
					<router-link
						v-for="link in links.to" :key="link"
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
						v-for="link in links.href" :key="link"
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
			</div>
		</header>
	</div>
</template>
<script lang="ts">
	export default {
		data() {
			return {
				open: false,
				links: {
					to: [
						{
							to: '/',
							text: 'Home'
						}
					],
					href: [
						{
							href: 'https://github.com/Lyserith',
							text: 'Github'
						}
					]
				}
			}
		}
	}
</script>