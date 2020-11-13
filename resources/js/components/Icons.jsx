import React from "react";

export const CloseIcon = props => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="#5f6368"
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    ></path>
    <path d="M0 0h24v24H0z" fill="none"></path>
  </svg>
);

export const TrashIcon = props => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="#5f6368"
      d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13zM9 8h2v9H9zm4 0h2v9h-2z"
    />
  </svg>
);

export const PlusIcon = props => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="#5f6368"
      d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
    />
  </svg>
);

export const SectionIcon = props => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="#5F6368"
      d="M19 5v4H4V5h15m0 10v4H4v-4h15m1-12H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm0 10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1z"
    />
  </svg>
);
