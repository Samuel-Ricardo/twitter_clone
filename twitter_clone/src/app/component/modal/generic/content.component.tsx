export function ModalContentContainer(props: { children: any }) {
  return (
    <div
      className="
          relative
          w-full
          lg:w-3/6
          my-6 mx-auto
          lg:max-w-3xl
          h-full 
          lg:h-auto
        "
    >
      {props.children}
    </div>
  );
}
