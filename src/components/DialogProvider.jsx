import { createContext, useContext, useState } from "react"
import { cloneElement } from "react"
import { createPortal } from "react-dom";

const DialogContext = createContext(null)

export const useDialog = () => {
    const context = useContext(DialogContext)
    if (!context) {
        throw new Error("useDialog must be used within Dialog")
    }
    return context
}

export const DialogProvider = ({children})=> {
    const [open, setOpen] = useState(false)
    return (
    <DialogContext.Provider 
        value={
            {
                open, 
                setOpen,
            }
        }>
        {children}
    </DialogContext.Provider>
    )
}

export const DialogContent = ({children}) => {
    const context = useDialog()
    if (!context.open ) return
    
    return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" >
        <div className="card w-96 bg-slate-200 animate-in fade-in-50">
            <div className="card-body ">
                {children}            
            </div> 
        </div>
    </div>, document.body
    )
}

export const DialogTrigger = ({children}) => {
    const context = useDialog()
    if (children && typeof children !== "string") {
        return cloneElement(children, {
            onClick: (e)=> {
                context.setOpen(true)
                children.props.onClick(e)
            }
        })
    }
    return (
        <button className="btn btn-primary"  
                onClick={()=>{context.setOpen(true)}}>
            {children}
        </button>
    )
}

export const DialogClose = ({children}) => {
    const context = useDialog()
    if (children && typeof children !== "string") {
        return cloneElement(children, {
            onClick: (e)=> {
                context.setOpen(false)
                children.props.onClick(e)
            }
        })
    }
    return (
        <button className="btn btn-primary"  
                onClick={()=>{context.setOpen(true)}}>
            {children}
        </button>
    )
}