import React from 'react'
import {DeleteButton} from "../components/ui";

const HomePage = () => {
    return (<div>
        <DeleteButton color='red' size='big' finallyText='Удаляем' initialText='Удалить'></DeleteButton>
    </div>)
}

export default HomePage