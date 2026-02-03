interface childItems{
    id:number;
    data:string
}

export interface items{
  id:number;
  item:string;
  link?:string;
  icon?:React.ComponentType<{size:number}>
  childs?:childItems[]
}