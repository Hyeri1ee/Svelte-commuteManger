<!-- Appbar.svelte -->
<script>
    const appTitle = 'Company Manager v1'
  </script>
  
  <div class="appbar">
    <h1 class="title">{appTitle}</h1>
  </div>
  
  <style>
    .appbar {
      background-color: rgb(219, 166, 40);
      padding: 8px;
    }
  
    .appbar > .title {
      text-align: center;
      color: white;
    }
  </style>