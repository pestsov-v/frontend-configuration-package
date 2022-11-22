import React from 'react'
import {Button} from "../components/ui/Button/Button";
import {DeleteButton} from "../components/ui";

const HomePage = () => {
    return (<div>
        <Button appearance='ghost' arrow='right'>Main</Button>
        <DeleteButton />
    </div>)
}

export default HomePage