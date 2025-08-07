import { LogOutIcon, UserIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/common'
import { ROUTES, VERSION } from '@/constants'

const NavBar = () => {
  // hooks

  return (
    <div className="bg-theme-night border-theme-night sticky top-0 z-20 box-border flex h-16 w-full flex-row items-center justify-between gap-x-10 border-b px-8">
      <Link to={ROUTES.home.path}>
        <h4 className="text-theme-white">ResuMATE</h4>
      </Link>
      <div className="flex w-fit flex-row items-center justify-center gap-x-2">
        <span className="text-theme-white">{VERSION}</span>
        <Button
          asChild
          className="text-primary flex flex-row items-center justify-center gap-x-1 px-3"
          size="sm"
          variant="primary"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="hover:[&>*]:text-primary data-[state=open]:bg-theme-primary data-[state=open]:[&>*]:text-primary flex aspect-square items-center justify-center p-0"
              size="sm"
              variant="primary"
            >
              <UserIcon className="text-primary size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="bottom" sideOffset={6} className="w-fit">
            <DropdownMenuItem className="flex w-fit flex-row items-center justify-center gap-x-2">
              <LogOutIcon className="text-theme-primary size-4" />
              <h5>Logout</h5>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default NavBar
