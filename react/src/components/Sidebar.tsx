import { IconClose } from "@assets/icons"
import Link from "@components/ui/Link"
import useSidebar from "@hooks/ui/useSidebar"
import { handleStopPropagation } from "@lib/utils/helper"
import { useEffect, useState } from "react"


const Sidebar = () => {
    const [topPosition, setTopPosition] = useState(0)
    const { handleToggleSidebar } = useSidebar()

    useEffect(() => {
        // Get Navbar Height for set position of the sidebar from top
        const navbarComp = document.getElementById("navbar")
        if (navbarComp) {
            setTopPosition(navbarComp?.clientHeight)
        }

    }, [])



    return (
        <>
            <div id="container-sidebar" className="h-full" onClick={handleToggleSidebar}>
                <div id="sidebar" onClick={handleStopPropagation} style={{ top: topPosition, }} className={`fixed h-full left-0 transition-all  duration-500   bg-white  overflow-y-auto w-0 md:w-[17rem]`}>

                    <div className="p-8 w-full flex flex-col gap-4 relative">
                        <IconClose id="icon-close" onClick={handleToggleSidebar} className="hidden  absolute top-6 right-6 cursor-pointer ml-auto" />
                        <div className="flex flex-col gap-4">
                            {
                                listGroupMenu?.map((groupMenu, i) => <div key={i} className="font-medium">
                                    <div className="mb-4">{groupMenu?.name}</div>
                                    <ul className="flex flex-col gap-2">
                                        {
                                            groupMenu?.childs?.map((menu, j) => <Link key={j} url={menu.url} label={menu?.name} />)
                                        }
                                    </ul>
                                </div>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div >
            <div id="overlay-sidebar" className={`md-overlay min-h-screeen`} ></div>
        </>
    )



}

const listGroupMenu = [
    {
        id: 0,
        name: 'Getting Started',
        childs: [
            {
                id: 0,
                name: 'introduction',
                url: '/'
            },
            {
                id: 0,
                name: 'Installation',
                url: '/'
            }
        ]
    },
    {
        id: 1,
        name: 'Components',
        childs: [
            {
                id: 0,
                name: 'Accordion',
                url: '/'
            }
        ]
    }
]


export default Sidebar