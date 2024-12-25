<template>
  <div class="main">
    <img
      src="../assets/img/076dc3828d4323a8f6f5d083dfaff115.jpeg"
      class="background"
      alt=""
    />

    <div class="main-logo">
      <p class="main-logo__text">Авторизация</p>
    </div>

    <div class="main-box">
      <el-form
        ref="ruleFormRef"
        style="max-width: 600px"
        
        status-icon
        label-width="auto"
        class="demo-ruleForm"
      >
        <div class="main-box-content">
          <p style="margin-left: 10px">Логин или Телефон</p>

          <div class="Authorization">
            <el-form-item class="" label="">
              <el-input
              v-model="phoneData"
                type="text"
                prefix-icon="Phone"
                value= "7"
              />
            </el-form-item>

            <el-form-item label="" >
              <el-input
                v-model="passwordData"
                show-password
                prefix-icon="Lock"
                type="password"
               
              />
              
             
            </el-form-item>
          </div>

          <el-form-item class="Entrance">
            <el-button @click="navigateToList" type="primary" style="color:white" >
              Войти
            </el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const phoneData = ref("")
const passwordData = ref("")
const ruleFormRef = ref()
const router = useRouter();

const navigateToList = () => {
  router.push("/list")
}

</script>


<style lang="scss">
.main-logo__text {
  color : white;
  font-weight: normal;
}

img.background {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.main-box {
  background-color: white;
  position: relative;
  left: 535px;
  width: 340px;
  height: 250px;
  top: 223px;
  gap: 0px;
  opacity: 0px;
  border-radius: 6px;
  .main-box-content {
    padding-top: 30px;
  }
}

.main-logo {
  z-index: 1;
  display: flex;
  position: fixed;
  left: 558px;
  top: 200px;
  border-radius: 6px;
  width: (308px);
  height: (50px);
  background: #3761F3;
  justify-content: center;
}

.Authorization {
  margin-left: 10px;
  margin-right: 10px;
}

.Entrance {
  margin-left: auto;
  margin-right: auto;
  width: 6em;
}
</style>
