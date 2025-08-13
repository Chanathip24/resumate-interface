import { Package } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/common'
import { ROUTES, VERSION } from '@/constants'

const NavBar = () => {
  // hooks

  return (
    <div className="sticky top-0 z-20 flex w-full items-center justify-center py-2">
      <div className="bg-theme-night-300 border-theme-night box-border flex h-16 w-4/5 flex-row items-center justify-between gap-x-10 rounded-lg border-b px-8">
        <Link to={ROUTES.home.path} className="flex items-center gap-x-2">
          <Package className="bg-theme-white text-theme-night rounded-lg p-1" size={30} />
          <h4 className="text-theme-white">ResuMATE</h4>
        </Link>
        {/* menu */}
        <div className="flex w-fit flex-row items-center justify-center gap-x-2">
          <span className="text-theme-white">{VERSION}</span>
          <Button
            asChild
            className="text-primary flex flex-row items-center justify-center gap-x-1 px-3"
            size="sm"
            variant="primary"
          />
          <Button size="sm" variant="outline">
            Sign In
          </Button>
          {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="hover:[&>*]:text-primary data-[state=open]:bg-theme-primary data-[state=open]:[&>*]:text-primary flex aspect-square items-center justify-center p-0"
	@@ -36,7 +42,8 @@ const NavBar = () => {
              <h5>Logout</h5>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
        </div>
      </div>
    </div>
  )
}

export default NavBar
