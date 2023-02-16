<script>
    import {pb} from './stores';
    import {user} from './stores';
    import Login from "./login.svelte";
    import Dashboard from "./dashboard.svelte";
</script>

{#if $user}
    <Dashboard />
{:else}
    <Login />
{/if}