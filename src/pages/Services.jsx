import { useState } from "react"

import MobileApps from "./services/MobileApps"
import WebApps from "./services/WebApps"
import SocialMedia from "./services/SocialMedia"

export default function Services() {
    const [service, setService] = useState();

    return (
        <div>
            <h2 className="text-2xl font-extrabold">Our Services</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui quibusdam fugit nam cum, recusandae ducimus, nemo accusamus beatae nobis autem, laudantium dolorum inventore. Magnam cumque illo architecto deserunt sunt.</p>

            <div className="bg-sky-500 text-sky-100 p-3 flex gap-3 my-3">
                <button onClick={() => { setService(<MobileApps />) }}>Mobile Apps</button>
                <button onClick={() => { setService(<WebApps />) }}>Web Apps</button>
                <button onClick={() => { setService(<SocialMedia />) }}>Social Media</button>
            </div>

            <div className="border-2 p-3">
                {service}
            </div>
        </div>
    )
}
