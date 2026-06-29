import SideBar from "../components/SideBar";
import Header from "../components/Header";

function Membership(){
    return(
        <div className="flex">

            <SideBar/>

           <div className="flex-1 bg-gray-100 p-4">

                 <Header/>
            <h2 className="text-xl font-bold mb-4">Membership Details</h2>
            <p>This is the membership page content.</p>
        </div>
        </div>
    )
}
export default Membership;