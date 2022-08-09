<style scoped>
	.doors {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        z-index: -1;
        animation: a 3s ease;
    }
    .door {
        position: absolute;
		width: 100%;
        height: 0;
        bottom: 0;
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
        animation: b 3s ease;
	}
    .other {
        top: 0;
    }
    .background {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-color: #000000;
        z-index: -1;
        animation: c 2s ease;
    }
    @keyframes a {
        0% {
            z-index: 999;
            min-width: 0;
            min-height: .5vw;
        }
        25% {
            min-width: 300vw;
            min-height: 2vw;
        }
        75% {
            min-width: 300vw;
            min-height: 300vw;
        }
        100% {
            z-index: 999;
        }
    }
	@keyframes b {
        0% {
			height: 100%;
		}
        25% {
            height: 50%;
        }
		100% {
			height: 0;
		}
	}
    @keyframes c {
        0% {
            z-index: 999;
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        100% {
            z-index: 999;
            opacity: 0;
        }
    }
</style>
<template>
    <div class="background"></div>
    <div class="doors">
        <div class="door"></div>
        <div class="door other"></div>
    </div>
</template>