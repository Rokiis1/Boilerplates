import React, { createContext } from "react";
import { Socket } from "socket.io-client";

export interface SocketState {
  socket: Socket | undefined;
  uid: string;
  users: string[];
}

export const defaultSocketState: SocketState = {
  socket: undefined,
  uid: "",
  users: [],
};

export type TSocketActions =
  | "update_socket"
  | "update_uuidv4"
  | "update_users"
  | "remove_user";

export type SocketPayload = string | string[] | Socket;

export interface SocketActions {
  type: TSocketActions;
  payload: SocketPayload;
}

export const SocketReducer = (state: SocketState, action: SocketActions) => {
  console.log(
    `Message Received - Action ${action.type} - Payload:`,
    action.payload
  );

  switch (action.type) {
    case "update_socket":
      return { ...state, socket: action.payload as Socket };
    case "update_uuidv4":
      return { ...state, uid: action.payload as string };
    case "update_users":
      return { ...state, users: action.payload as string[] };
    case "remove_user":
      return {
        ...state,
        users: state.users.filter((uid) => uid !== (action.payload as string)),
      };
    default:
      return state;
  }
};

export interface SocketProps {
  SocketState: SocketState;
  SocketDispatch: React.Dispatch<SocketActions>;
}

const SocketContext = createContext<SocketProps>({
  SocketState: defaultSocketState,
  SocketDispatch: () => {},
});

export const SocketConsumer = SocketContext.Consumer;
export const SocketContextProvider = SocketContext.Provider;

export default SocketContext;
