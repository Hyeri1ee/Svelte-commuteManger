<!-- App.svelte -->
<script>
	import Topbar from './components/topbar.svelte'
	import CreateTeam from './components/createTeam.svelte';
	import CreateColleague from './components/createColleague.svelte';

	import Router from 'svelte-spa-router';
	const routes = {
		'/': Home,
		'/'

	}
  </script>
  

  <style>

  </style>
  
  <Topbar />
  <CreateTeam/>
  <CreateColleague/>