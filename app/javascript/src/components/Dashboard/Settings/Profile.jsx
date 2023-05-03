import React from "react";

import { Container, Header } from "neetoui/layouts";

const Profile = () => (
  <Container>
    <Header className="neeto-ui-border-gray-200 border-b" title="My profile" />
    <div className="mx-auto flex h-full w-full items-center justify-end sm:max-w-md">
      <div className="flex w-full justify-end">
        <button
          className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold leading-4 text-white shadow-sm hover:bg-blue-700 focus:outline-none"
          type="button"
          onClick={() => {}}
        >
          Refer now!
        </button>
      </div>
    </div>
  </Container>
);

export default Profile;
