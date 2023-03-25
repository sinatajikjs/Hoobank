import React from "react";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section className="flex flex-wrap items-center justify-center my-9 md:px-10 px-16 gap-10 py-5">
      {clients.map((client) => {
        return (
          <div
            key={client.id}
            className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px]"
          >
            <img
              className="sm:w-48 w-[100px] object-contain"
              src={client.logo}
              alt="client-logo"
            />
          </div>
        );
      })}
    </section>
  );
};

export default Clients;
