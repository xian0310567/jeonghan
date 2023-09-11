export interface SubmitPostStateCallback {
  title: {
    get: () => string;
    set: React.Dispatch<React.SetStateAction<string>>;
  };
  contents: {
    get: () => string;
    set: React.Dispatch<React.SetStateAction<string>>;
  };
  thumbnailImage: {
    get: () => File | null;
    set: React.Dispatch<React.SetStateAction<File | null>>;
  };
}
