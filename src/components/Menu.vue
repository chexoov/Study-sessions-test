<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <div style="display: flex; justify-content: space-between">
      <h3>{{$t("table.menu.logo")}}</h3>

      <el-button
        @click="openDropdown"
        class="buttonCollapse"
        type="info"
        circle
      >
        <template #icon > 
        <el-icon style="padding-left: 5px;">
          <ArrowLeft v-if="!isCollapse" />
          <ArrowRight v-if="isCollapse" />
        </el-icon>
    </template>
      </el-button>
    </div>

    <el-menu-item index="1">
      <!-- <el-icon><Calendar /></el-icon> -->
      <img src="/schedule.png" alt="" />
      <template #title> {{ $t("table.menu.schedule") }} </template>
    </el-menu-item>

    <el-menu-item index="2">
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.8971 2.99546C12.1176 2.87781 12.3824 2.87781 12.6029 2.99546L23.8529 8.99546C24.0973 9.12581 24.25 9.38024 24.25 9.65723C24.25 9.93421 24.0973 10.1886 23.8529 10.319L12.6029 16.319C12.3824 16.4366 12.1176 16.4366 11.8971 16.319L0.647059 10.319C0.402661 10.1886 0.25 9.93421 0.25 9.65723C0.25 9.38024 0.402661 9.12581 0.647059 8.99546L11.8971 2.99546ZM2.59375 9.65723L12.25 14.8072L21.9062 9.65723L12.25 4.50723L2.59375 9.65723Z"
          fill="#999999"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.5883 9.30428C11.7832 8.9388 12.2375 8.80053 12.603 8.99546L18.228 11.9955C18.4724 12.1258 18.625 12.3802 18.625 12.6572V23.1572C18.625 23.5714 18.2892 23.9072 17.875 23.9072C17.4608 23.9072 17.125 23.5714 17.125 23.1572V13.1072L11.8971 10.319C11.5316 10.1241 11.3933 9.66976 11.5883 9.30428Z"
          fill="#999999"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.62501 10.3041C4.03922 10.3041 4.37501 10.6399 4.37501 11.0541V16.1634L4.37665 16.1656L4.37661 16.1656C4.93281 16.9128 7.399 19.7822 12.25 19.7822C17.101 19.7822 19.5672 16.9128 20.1234 16.1656L20.125 16.1635V11.0541C20.125 10.6399 20.4608 10.3041 20.875 10.3041C21.2892 10.3041 21.625 10.6399 21.625 11.0541V16.1729L21.625 16.176C21.6236 16.497 21.5181 16.8088 21.3243 17.0645C20.6202 18.009 17.7616 21.2822 12.25 21.2822C6.73838 21.2822 3.87978 18.009 3.17574 17.0645C2.98193 16.8088 2.87637 16.497 2.87501 16.176L2.875 16.1729H2.87501V11.0541C2.87501 10.6399 3.21079 10.3041 3.62501 10.3041Z"
          fill="#999999"
        />
      </svg>

      <template #title>{{ $t("table.menu.trainingSessions") }}</template>
    </el-menu-item>

    <el-menu-item index="3">
      <img src="/listOfRooms.png" alt="" />
      <template #title>{{ $t("table.menu.listOfRooms") }}</template>
    </el-menu-item>

    <el-menu-item index="4">
      <img src="/users.png" alt="" />
      <template #title>{{ $t("table.menu.users") }}</template>
    </el-menu-item>

    <el-menu-item index="5">
      <img src="/studyGroups.png" alt="" />
      <template #title>{{ $t("table.menu.studyGroups") }}</template>
    </el-menu-item>

    <el-menu-item index="6">
      <img src="/listOfDevices.png" alt="" />
      <template #title>{{ $t("table.menu.listOfDevices") }}</template>
    </el-menu-item>

    <el-menu-item index="7">
      <img src="/settings.png" alt="" />
      <template #title>{{ $t("table.menu.settings") }}</template>
    </el-menu-item>

    <el-menu-item index="8">
      <img src="/archive.png" alt="" />
      <template #title>{{ $t("table.menu.archive") }}</template>
    </el-menu-item>

    <div class="dropdown">
      <div v-if="!isCollapse" class="avatar">
        <!-- <div>ssf</div> -->
        <div class="person">
          <span>Барнаби Мармадюк </span>
          <!-- <span>Барнаби</span> -->
        </div>
        <div class="avatar__img">БМ</div>
      </div>

      <el-menu-item @click="navigateToLogin" index="10" class="exit">
        <img src="/exit.png" alt="" />
        <span v-if="!isCollapse">{{$t("table.menu.exit")}}</span>
      </el-menu-item>

      <el-menu-item index="11">
        <svg
          data-v-f414ea64=""
          viewBox="0 0 24 24"
          width="1.2em"
          height="1.2em"
          style="margin-right: 5px"
        >
          <path
            d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"
          ></path>
        </svg>
        <template v-if="!isCollapse" #title>
          <LangChanger />
        </template>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import LangChanger from "./LangChanger.vue";

const isCollapse = ref(false);
const router = useRouter();

const navigateToLogin = () => {
  router.push("/login");
};

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

<style scoped>
.el-menu-item {
  height: 40px;
}
img {
  width: 25px;
  margin-right: 5px;
}

svg {
  margin-right: 5px;
}

.exit {
  margin-bottom: 10px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 420px;
}

.buttonCollapse {
  box-sizing: border-box;
  margin-top: 19px;
  margin-right: 0px;
  background: #2f3144;
  width: 20px;
  height: 20px;
  border-radius: 25px 25px 25px 25px;
  border: 1px solid black;
}

.avatar {
  display: flex;
  margin-left: 12px;
  margin-bottom: 10px;
  border: 0px solid black;
  box-sizing: border-box;
  border-radius: 5px 5px 5px 5px;
  justify-content: space-between;
  box-shadow: 0px 0px 10px grey;
  align-items: center;
  height: 50px;
  width: 175px;
}

.person {
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
  display: flex;
  align-items: center;
  width: 70%;
}



.avatar__img {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0 5px 0 5px;
  border: 1px solid black;
  width: 35px;
  height: 35px;
  border-radius: 25px 25px 25px 25px;
  background: #2b4ec5;
  color: white;
}

.dropdown {
  margin-top: 110px;
}
</style>
