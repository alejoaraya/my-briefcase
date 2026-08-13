
interface Props {
    stack: {
        title: string,
        icon?: React.FC<React.SVGProps<SVGSVGElement>>
        isImportant?: boolean
    }
}

export const StackItem = ({ stack: { title, icon: Icon, isImportant } }: Props) => {


    return (
        <div className={`border badge-lg badge  badge-soft border-primary text-primary badge-primary ${isImportant ? 'lato-bold' : ''} flex flex-row gap-2 items-center`}>
            {Icon && <Icon aria-hidden />} <span>{title}</span>
        </div>
    )
}