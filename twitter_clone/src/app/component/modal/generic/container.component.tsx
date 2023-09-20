export const ModalContainer = (props: { children: React.ReactNode }) => (
  <div
    className="
        justify-center 
        items-center 
        flex 
        flex-col

        overflow-x-hidden 
        overflow-y-auto
      
        fixed 
        z-50
      
        outline-none
        focus:outline-none
              
        rounded-md
    
        pb-6
        px-6
    
        bg-neutral-800 
        bgroup-opacity-70 
      "
  >
    {props.children}
  </div>
);
