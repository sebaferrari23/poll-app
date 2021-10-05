<script>
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'
</script>

<div class="overflow-hidden min-h-full flex flex-col items-stretch">
  <Header />
  <main role="main" class="flex-grow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <slot></slot>
    </div>
  </main>
  <Footer />
</div>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>