<script lang="ts">
    import {page} from '$app/stores';
</script>

<div class="error">
    <h1>
        {$page.status}: {$page.error?.message || 'Unknown error'}
    </h1>
</div>

<style>
.error {
    display: grid;
    height: 100%;
    place-content: center;
}
</style>