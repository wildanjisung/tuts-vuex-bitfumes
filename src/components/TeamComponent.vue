<template>
	<div>
		<h1>Team {{type}}</h1>

		<ul>
			<li v-for="(member,index) in team" :key="member.id">
				{{member.name}}
				<button @click="removeFromTeam(type,index,member)">X</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ["type"],
	methods:{
		removeFromTeam(type,index,member){
			this.$store.dispatch('removeFromTeam', {type,index,member});
		}
	},
	computed: {
		team() {
			return this.type === "A" ? this.$store.state.teamA : this.$store.state.teamB;
		}
	}
}
</script>

<style>

</style>
