interface childItems{
    id:number;
    data:string;
    child_link:string
}

export interface items{
  id:number;
  item:string;
  link?:string;
  icon?:React.ComponentType<{size:number}>
  childs?:childItems[]
}

//for nav item props
interface itemArr {
  id: number;
  data: string;
  child_link: string;
}
export interface itemProps {
  href: string;
  item: string;
  link: string;
  childs?: itemArr[];
  Icon?: React.ComponentType<{ size: number }>;
}