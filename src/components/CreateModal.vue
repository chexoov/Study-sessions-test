<template>
  <!-- диалог создания -->
  <el-form ref="ruleFormRef" :model="newCreating" :rules="rules">
    <el-button class="buttonCreate" type="primary" @click="dialogVisibleChange">
      {{ $t("table.button.create") }}
    </el-button>
    <el-dialog v-model="dialogVisible" title="" width="800">
      <div class="dialog-content-header">
        <el-form-item prop="address" style="width: 240px">
          <el-select
            class="dialog-content-header-item"
            v-model="newCreating.address"
            @change="handleChange"
            :placeholder="$t('table.interface.house')"
          >
            <el-option
              v-for="item in getSelectInfo"
              :key="item"
              :label="item.address"
              :value="item.id"
            />
          </el-select>
        </el-form-item>

        <el-form-item prop="apartment_id" style="width: 240px">
          <el-select
            class="dialog-content-header-item"
            v-model="newCreating.apartment_id"
            :placeholder="$t('table.interface.flat')"
          >
            <el-option
              v-for="item in numberHome"
              :key="item"
              :label="item.label"
              :value="item.number"
            />
          </el-select>
        </el-form-item>

        <el-form-item prop="due_date">
          <el-input
            class="dialog-content-header-item"
            v-model="newCreating.due_date"
            type="datetime-local"
            :placeholder="$t('table.interface.term')"
          />
        </el-form-item>
      </div>
      <div class="dialog-content-header">
        <el-form-item prop="applicant.last_name">
          <el-input
            class="dialog-content-header-item"
            v-model="newCreating.applicant.last_name"
            :placeholder="$t('table.interface.surname')"
          />
        </el-form-item>

        <el-form-item prop="applicant.first_name">
          <el-input
            class="dialog-content-header-item"
            v-model="newCreating.applicant.first_name"
            :placeholder="$t('table.interface.name')"
          />
        </el-form-item>

        <el-form-item prop="applicant.patronymic_name">
          <el-input
            class="dialog-content-header-item"
            v-model="newCreating.applicant.patronymic_name"
            :placeholder="$t('table.interface.middle_name')"
          />
        </el-form-item>

        <el-form-item prop="applicant.username">
          <el-input
            class="dialog-content-header-item"
            v-model="newCreating.applicant.username"
            :placeholder="$t('table.interface.phone')"
          />
        </el-form-item>
      </div>
      <div>
        <el-form-item prop="description">
          <textarea
            class="dialog-content-textarea"
            v-model="newCreating.description"
            :placeholder="$t('table.interface.description_application')"
            name=""
            id=""
            cols="93"
            rows="13"
          ></textarea>
        </el-form-item>
      </div>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="submitForm(ruleFormRef)">{{
            $t("table.button.create")
          }}</el-button>
        </div>
      </template>
    </el-dialog>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, computed, reactive } from "vue";
import api from "../api";
import { FormInstance, FormRules } from "element-plus";
import { useValidationRules } from "../valid";

const { rules } = useValidationRules();
const dialogVisible = ref(false);
const dialogVisibleChange = () => {
  console.log(dialogVisible.value);
  dialogVisible.value = !dialogVisible.value;
};

const newCreating = ref({
  address: "",
  premise_id: "",
  apartment_id: "",
  applicant: {
    first_name: "",
    last_name: "",
    patronymic_name: "",
    username: "",
  },
  description: "",
  due_date: "",
  status_id: "1",
});

const ruleFormRef = ref<FormInstance>();

// const rules = reactive<FormRules>({
//   address: [
//     { required: true, validator: valid.checkAddress, trigger: "change" },
//   ],
//   apartment_id: [
//     { required: true, validator: valid.checkApartment, trigger: "change" },
//   ],
//   "applicant.first_name": [
//     { required: true, validator: valid.checkName, trigger: "change" },
//   ],
//   "applicant.last_name": [
//     { required: true, validator: valid.checkLastName, trigger: "change" },
//   ],
//   "applicant.patronymic_name": [
//     { required: true, validator: valid.checkPatronymic, trigger: "change" },
//   ],
//   "applicant.username": [
//     { required: true, validator: valid.ckeckPhone, trigger: "change" },
//   ],
//   description: [
//     { required: true, validator: valid.checkDescription, trigger: "change" },
//   ],
//   due_date: [{ required: true, validator: valid.checkData, trigger: "change" }],
// });

