<template>
	<div>
		<div class="card">
			<p class="icon">👑</p>
			<h1>Trade & view your portfolio</h1>
			<p>
				Click "🎬 End day"<br />
				to start a new day
			</p>
		</div>
	</div>
</template>

<style scoped lang="less">
.icon {
	font-size: 120px;
	line-height: 0px;
	// height: 80px;
	margin: 60px 0 90px 0;
}
.card {
	width: 400px;
	max-width: 100%;
	border-radius: 0;
	margin: 45px auto;
	padding: 50px;
	border: 10px solid var(--green);
	background: #fff9d3;
	h1 {
		margin-top: 0;
		color: var(--green);
		line-height: 40px;
	}
	p {
		color: var(--green);
		font-weight: bold;
	}
	@media (max-width: 500px) {
		padding: 20px;
	}
}
</style>
