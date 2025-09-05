import { IconType } from "react-icons"


interface Props {
    stack: {
        title: string,
        icon?: IconType
        isImportant?: boolean
    }
}

export const StackItem = ({ stack }: Props) => {
    return (
        <h1 className={`border  badge-sm xs:bagde-md sm:badge-lg badge  badge-soft border-primary text-primary badge-primary ${stack.isImportant ? 'font-bold' : ''} flex flex-row gap-2 items-center`}>
            {stack.icon && <stack.icon />}
            {stack.title}
        </h1>
    )
}