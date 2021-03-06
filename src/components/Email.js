import emailjs from 'emailjs-com';

const Email = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm("service_p8n19yj", "template_tgdqdxu", e.target, "user_YTUUg7WTOQ76j2WqhyfA1").then(res => {
            alert("Gửi Email thành công");
        }).catch(err => alert("Gửi Email không thành công"));
    }
    return (
        <div className="fluid-container"
            style={{
                marginTop: "50px",
                marginLeft: "75px",
                width: "72%",
                paddingTop: "100px",
            }} >
            <form className="row" style={{ margin: "25px 85px 75px 100px" }} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="FULL NAME" className="form-control" style={{marginLeft:"50px", marginRight:"103px",borderRadius:"1.25rem"}} />
                <input type="email" name="user_email" placeholder="EMAIL" className="form-control" style={{marginLeft:"50px", marginRight:"103px",borderRadius:"1.25rem"}} />
                <textarea name="message" rows="5" placeholder="COMMENTS ON SERVICES" className="form-control"style={{marginLeft:"50px", marginRight:"103px",borderRadius:"1.25rem"}}  />
                <input style={{ height: "79px", fontSize: "36px", color: "#617D98", marginTop:"5px",marginLeft:"50px", marginRight:"103px",borderRadius:"1.25rem" }} type="submit" value="SEND" className="form-control btn btn-dark"  />
            </form>
        </div>
    )
}

export default Email;
