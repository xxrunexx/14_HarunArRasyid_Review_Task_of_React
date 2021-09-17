import Contact from "./Contact";

function Message(){
    return(
    <body>
        <div class="background1"></div>
        <div class="background2"></div>
        <div class="main">
            <table>
                <tr>
                    <td>Full Name</td>
                    <td>:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Email Address</td>
                    <td>:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td>:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Nationality</td>
                    <td>:</td>
                    <td></td>
                </tr>
            </table>

            <p id="desc">
                <i></i>
            </p>
            <hr />

            <p>
                Thanks for contacting us! <br />
                We will be in touch with you shortly.
            </p>
            <a class="btn btn-warning" href="/" role="button" id="btn-home">Home</a>
            <img src="assets/img/img-dot@2x.png" id="dot" alt="" />
        </div>
    </body>
    );
}

export default Message;