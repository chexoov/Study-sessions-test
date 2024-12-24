// ValidationRules.ts
import { reactive } from 'vue';

export const useValidationRules = () => {
  const checkAddress = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error('Please choose address'));
    }
    callback();
  };

  const checkApartment = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error('Please choose apartment'));
    }
    callback();
  };

  const checkLastName = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error('Please input last name'));
    }
    if (value.length < 3) {
      return callback(new Error('Last name should be more than 3'));
    }
    callback();
  };

  const checkName = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error('Please input name'));
    }
    if (value.length < 3) {
      return callback(new Error('Name should be more than 3'));
    }
    callback();
  };

  const checkPatronymic = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error('Please input patronymic'));
    }
    if (value.length < 3) {
      return callback(new Error('Patronymic should be more than 3'));
    }
    callback();
  };

  const checkData = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error('Please choose date'));
    }
    callback();
  };

  const checkPhone = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error('Please input phone'));
    }
    if (value.length < 11) {
      return callback(new Error('Phone should normal 11 numbers'));
    }
    callback();
  };

  const checkDescription = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error('Please input description'));
    }
    if (value.length < 3) {
      return callback(new Error('Description should be more than 3'));
    }
    callback();
  };

  const rules = reactive({
    address: [{ validator: checkAddress, trigger: 'blur',  }],
    apartment_id: [{ validator: checkApartment, trigger: 'blur' }],
    due_date: [{ validator: checkData, trigger: 'blur' }],
    'applicant.last_name': [{ validator: checkLastName, trigger: 'blur' }],
    'applicant.first_name': [{ validator: checkName, trigger: 'blur' }],
    'applicant.patronymic_name': [{ validator: checkPatronymic, trigger: 'blur' }],
    'applicant.username': [{ validator: checkPhone, trigger: 'blur' }],
    description: [{ validator: checkDescription, trigger: 'blur' }],
  });

  return { rules };
};

export default useValidationRules;