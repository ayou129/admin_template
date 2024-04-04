<template>
  <PageWrapper title="修改当前用户密码" content="修改成功后会自动退出当前登录！">
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <BasicForm @register="register" />
      <div class="flex justify-center">
        <a-button @click="resetFields"> 重置 </a-button>
        <a-button class="!ml-4" type="primary" @click="handleSubmit"> 确认 </a-button>
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '@/components/Page';
  import { BasicForm, useForm } from '@/components/Form';
  import { useRouter } from 'vue-router';
  import { PageEnum } from '@/enums/pageEnum';
  import { formSchema } from './pwd.data';
  import { putAccountPassword } from '@/api/main/system';

  import { useMessage } from '@/hooks/web/useMessage';
  import { useI18n } from '@/hooks/web/useI18n';

  const router = useRouter();

  const { notification } = useMessage();
  const { t } = useI18n();

  defineOptions({ name: 'ChangePassword' });

  const [register, { validate, resetFields }] = useForm({
    size: 'large',
    baseColProps: { span: 24 },
    labelWidth: 100,
    showActionButtonGroup: false,
    schemas: formSchema,
  });

  async function handleSubmit() {
    try {
      const values = await validate();
      const { old_password, new_password } = values;

      // TODO custom api
      console.log(old_password, new_password);
      putAccountPassword(values)
        .then(() => {
          notification.success({ message: t(`sys.api.operationSuccess`) });
          setTimeout(() => {
            router.push(PageEnum.BASE_LOGIN);
          }, 1500);
        })
        .catch(() => {})
        .finally(() => {});
    } catch (error) {
      console.error(error);
    }
  }
</script>
