import React from "react";


function TeamCard({ image, name, role }) {
    return (
        <div className="card">
            <img src={image} alt={name} className="card-img" />
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    );
}
export default TeamCard;