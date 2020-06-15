import { FileAction } from "../actions/fileActions";

export type State = {
  file: {
    name: string;
    type: string;
    size: number;
    blob?: Blob;
  };
};

const initialReducer: State = {
  file: {
    name: "example.csv",
    type: "text/csv",
    size: 1.5,
  },
};

const fileReducer = (state = initialReducer.file, action: any) => {
  switch (action.type) {
    case FileAction.UPLOAD_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default fileReducer;
