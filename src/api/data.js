const students = [
	{
		'id' : 1,
		'name' : 'Hulk',
		'games' : ['Tennis', 'Footbal', 'Volley'],
		'selected' : false
	},
	{
		'id' : 2,
		'name' : 'Thor',
		'games' : ['Tennis', 'Volley'],
		'selected' : false
	},
	{
		'id' : 3,
		'name' : 'Iron Man',
		'games' : ['Tennis', 'Footbal', 'Volley', 'Futsal'],
		'selected' : false
	},
	{
		'id' : 4,
		'name' : 'Vision',
		'games' : ['Tennis', ],
		'selected' : false
	},
	{
		'id' : 5,
		'name' : 'Black Panther',
		'games' : ['Tennis', 'Footbal', 'Volley'],
		'selected' : false
	},
	{
		'id' : 6,
		'name' : 'Loki',
		'games' : ['Tennis', 'Volley'],
		'selected' : false
	},
	{
		'id' : 7,
		'name' : 'Spiderman',
		'games' : ['Tennis', 'Footbal', 'Volley'],
		'selected' : false
	},
	{
		'id' : 8,
		'name' : 'Superman',
		'games' : ['Volley'],
		'selected' : false
	},
]

export default {
	getStudents() { 
		return students;
	}
}