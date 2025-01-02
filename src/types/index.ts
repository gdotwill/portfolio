export interface TextProps {
    header: string;
}

export interface LinksProps {
    header: string;
}

export interface LinkProps {
    href: string,
    title: string
}

export interface TagProps {
    name: string; 
    onClick: React.MouseEventHandler<HTMLButtonElement>; 
    isSelected: any ;
}