// const checkAddress = (rule: any, value: any, callback: any) => {
//   if (!value) {
//     return callback(new Error('Please choose address'))
//   }
//      callback();
// }

// const checkApartment = (rule: any, value: any, callback: any) => {
//   if (!value) {
//     return callback(new Error('Please choose apartment'))
//   }
//      callback();
// }

// const checkLastName = (rule: any, value: any, callback: any) => {
//   if (!value) {
//     return callback(new Error('Please input last name'))
//   }
//     if (value.length < 3) {
//       return callback(new Error('Last name should be more than 3'))
//     }
//      callback();
// }

// const checkName = (rule: any, value: any, callback: any) => {
//   if (!value) {
//     return callback(new Error('Please input name'))
//   }
//     if (value.length < 3) {
//       return callback(new Error('Name should be more than 3'))
//     }
//      callback();
// }

// const checkPatronymic = (rule: any, value: any, callback: any) => {
//   if (!value) {
//     return callback(new Error('Please input patronymic'))
//   }
//     if (value.length < 3) {
//       return callback(new Error('Patronymic should be more than 3'))
//     }
//      callback();
// }

// const checkData = (rule: any, value: any, callback: any) => {
//   if (!value) {
//     return callback(new Error('Please choose date'))
//   }
//      callback();
// }

// const ckeckPhone = (rule: any, value: any, callback: any) => {
//   if (!value) {
//     return callback(new Error('Please input phone'))
//   }
//     if (value.length < 11) {
//       return callback(new Error('Phone should normal 11 numbers'))
//     }
//      callback();
// }

// const checkDescription = (rule: any, value: any, callback: any) => {
//   if (!value) {
//     return callback(new Error('Please input description'))
//   }
//   if (value.length < 3) {
//     return callback(new Error('Description should be more than 3'))
//   }
// }

// const rules = reactive<FormRules<any>>({
//   address: [
//     { validator: checkAddress, trigger: "blur" },
//   ],
//   apartment_id: [
//     { validator: checkApartment, trigger: "blur" },
//   ],
//   due_date: [
//     { validator: checkData, trigger: "blur" },
//   ],
//   "applicant.last_name": [
//   { validator: checkLastName, trigger: "blur" },
//   ],
//   "applicant.first_name": [
//   { validator: checkName, trigger: "blur" },
//   ],
//   "applicant.patronymic_name": [
//   { validator: checkPatronymic, trigger: "blur" },
//   ],
//   "applicant.username": [
//   { validator: ckeckPhone, trigger: "blur" },
//   ],
//   description: [
//     { validator: checkDescription, trigger: "blur" },
//   ],

// });

const tableData = ref([]);
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;

  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      try {
        api.tickets.createTicket(newCreating.value).then((data) => {
          console.log(data);
        });
      } catch (error) {
        console.error("Ошибка отправки данных:", error);
      }
    } else {
      console.log("error submit!", fields);
    }
  });
};

const getPremise = async () => {
  api.tickets.getPremise().then((data) => {
    tableData.value = data.data.results;
  });
};
getPremise();

const currentPremise = ref("");

const getSelectInfo = computed(() => {
  const res = tableData.value.map((item: any) => {
    return item;
  });
  return res;
});

const handleChange = () => {
  getSelectInfo.value.forEach((item: any) => {
    if (item.id === newCreating.value.address) {
      currentPremise.value = item.id;
      newCreating.value.address = item.address;
      newCreating.value.apartment_id = item.apartment_id;
      newCreating.value.premise_id = currentPremise.value;
    }
  });
  getApartment();
}


const numberHome = ref([]);
const getApartment = async () => {
  api.tickets.getApartments(currentPremise.value).then((data) => {
    numberHome.value = data.data.results;
    newCreating.value.premise_id = currentPremise.value;
    console.log("apartment", data);
  });
};
</script>

<style lang="scss">
.buttonCreate {
  display: block;
  margin-left: auto;
  margin-right: 20px;
}
</style>

<style lang="scss">
.dialog-content-header {
  display: flex;
  padding: 5px;
  justify-content: space-between;
  .dialog-content-header-item {
    border: none;
    padding: 0px 8px;
  }
}

.dialog-content-textarea {
  resize: none;
  opacity: 0.5;
  outline: none;
  padding-top: 20px;
  border: none;
  border-bottom: 2px solid #ccc;
}
</style>
