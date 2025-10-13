import "./defaultHeaderInterface.css";

import DefaultHeaderInterfaceLogo from "../default header interface logo/DefaultHeaderInterfaceLogo.tsx";
import DefaultHeaderInterfaceLinkList from "../default header interface link list/DefaultHeaderInterfaceLinkList.tsx";

export default function DefaultHeaderInterface() {

    return (
        <>
            <div className="defaultHeaderInterface">
                <DefaultHeaderInterfaceLogo/>
                <DefaultHeaderInterfaceLinkList/>
            </div>
        </>
    )
}
