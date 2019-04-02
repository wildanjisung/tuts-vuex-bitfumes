<template>
	<div>
		<h1>Hello Students</h1>
		<ul>
			<li v-for="student in students" :key="student.id">
				{{student.name}}
				<i>{{student.games.length}} games he plays</i>
				<button>Team A</button>
				<button>Team B</button>
			</li>
		</ul>
	</div>
</template>

<script>
import data from "../api/data";
export default {
	data() {
		return {
			students: []
		};
	},

	created() {
		this.students = data.getStudents();
	}
}
</script>

<style>

</style>
