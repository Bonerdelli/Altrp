import React, { Component } from "react";
import Resource from "../../../../editor/src/js/classes/Resource";

class MailForm extends Component {
  state = {
    mail_driver: 'smtp',
    mail_host: '',
    mail_port: '',
    mail_username: '',
    mail_password: '',
    mail_encryption: '',
    // mail_from_address: '',
    // mail_from_name: ''
  };

  changeHandler = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
    const resource = new Resource({ route: `http://altrp.nz/write_mail_settings` });
    resource.post(this.state);
  };

  render() {
    const { mail_driver, mail_host, mail_port, mail_username, mail_password, mail_encryption/* , mail_from_address, mail_from_name */ } = this.state;
    return <form className="admin-form" onSubmit={this.submitHandler}>
      <div className="form-group">
        <label htmlFor="mail_driver">Driver</label>
        <select id="mail_driver" required
          name="mail_driver"
          value={mail_driver}
          onChange={this.changeHandler}
          className="form-control"
        >
          <option value="smtp">smtp</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="mail_host">Host</label>
        <input type="text" id="mail_host" required
          name="mail_host"
          value={mail_host}
          onChange={this.changeHandler}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="mail_port">Port</label>
        <input type="text" id="mail_port" required
          name="mail_port"
          value={mail_port}
          onChange={this.changeHandler}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="mail_username">User Name</label>
        <input type="text" id="mail_username" required
          name="mail_username"
          value={mail_username}
          onChange={this.changeHandler}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="mail_password">Password</label>
        <input type="password" id="mail_password" required
          name="mail_password"
          value={mail_password}
          onChange={this.changeHandler}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="mail_encryption">Encryption</label>
        <select id="mail_encryption" required
          name="mail_encryption"
          value={mail_encryption}
          onChange={this.changeHandler}
          className="form-control"
        >
          <option value="" />
          <option value="tls">tls</option>
          <option value="ssl">ssl</option>
        </select>
      </div>

      {/* <div className="form-group">
        <label htmlFor="mail_from_address">From Address</label>
        <input type="text" id="mail_from_address" required
          name="mail_from_address"
          value={mail_from_address}
          onChange={this.changeHandler}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="mail_from_name">From Name</label>
        <input type="text" id="mail_from_name" required
          name="mail_from_name"
          value={mail_from_name}
          onChange={this.changeHandler}
          className="form-control"
        />
      </div> */}

      <div className="btn__wrapper">
        <button className="btn btn_success" type="submit">Submit</button>
      </div>
    </form>;
  }
}

export default MailForm;