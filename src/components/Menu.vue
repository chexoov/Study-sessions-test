<template>
    
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <button @click="openDropdown" class="buttonCollapse">
      <el-icon>
        <ArrowLeft v-if="!isCollapse" />
        <ArrowRight style="border-radius: 100%" v-if="isCollapse" />
      </el-icon>
    </button>

    <h3>Сим центр</h3>

    <el-menu-item index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Расписание</span>
      </template>
    </el-menu-item>

    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Учебные сессии</template>
    </el-menu-item>

    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <template #title>Список комнат</template>
    </el-menu-item>

    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Пользователи</template>
    </el-menu-item>

    <el-menu-item index="5">
      <el-icon><setting /></el-icon>
      <template #title>Учебные группы</template>
    </el-menu-item>

    <el-menu-item index="6">
      <el-icon><setting /></el-icon>
      <template #title>Список устройств</template>
    </el-menu-item>

    <el-menu-item index="7">
      <el-icon><setting /></el-icon>
      <template #title>Настройки системы</template>
    </el-menu-item>

    <el-menu-item index="8">
      <el-icon><setting /></el-icon>
      <template #title>Архив</template>
    </el-menu-item>
  </el-menu>

  <router-link to="/list">Перейти на главную</router-link>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isCollapse = ref(false);

const openDropdown = () => {
  isCollapse.value = !isCollapse.value;
};

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.buttonCollapse {
  margin: auto;
  width: 50px;
  height: 20px;
  border-radius: 10px 10px 10px 10px;
 
}
</style>
