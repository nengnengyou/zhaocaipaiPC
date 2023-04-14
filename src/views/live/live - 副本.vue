<template>
	<div id="live" style="margin-top: 70px;">
		<div style="width: 550px;">

			<ali-player @play="play($event)" 
			:autoplay="true" 
			:isLive="true" 
			:rePlay="false" 
			:showBuffer="true" 
			showBarTime="5000"
			 width="500px" 
			 height="400px" 
			 controlBarVisibility="hover" 
			 source="http://player.alicdn.com/video/aliyunmedia.mp4"
			 :skinLayout='skinLayout'
			 ></ali-player>
		</div>

	</div>
</template>

<script>
	import aliplayer from "./AliPlayer.vue";
	export default {
		name: "live",
		data() {
			return {
				skinLayout: [{
						name: "bigPlayButton",
						align: "blabs",
						x: 30,
						y: 80
					},
					{
						name: "H5Loading",
						align: "cc"
					}, {
						name: "errorDisplay",
						align: "tlabs",
						x: 0,
						y: 0
					}, {
						name: "infoDisplay"
					}, {
						name: "tooltip",
						align: "blabs",
						x: 0,
						y: 56
					},
					{
						name: "thumbnail"
					},
					{
						name: "controlBar",
						align: "blabs",
						x: 0,
						y: 0,
						children: [{
								name: "progress",
								align: "blabs",
								x: 0,
								y: 44
							},
							{
								name: "playButton",
								align: "tl",
								x: 15,
								y: 12
							},
							{
								name: "timeDisplay",
								align: "tl",
								x: 10,
								y: 7
							},
							{
								name: "fullScreenButton",
								align: "tr",
								x: 10,
								y: 12
							},
							{
								name: "subtitle",
								align: "tr",
								x: 15,
								y: 12
							},
							{
								name: "setting",
								align: "tr",
								x: 15,
								y: 12
							},
							{
								name: "volume",
								align: "tr",
								x: 5,
								y: 10
							},
							{
								name: "snapshot",
								align: "tr",
								x: 10,
								y: 12
							}
						]
					}
				],
			}
		},

		components: {
			"ali-player": aliplayer
		},
		methods: {
			play(event) {
				console.log(event);
			}
		}
	}
</script>
