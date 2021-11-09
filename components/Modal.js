import {modalState} from '../atoms/modalAtom'
import {useRecoilState} from 'recoil'

function Modal(){
    const [open,setOpen] = useRecoilState(modalState)

    return(
        <div>
            hii
            {open && <p>Modal is open</p>}
        </div>
    )
}

export default Modal