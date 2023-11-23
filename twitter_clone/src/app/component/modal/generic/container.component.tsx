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
    
        bg-gradient-to-br from-gray-100 to-gray-400/90
        shadow-[-5px_5px_20px_0px] shadow-cyan-500/50
      "
  >
    {props.children}
  </div>
);
