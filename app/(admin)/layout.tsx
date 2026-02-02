import React, { ReactNode } from 'react'
import SideBar from '../components/layouts/SideBar/SideBar'
import Container from '../components/layouts/LayoutsContainer/Container'
import SidebarProvider from '../features/SidebarProvider/SidebarProvider'

const layout:React.FC<{children:ReactNode}> = ({children}) => {
  return (
 <>
 <SidebarProvider>
 <Container>
    {children}
 </Container>
 </SidebarProvider>
 </>
  )
}

export default layout
