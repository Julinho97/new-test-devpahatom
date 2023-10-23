
import { Sidebar } from '/components/Sidebar'
import { Header } from '/components/header'




export default function Layout() {


    return (

        <>
            <div className="mb-6 text-3xl font-boldf">
                <Header ellipse="ellipse-1-2.png" property1="default" />
            </div>
            <div className="mb-6 z-50 text-3xl font-boldf absolute">
                <Sidebar page="dashboard" text="DevPhantom" />
            </div>
        </>

    );

}
