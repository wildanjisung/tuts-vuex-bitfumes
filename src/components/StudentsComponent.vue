<template>
	<div>
		<h1>Hello Students</h1>
		<ul>
			<li v-for="(student,index) in students" :key="student.id">
				{{student.name}}
				<i>{{student.games.length}} games he plays</i>
				<button @click="addTeamMember('A', index)" :disabled="student.selected">Team A</button>
				<button @click="addTeamMember('B', index)" :disabled="student.selected">Team B</button>
			</li>
		</ul>

		<hr>

		<TeamComponent type='A'>Team A</TeamComponent>
		<TeamComponent type='B'>Team A</TeamComponent>
	</div>
</template>

<script>
import TeamComponent from "./TeamComponent";
export default {
	components: {
		TeamComponent
	},
	computed:{
		students(){
			return this.$store.state.students
		}
	},
	methods: {
		addTeamMember(type, index) {
			this.$store.dispatch("addTeamMember", {type, index});
		}
	},
	created() {
		this.$store.dispatch("getStudents")
	}
}
</script>

<style>

</style>
