<template>
  <div class="app">
    <nav class="navbar navbar-dark bg-dark navbar-expand">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/movements"
            >Movimientos</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/automatic-purchase"
            >Compra automática</router-link
          >
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
