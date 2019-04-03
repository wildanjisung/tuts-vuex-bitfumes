<template>
	<div>
		<h1>Match Details</h1>
		<p v-if="teamACount > 4">
			{{ matchDate }}
		</p>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
	computed: {
		...mapState({matchDate: state => state.info.matchDate}),
		...mapGetters(["teamACount"])
	}
}
</script>

<style>

</style>
