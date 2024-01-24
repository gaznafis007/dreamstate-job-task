import { useEffect, useState } from "react";
import Title from "./Title";
import Modal from "./Modal";
import CardSkeleton from "./CardSkeleton";

export default function Ships() {
    const [ships,setShips] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/ships')
        .then(res=>res.json())
        .then((data)=>{
            setShips(data)
            setIsLoading(false)
        })
        .catch(error=>console.error(error))
    },[])
    if(isLoading){
        return(
            <div className="my-5 mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center place-items-center">
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
            </div>
        )
    }
  return (
    <section id="our-cruisers">
        <Title>Our Cruisers</Title>
        <div className="my-5 mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 place-content-center place-items-center">
            {
                ships.map((ship)=>(
                    <>
                        <label key={ship._id} htmlFor={ship._id} className="cursor-pointer">
                        <div key={ship._id}>
                            <figure>
                            <img src={ship.img} alt="river cruiser" className="aspect-square" />
                            </figure>
                        </div>
                        </label>
                        <Modal modalElement={ship}></Modal>
                    </>
                ))
            }
        </div>

        {/* modal */}
        {/* <input type="checkbox" id="cruiser-modal" className="modal-toggle" />
        <div className="modal" role="dialog">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">This modal works with a hidden checkbox!</p>
            <div className="modal-action">
            <label htmlFor="cruiser-modal" className="btn">Close!</label>
            </div>
        </div>
        </div> */}
    </section>
  )
}
