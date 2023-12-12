<script setup>
var menu = [
  {
    name: "Accueil",
    link: "/",
    color: "white",
  },
  {
    name: "Informations",
    link: "/informations",
    color: "white",
  },
  {
    name: "Notre quiz",
    link: "/notre-quiz",
    color: "white",
  },
  {
    name: "Nos défis",
    link: "/nos-defis",
    color: "white",
  },
  {
    name: "Obtenir de l'aide",
    link: "/aide",
    color: "citrus",
  },
];
</script>

<template>
  <nav>
    <div class="nav-container container">
      <img src="../assets/img/logo-pause-connect.svg" />
      <ul class="nav-content">
        <li class="nav-content_link" v-for="(item, index) in menu" :key="index">
          <RouterLink :to="item.link" :class="item.color">{{ item.name }}</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
nav {
  background-color: hsl(206, 66%, 10%);
  position: sticky;
  top: 0;
  z-index: 2;
}

.nav-container {
  height: 60px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
}

.nav-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-xxl);
  text-transform: uppercase;
  font-size: var(--font-base);
  font-weight: 600;
}

.nav-content_link {
  &:after {
    display: block;
    content: "";
    border-bottom: solid 4px var(--citrus-500);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    border-radius: 5rem;
  }

  &:hover:after,
  &:focus {
    transform: scaleX(1);
  }

  &:hover {
    color: var(--citrus-500);
  }
}
.citrus {
  color: hsl(73, 71%, 50%);
}

.white {
  color: #fff;
}
</style>
