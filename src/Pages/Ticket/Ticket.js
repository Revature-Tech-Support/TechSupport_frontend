import React, { useRef, useState } from "react";
import axios from "axios";
import Layout from "../../Components/Layout/Layout";

const Ticket = () => {
  // states
  const [subject, setSubject] = useState("");
  const [issue, setIssue] = useState("");
  const [ticket, setTicket] = useState([]);

  const fileUpload = useRef();

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleIssueChange = (event) => {
    setIssue(event.target.value);
  };

  const submitTicket = (event) => {
    event.preventDefault();
    console.log(subject);
    console.log(issue);
    if (issue !== "") {
      axios
        .post("/tickets", {
          subject,
          issue,
          // files: fileUpload
        })
        .then(({ data }) => {
          if (data) {
            console.log(data);
            window.alert(
              `Your ticket with ID: ${ticket.id} has been submitted!`
            );
            setSubject("");
            setIssue("");
          } else {
            window.alert("Please enter in details about your issue.");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <>
      <Layout
            imgSrc = ""
            imgAlt = ""
            imgWidth = ""
            imgHeight = ""
            title = ""
            desc = ""
            jtClass = "pt-1"
            childClass = "create-ticket"
            >
        <h2 className='ticket-header display-4'>Create a Ticket</h2>
        <div className="container ticketContainer">
          <form>
            <div className="row justify-content-center">
              {/* <label htmlFor="subject" className="form-label">
                Subject
              </label> */}
              <div className="col-3 p-3">
                <input
                placeholder="Subject title"
                  type="text"
                  className="form-control"
                  input={subject}
                  onChange={(event) => handleSubjectChange(event)}
                />
              </div>
            </div>
            <div className="mb-3">
              {/* <label htmlFor="textArea" className="form-label">
                Issue
              </label> */}
              <textarea
                className="form-control"
                id="textArea"
                rows="4"
                placeholder="Please enter in details about your issue."
                input={issue}
                onChange={(event) => handleIssueChange(event)}
                required
              >
                {}
              </textarea>
            </div>
            <div className="mb-3">
              {/* <label htmlFor="formFileMultiple" className="form-label">
                Upload file(s) here
              </label> */}
              <input
                className="form-control"
                ref={fileUpload}
                type="file"
                // onChange={event => handleInputChange(event)}
                multiple
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary"
              onClick={(event) => submitTicket(event)}
            >
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Ticket;
