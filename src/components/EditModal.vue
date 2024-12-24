<template>
  <el-form ref="ruleFormRef" :model="newEditing" :rules="rules">
    <el-dialog
      v-model="dialogVisibleEdit"
      @close="$emit('closeDialog')"
      destroy-on-close
      title=""
      width="800"
    >
      <p>Заявка №{{ newEditing.number }} (от {{ newEditing.created }})</p>
      <div class="dialog-content-header">
        <el-form-item prop="address"  style="width: 240px" >
          <el-select
            class="dialog-content-header-item"
            v-model="newEditing.address"
            @change="handleChange"
          >
            <el-option
              class=""
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
            v-model="newEditing.apartment_id"
            placeholder="Квартира"
          >
            <el-option
              v-for="item in getNumberHome"
              :key="item"
              :label="item.label"
              :value="item.number"
            />
          </el-select>
        </el-form-item>

        <el-form-item prop="due_date">
          <el-input
            class="dialog-content-header-item"
            v-model="newEditing.due_date"
            disabled
          />
        </el-form-item>
      </div>
      <div class="dialog-content-header">
        <el-form-item prop="aplicant.last_name">
          <el-input
            class="dialog-content-header-item"
            v-model="newEditing.applicant.last_name"
            placeholder="Фамилия"
          />
        </el-form-item>

        <el-form-item prop="aplicant.first_name">
          <el-input
            class="dialog-content-header-item"
            v-model="newEditing.applicant.first_name"
            placeholder="Имя"
          />
        </el-form-item>

        <el-form-item prop="aplicant.patronymic_name">
          <el-input
            class="dialog-content-header-item"
            v-model="newEditing.applicant.patronymic_name"
            placeholder="Отчество"
          />
        </el-form-item>

        <el-form-item prop="aplicant.username">
          <el-input
            class="dialog-content-header-item"
            v-model="newEditing.applicant.username"
            placeholder="Телефон"
          />
        </el-form-item>
      </div>
      <div>
        <el-form-item prop="description">
          <textarea
            class="dialog-content-textarea"
            v-model="newEditing.description"
            placeholder="Описание заявки"
            name=""
            id=""
            cols="93"
            rows="13"
          ></textarea>
        </el-form-item>
      </div>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="patchEdit(ruleFormRef)"
            >{{
            $t("table.button.create")
          }}</el-button
          >
        </div>
      </template>
    </el-dialog>
  </el-form>
</template>

<script setup lang="ts">
import axios from "axios";
import { computed, ref, toRefs } from "vue";
import { useListData } from "../stores/ListData";
import { FormInstance } from "element-plus";

import { useValidationRules } from "../valid";

import api from "../api";

const { rules } = useValidationRules();

const props = defineProps({
  openDialog: {
    type: Boolean,
    default: false,
  },
});

const ruleFormRef = ref<FormInstance>();

const dialogVisibleEdit = ref(props.openDialog);

const store = useListData();

const newEditing = ref({
  premise_id: "",

  number: "",
  address: "",
  
  created: "",
  id: "",

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

const getTicketFromStore = () => {
  newEditing.value.premise_id = store.editingTicketData.premise_id;
  newEditing.value.address = store.editingTicketData.address;
  newEditing.value.numberHome = store.editingTicketData.numberHome;
  newEditing.value.number = store.editingTicketData.number;
  newEditing.value.created = store.editingTicketData.created;
  newEditing.value.id = store.editingTicketData.id;
  newEditing.value.apartment_id = store.editingTicketData.numberHome;
  newEditing.value.due_date = store.editingTicketData.due_date;
  newEditing.value.applicant.first_name =
    store.editingTicketData.applicant.first_name;
  newEditing.value.applicant.last_name =
    store.editingTicketData.applicant.last_name;
  newEditing.value.applicant.patronymic_name =
    store.editingTicketData.applicant.patronymic_name;
  newEditing.value.applicant.username =
    store.editingTicketData.applicant.username;
  newEditing.value.description = store.editingTicketData.description;
  newEditing.value.status_id = store.editingTicketData.status_id;
};
getTicketFromStore();

const tableData = ref([]);

const getPremise = async () => {
  api.tickets.getPremise().then((data) => {
    tableData.value = data.data.results;
  });
};
getPremise();

// !!
const patchEdit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      try {
        api.tickets
          .updateTicket(newEditing.value.id, newEditing.value)
          .then((data) => {
            console.log("успешно", data);
          });
      } catch (error) {
        console.error("Ошибка отправки данных:", error);
      }
    } else {
      console.log("error submit!", fields);
    }
  });
};

const currentPremise = ref("");
const getNumberHome = ref([]);
const getApartment = async () => {
  api.tickets.getApartments(currentPremise.value).then((data) => {
    getNumberHome.value = data.data.results;
  });
};

const getSelectInfo = computed(() => {
  const res = tableData.value.map((item: any) => {
    return item;
  });
  console.log("все данные", res);
  return res;
});

const handleChange = () => {
  getSelectInfo.value.forEach((item: any) => {
    if (item.id === newEditing.value.address) {
      currentPremise.value = item.id;
      newEditing.value.address = item.address;
      newEditing.value.apartment_id = item.apartment_id;
      newEditing.value.premise_id = currentPremise.value;
    }
  });
  getApartment();
};
</script>

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
