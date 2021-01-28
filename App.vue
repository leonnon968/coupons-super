<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	globalData: {
		api: {
			home: 'https://7173d214-b041-45ce-ae57-46a0a149c865.bspapp.com/http/api/home',
			openid: 'https://7173d214-b041-45ce-ae57-46a0a149c865.bspapp.com/http/api/openid',
		},
		subscribe: 'https://7173d214-b041-45ce-ae57-46a0a149c865.bspapp.com/http/subscribe',
		openid: '',
		shopping: {
			pdd: 'https://7173d214-b041-45ce-ae57-46a0a149c865.bspapp.com/http/shopping/pdd',
			tb: 'https://7173d214-b041-45ce-ae57-46a0a149c865.bspapp.com/http/shopping/tb'
		}
	}

};
</script>

<style>

</style>
