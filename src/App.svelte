<script>
	import Appbar from "./components/Appbar.svelte"
	export let name;
</script>

<style>

	h1 {
		color : purple;
	}

</style>

<Appbar/>
<h1>Hello {name}!</h1>