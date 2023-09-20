export const ModalContainer = (props: { children: JSX.Element }) => (
  <div
    className="
        justify-center 
        items-center 
        flex 

        overflow-x-hidden 
        overflow-y-auto
      
        fixed
        inset-0
        z-50
      
        outline-none
        focus:outline-none
      
        bg-neutral-800 
        bgroup-opacity-70 
      "
  >
    {props.children}
  </div>
);
