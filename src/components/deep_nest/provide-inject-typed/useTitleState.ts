import { ref, readonly, InjectionKey } from 'vue';

export const useTitleState = () => {
  const title = ref<string>('initial title');
  const updateTitle = (value: string) => {
    title.value = value;
  };
  return {
    title: readonly(title),
    updateTitle
  }
};

type TitleStateType = ReturnType<typeof useTitleState>;
export const injectionKey: InjectionKey<TitleStateType> = Symbol();

