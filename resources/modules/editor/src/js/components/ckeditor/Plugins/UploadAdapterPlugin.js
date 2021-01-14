import Resource from "../../../classes/Resource";

class UploadAdapter {
  constructor(props) {
    this.loader = props;
    this.resource = new Resource({ route: "/admin/ajax/media" });
  }

  upload() {
    return new Promise((resolve, reject) => {
      this.loader.file.then(result => {
        this.resource.postFiles([result]).then(response => {
          console.log(response);
          resolve({
            default: response[0].url
          });
        });
      });
    });
  }
}

/**
 *
 * @param editor
 */
export default function UploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = loader => {
    return new UploadAdapter(loader);
  };
}
