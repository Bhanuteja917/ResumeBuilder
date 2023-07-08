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
    height: 100%;
    width: 60px;
    background: #11101d;
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
    border-bottom: 1px solid #11101d;
}
.iconButton {
    background-color: #11101d;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.5s ease;
}
.iconButton:hover {
    background-color: #1a1a2e;
}
</style>