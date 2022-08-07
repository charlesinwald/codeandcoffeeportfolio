import Image from "next/image";

export default function Card(index, title, description, photo, url) {
  return (
    <div key={index} className="card card-compact bg-base-100 shadow-xl m-3">
      {/* <div className="w-96">
        <figure>{<Image src={photo} alt={title} layout="fill" />}</figure>
      </div> */}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              window.location.href = url;
            }}
          >
            Visit
          </button>
        </div>
      </div>
    </div>
  );
}
