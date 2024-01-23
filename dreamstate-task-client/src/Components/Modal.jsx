interface IProps {
    shipName: string,
    description: string
    img: string,
}

export default function Modal({modalElement}:{modalElement: IProps}) {
  return (
    <>
        <input type="checkbox" id={modalElement.shipName} className="modal-toggle" />
        <div className="modal" role="dialog">
        <div className="modal-box">
            <h3 className="font-bold text-lg">{modalElement.shipName}</h3>
            <img src={modalElement.img} alt="cruiser" />
            <p className="py-4">{modalElement.description}</p>
            <div className="modal-action">
            <label htmlFor={modalElement.shipName} className="btn">Close!</label>
            </div>
        </div>
        </div>
    </>
  )
}
