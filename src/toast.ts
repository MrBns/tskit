export type ToastConfig = {
  containerTemplate: typeof String.raw;
  position: "top" | "bottom" | "left" | "right";
  showIcon?: boolean;
};
class Toast {
  constructor(private config: ToastConfig) {}

  async success() {}
}

export { Toast };
