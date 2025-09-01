import { IconType } from "react-icons"


interface Props {
    stack: {
        title: string,
        icon?: IconType
    }
}

export const StackItem = ({ stack }: Props) => {
    return (
        <h1 className='border badge-lg badge badge-primary badge-soft border-primary'>
            {stack.icon && <stack.icon />}
            {stack.title}
        </h1>
    )
}