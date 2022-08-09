<template>
	<div style="
		overflow: auto;
	" class="
		custom-scroll
	">
		<Navbar />
		<router-view />
	</div>
	<Open />
</template>
<style>
	.grid-layout {
		grid-template-rows: auto 1fr;
	}
	.grid-layout-container {
		grid-template-rows: 1fr auto;
	}
</style>