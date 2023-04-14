<template>
	<div id="live" style="margin-top: 70px;">
		<div style="width: 550px;">

			<div class="prism-player" id="J_prismPlayer" style="position: absolute"></div>
		</div>

	</div>
</template>

<script>
	
	export default {
		name: "livefrom",

		mounted() {
			this.getInit()
		},
		methods: {
			play(event) {
				console.log(event);
			},

			getInit() {
				let player = new Aliplayer({
					id: 'J_prismPlayer',
					width: '100%',
					height: '60vh',
					autoplay: true,
					prismType: 2,
					vid: '',
					isLive: true,
					accId: '',
					accSecret: '',
					apiKey: '',
					//useFlashPrism: true,
					source: "http://boliu.zhaocaipaipai.com/zhaocaipaipai/10001.m3u8?auth_key=1584592170-EADB0F8F5230E132A682F57A1682C2C2-0-5a4229a4b4d4c50dad29cc96c9def811", //视频地址
					showBarTime: 3000000,
					// cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png'
				});
			},
		}
	}
</script>
