/* eslint-disable react/prop-types */

export default function Modal({modalElement}) {
  const {_id, shipName, description, img} = modalElement
  return (
    <>
        <input type="checkbox" id={_id} className="modal-toggle" />
        <div className="modal" role="dialog">
        <div className="modal-box">
            <h3 className="font-bold text-lg">{shipName}</h3>
            <img src={img} alt="cruiser" />
            <p className="py-4">{description}</p>
            <div className="modal-action">
            <label htmlFor={_id} className="btn">Close!</label>
            </div>
        </div>
        </div>
    </>
  )
}
