import { defineStore } from "pinia";

type Elements = {
  header: HTMLElement | null;
};

export const useElementStore = defineStore("elementStore", () => {
  const elements = reactive<Elements>({
    header: null,
  });

  const getElement = <KeyElement extends keyof Elements>(name: KeyElement) => {
    return elements[name];
  };

  const setElement = <KeyElement extends keyof Elements>(name: KeyElement, element: Elements[KeyElement]) => {
    elements[name] = element;
  };

  return { getElement, setElement };
});
