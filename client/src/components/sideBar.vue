<template>
        <div class="sidebar">
            <div class="sidebar-header">
                <img src="../assets/logo.png" alt="logo" class="logo">
            </div>
            <hr class="horizontalBreak">
            <div class="sidebar-menu">
                <div class="menu">
                  <button class="iconButton">
                    <span class="material-symbols-outlined">person</span>
                  </button>
                  <button class="iconButton">
                    <span class="material-symbols-outlined">school</span>
                  </button>
                  <button class="iconButton">
                    <span class="material-symbols-outlined">work</span>
                  </button>
                  <button class="iconButton">
                    <span class="material-symbols-outlined">trophy</span>
                  </button>
                </div>
            </div>
        </div>
</template>

<style scoped>
.sidebar {
    position: fixed;
    height: 100%;
    width: 60px;
    background: var(--primary-700);
    transition: all 0.5s ease;
    z-index: 999;
}
.menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    padding-top: 0.5rem;
    margin: auto;
    row-gap: 1rem;
}
.material-symbols-outlined {
  font-size: 2rem;
  color: aliceblue;
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 200,
  'opsz' 48
}
.horizontalBreak {
    width: 96%;
    height: 0.5px;
    background-color: aliceblue;
    border: none;
    border-radius: 50%;
    margin: 0 auto;
}
.logo {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--primary-700);
}
.iconButton {
    background-color: var(--primary-700);
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.5s ease;
}
.iconButton:hover {
    background-color: var(--primary-600);
    border-radius: 50%;
    box-shadow: 1px 1px 5px var(--primary-600);
}
</style>