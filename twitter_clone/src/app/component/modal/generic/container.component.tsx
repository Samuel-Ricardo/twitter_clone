export const ModalContainer = (props: { children: React.ReactNode }) => (
  <div
    className="
        justify-center 
        items-center 
        flex 
        flex-col
        

        
        z-50

        overflow-x-auto 
        overflow-y-auto
      
        fixed
        inset-0
        w-fit
        max-w-auto mx-auto
        max-h-screen
        h-fit my-auto
      
        outline-none
        focus:outline-none
              
        rounded-2xl
    
        pt-0
        pb-3
        px-2
    
        bg-neutral-800 
        shadow-xl shadow-cyan-500/50
      "
  >
    {props.children}
  </div>
);
